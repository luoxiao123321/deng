var http = require('http'),
    url = require('url'),
    fs=require('fs')

http.createServer(function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	var json = url.parse(req.url,true).query
//	if(json['user'] == 'lx' && json['pass'] == '123456'){
		res.write('ok')
		fs.writeFile('./aa.txt','账号：'+json.user+'密码：'+json.pass,function(err){
			if(err) throw err;
			console.log('写入完成');
		})
		
		fs.readFile('./aa.txt','utf-8',function(err,data){
			if(err) throw err;
			console.log(data)
			console.log('查看');
		fs.writeFile('./aa.html',data,function(err){
			if(err) throw err;
		})
		})
//	}else{
//		res.write('no')
//	}
	res.end();

}).listen(5000)