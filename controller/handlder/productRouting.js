const fs = require('fs')
const qs = require('qs')
const ProductService = require('c:\\Users\\NQCao\\WebstormProjects\\Demo_Case_MD3\\service\\ProductService.js')

class ProductRouting {
    static getHtmlProducts(products, indexHtml) {
        let tbody = '';
        products.map((product, index) => {
            tbody += `<tr>\
                            <th scope="row">${index + 1}</th>
                            <td>${product.names}</td> 
                            <td>${product.price}</td>
                            <td><a href="product/edit${product.id}">Edit</a></td>
                            <td><a href="product/delete${product.id}">Delete</a></td> 
                        </tr>`
        });
        indexHtml = indexHtml.replace('{products}', tbody);
        return indexHtml
    }

    static showHome(req, res) {
        fs.readFile('./views/index.html', "utf-8", async (err, indexHtml) => {
            if (err) {
                console.log(err)
            } else {
                let products = await ProductService.getProducts();
                indexHtml = ProductRouting.getHtmlProducts(products, indexHtml);
                res.writeHead(200, 'text/html');
                res.write(indexHtml);
                res.end();
            }
        })
    }

    static showFormCreat(req, res) {
        if (req.method === 'GET') {
            fs.readFile('./views/create.html', "utf-8", async (err, createHtml) => {
                if (err) {
                    console.log(err)
                } else {
                    let products = await ProductService.getProducts();
                    createHtml = ProductRouting.getHtmlProducts(products, createHtml);
                    res.writeHead(200, 'text/html');
                    res.write(createHtml);
                    res.end();
                }
            })
        } else {
            let productsChunk='';
            req.on('data',chunk=>{
                productsChunk+=chunk
            });
            req.on('end',async (err)=>{
                if(err){
                    console.log(err)
                }else {
                    let products=qs.parse(productsChunk)
                    await ProductService.saveProduct(products)
                    res.writeHead(301,{'location':'/'})
                    res.end();
                }
            })
        }
    }
}

module.exports = ProductRouting;