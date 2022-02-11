const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.status(200).send({message: 'ola mundo estou funcionando'})
})

app.listen(3001,() =>{
    console.log('api rodando na porta 3001')
})