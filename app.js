const express = require('express');
const fetch = require('node-fetch');
const PORT = 9000;
const app = express();


app.use(express.static('public'));
app.use(express.json());
app.listen(PORT, (req,res)=>{
    console.log( `**You're Connected at port ${PORT}`)
});