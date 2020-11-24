// 导入模块
const http = require('http');   
// 创建web服务实例
const server = http.createServer();
// 监听request请求
server.on("request",(req,res) => {
    // res.end("hello world");
    // console.log(req.url);
    if(req.url === "/") {
        res.end("hello world");
    }
    if (req.url === "/html5") {
        res.end("2003");
    }
})
// 启动服务
server.listen(8080,() => {
    console.log("server is running at http://127.0.0.1:8080");
})