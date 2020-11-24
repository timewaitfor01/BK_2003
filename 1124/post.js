// 导入模块
const http = require("http");
const querystring = require("querystring");
// 创建web实例
const server =http.createServer();
// 监听request请求
server.on("request",(req,res) => {
    let arr =[];
    req.on("data",(buffer) =>{
        // console.log(buffer);
        arr.push(buffer);
    })
    req.on("end", () => {
        let buffer =Buffer.concat(arr);
        let str = buffer.toString()
        // console.log(str);
        console.log(querystring.parse(str));
    })
})

// 启动服务
server.listen(8080, ()=>{
    console.log("server is running at http://127.0.0.1:8080");
})