const http = require('http');
// модуль для запуска веб-сервера
const fs = require('fs');
// модуль для работы с файлами

const html_log = fs.readFileSync('index.html')
const html_reg = fs.readFileSync('reg.html')
const css = fs.readFileSync('style.css')
const js = fs.readFileSync('action.js')

const server = http.createServer((req, res) => {
	// свойтва объекта req
	console.log(req.url);
	// console.log(req.method);
	// console.log(req.headers);

	switch (req.url) {
		case '/':
			res.writeHead(200, { 'Content-Type': 'text/html' }); // plain - в случае обычного текста
			res.end(html_log)

		case '/style.css':
			res.writeHead(200, { 'Content-Type': 'text/css' }); // plain - в случае обычного текста
			res.end(css)

		case '/action.js':
			res.writeHead(200, { 'Content-Type': 'text/javascript' }); // plain - в случае обычного текста
			res.end(js)

		case '/reg.html':
			res.writeHead(200, { 'Content-Type': 'text/html' }); // plain - в случае обычного текста
			res.end(html_reg)

		case 'some_thing.html':
			res.writeHead(200, { 'Content-Type': 'text/html' }); // plain - в случае обычного текста
			res.end(html_reg)
		
		default:
			res.writeHead(200, { 'Content-Type': 'text/plain' });
			res.end("Error404: NOT FOUND")
	}

}).listen(5000, () => console.log('Сервер запущен'))
// запуск веб-сервера

