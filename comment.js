var http = require('https')
var querystring = require('querystring')

var postData = querystring.stringify({
	'content':'期待下一次课程3...',
	'cid':348,
	'mid':8837
});

var options = {
	hostname:'www.imooc.com',
	port:443,
	path:'/course/docomment',
	method:'POST',
	headers:{
		'Accept': 'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding': 'gzip, deflate, br',
		'Accept-Language': 'zh-CN,zh;q=0.9',
		'Connection': 'keep-alive',
		'Content-Length': postData.length,
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie': 'imooc_uuid=233df938-b857-4306-9fe9-63c7ad02d361; imooc_isnew_ct=1540603133; zg_did=%7B%22did%22%3A%20%22166b31a4d01dfe-0758b519b6eaf6-333b5402-100200-166b31a4d046a0%22%7D; imooc_isnew=2; Hm_lvt_fb538fdd5bd62072b6a984ddbc658a16=1540603288,1541074003; loginstate=1; apsid=JkYjAwMjFlNDQ0ZTJhNWVkNzY5MTE0YjQ4MDBhYWIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANTM3MDY5MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5MTYxMDU3MTdAcXEuY29tAAAAAAAAAAAAAAAAAAAAADUzNzZhZTgxZTA1ZjJhMDU1YWI0YTY4NzBlMDc2NGVm4OzaW%2BDs2ls%3DMj; last_login_username=916105717%40qq.com; zg_f375fe2f71e542a4b890d9a620f9fb32=%7B%22sid%22%3A%201541073996271%2C%22updated%22%3A%201541074145373%2C%22info%22%3A%201540603137327%2C%22superProperty%22%3A%20%22%7B%5C%22%E5%BA%94%E7%94%A8%E5%90%8D%E7%A7%B0%5C%22%3A%20%5C%22%E6%85%95%E8%AF%BE%E7%BD%91%E6%95%B0%E6%8D%AE%E7%BB%9F%E8%AE%A1%5C%22%2C%5C%22%E5%B9%B3%E5%8F%B0%5C%22%3A%20%5C%22web%5C%22%7D%22%2C%22platform%22%3A%20%22%7B%7D%22%2C%22utm%22%3A%20%22%7B%7D%22%2C%22referrerDomain%22%3A%20%22%22%2C%22cuid%22%3A%20%221Ka2KJpsYHk%2C%22%7D; PHPSESSID=hvraauh7b52e19fl7kkph7bdh1; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1540685900,1540992896,1541073996,1541201463; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1541247680; cvde=5bdcde35069ab-33',
		'Host': 'www.imooc.com',
		'Origin': 'https://www.imooc.com',
		'Referer': 'https://www.imooc.com/video/8837',
		'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
		'X-Requested-With': 'XMLHttpRequest'
	}
}

var req = http.request(options,function(res){
	console.log('Status:'+res.statusCode)
	console.log('headers:'+JSON.stringify(res.headers))

	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk))
		console.log(typeof chunk)
	})

	res.on('end',function(){
		console.log('評論完畢！')
	})

	
})

	req.on('error',function(e){
		console.log('Error:'+e.message)
	})
	req.write(postData)
	req.end()