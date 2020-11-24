// 导入模块
const fs = require('fs')
// 写入文件，fs.writeFile()
fs.writeFile('./text.txt','hello kitty',err => {
    console.log(err);
})
// 读取文件,fs.readFile()
fs.readFile('./text.txt','utf8',(err,data) => {
    if(err){
        console.log('出错了');
    }else{
        console.log(data);
    }
})
// 判断是否存在对应的文件,fs.existsSync()
console.log(fs.existsSync('./text.txt'));
// 获取文件信息，fs.stat()
fs.stat('./text.txt',(err,stats) => {
    console.log(stats);
})
// 删除文件,fs.unlink()
fs.unlink('./text.txt',err => {
    console.log(err);
})

