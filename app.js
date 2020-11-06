const express = require('express');
const fetch = require('node-fetch');
const PORT = 9000;
const app = express();


app.use(express.static('public'));
app.use(express.json());
app.listen(PORT, (req,res)=>{
    console.log( `**You're Connected at port ${PORT}`)
});


app.get('/getapi', async (req, res) => {
	const data = {}
	const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
	const requestApi = await fetch(apiUrl).then(r=>r.json()).catch(err =>{err});
	data['quote'] = requestApi
	console.log('Logging...', data)

	res.json(data)
} )