const querystring =require('querystring')

console.log(querystring.parse('name=zhangsan&age=22&gender=1'));
console.log(querystring.decode('name=zhangsan&age=22&gender=1'));
console.log(querystring.stringify({username:'lisi',password:'123456'}));
console.log(querystring.encode({username:'lisi',password:'123456'}));