const fs=require('fs')

class NotFoundRouting{
    static showNotFound(req,res){
        fs.readFile('./views/err/err.html',"utf-8",(err, errHtml)=>{
            if(err){
                console.log(err)
            }else {
                res.writeHead(200,'text/html');
                res.write(errHtml);
                res.end();
            }
        })
    }
}
NotFoundRouting.showNotFound();
module.exports=NotFoundRouting;