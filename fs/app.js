// 引入依赖
var fs = require('fs');
var path = require('path');
var myDate = new Date();  
var mytime=myDate.toLocaleTimeString();  
console.log('begin:'+myDate.toLocaleTimeString());
fs.readFile(path.join(__dirname,'死亡笔记真人版_06[电影天堂www.dy2018.com].mkv'),
	function (err, data){
		if(err) throw err;
		fs.writeFile('ss.mkv',data,function (err){
			if(err) throw err;
			myDate = new Date();  
			console.log('done:'+myDate.toLocaleTimeString());
			
		});
	});

