const fs = require('node:fs');
const http = require('http');
const { URL } = require('url');

const port = 5439;

const server = http.createServer( (req, res) => {
	let body = ``;
	req.on('data', (chunk) => {body += chunk.toString() } );
	req.on('end' , () => {
		const url = URL.parse(JSON.parse(body).url);
		console.log(url.href);
		fs.appendFileSync('sites', `${url}\n`, (err) => {
			if (err) {
				console.error(err);
				res.writeHead(201);
			}			
			else
				res.writeHead(503);

		})
		res.end();
	})
});
server.listen(port)
