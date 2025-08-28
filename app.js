import express from 'express'
import fs from 'node:fs'

const port = 5439;

const server = express();

server.use(express.json({ limit: '100mb' }))


server.post('/save-url', (req, res) => {
	if (!req.body || !req.body.url) {
		console.log('There is no URL');
		return res.sendstatus(400)
	}
	const url = req.body.url;
	console.log(url);
	fs.appendFile('sites', `${url}\n`, (err) => {
		if (err) {
			console.error(err);
			return res.sendStatus(500)
		}			
		else {
			res.sendStatus(200)
		}
	})
})

server.listen(port, () => console.log('server started'))
