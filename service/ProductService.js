const Connection = require('../model/connection.js');
Connection.connecting();
class ProductService{
    static getProducts(){
        let connection=Connection.getConnection();
        return new Promise((resolve, reject)=>{
            connection.query('select * from product',(err,products  )=>{
                if(err){
                    reject(err)
                }else {
                    resolve(products)
                }
            })
        })
    }
    static saveProduct(product){
        let connection=Connection.getConnection();
        return new Promise((resolve, reject)=>{
            connection.query(`insert into product(names, price, description) values('${product.names}','${product.price}','${product.description}')`,(err,products  )=>{
                if(err){
                    reject(err)
                }else {
                    resolve(products)
                }
            });
        })
    }
}
module.exports=ProductService
