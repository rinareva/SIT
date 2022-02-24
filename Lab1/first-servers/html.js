const http = require("http"); //Модуль http содержит функцию создания сервера

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {  //Добавим специальную функцию, которую мы называем прослушиватель запросов
	res.setHeader("Content-Type", "text/html");
	res.writeHead(200);
	res.end(`<html><body><h1>This is HTML</h1></body></html>`);
};
//Создаем сервер и используем прослушиватель запросов
const server = http.createServer(requestListener); //создаем новый объект server с помощью функции createServer модуля http. Этот сервер принимает запросы HTTP и передает их  функции requestListener
server.listen(port, host, () => { // привязываем его к сетевому адресу с используемым методом server.listen
	console.log(`Server is running on http://${host}:${port}`);
});