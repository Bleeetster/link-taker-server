import express from 'express'
import fs from 'node:fs'

const port = 5439;

const server = express();

server.use(express.json())

server.post('/save-url', (req, res) => {
	if (!req.body || !req.body.url) {
		console.log('There is no URL');
		return res.status(400)
	}
	const url = req.body.url;
	console.log(url);
	fs.appendFile('sites', `${url}\n`, (err) => {
		if (err) {
			console.error(err);
			return res.status(500)
		}			
		else
			return res.status(200)
	})
})

server.listen(port, () => console.log('server started'))
