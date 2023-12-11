const http= require('http')
//creating server
http.createServer((req,res)=>{
    //writing response
    res.write('<h1>hello world</h1>')
    res.end
}).listen(3000,console.log('server running...'))