/**
 * Created by cai on 2016/4/30.
 */
var http = require('http');

http.createServer(function(req,res){

}).listen(3000);

/**
 * 说明：由于大部分请求是不包含正文的GET请求，Node提供了这个方便的方法。与http.request()唯一的区别是此方法将请求方式设置为GET，并且自动调用req.end()。
 * 应用：服务器端测试客服端请求调试等
 * @param {String} url 有效地址
 * @param {Function} callback
 */
http.get('http://www.baidu.com',function(res){
    res.setEncoding('utf-8');
    res.on('data',function (chunk) {
        console.log(chunk);
    });
    console.log('get response Code :' + res.statusCode);
}).on('error',function(e){
    console.log("Got error: " + e.message);
})