const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain",
        "access-control-allow-origin":"*"
    })
    if(req.url=="/"){
        res.end("Good Morning Hiba")
    }else if(req.url=="/about"){
        res.end("This is About Page")
    }else{
        res.writeHead(401,{"content-type":"text/plain"})
        res.end("Page not found")
    }
})
server.listen(3000)