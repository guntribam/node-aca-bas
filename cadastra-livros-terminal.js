var http = require('http');
const config = {
	hostname: 'localhost',
	port:3000,
	method: 'POST',
	path:'/produtos',
	headers: {
		'Accept':'application/json',
		'Content-type': 'application/json'
	}
};
var client = http.request(config, (res) => {
	console.log(res.statusCode);
	res.on('data', (body) => {
		console.log("corpo"+ body)
	})
});

var produto = {
	titulo: 'mais sobre node',
	descricao: 'xxxx',
	preco: 100
};
client.end(JSON.stringify(produto))