import express from 'express';

const web = express();
const PORT = 8000;
web.get('/html', (req, res) => res.send('Express + TypeScript Server'));
web.listen(5500, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});