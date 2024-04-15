const express = require('express');
const { query } = require('./conn');
const app = express();

app.use(express.json());

const PORT =  3003;

app.listen(3003, ()=>{console.log(`Funcionado na porta ${PORT}`)});

app.get('/', async (req, res) =>{
    const query = await queryTudo();
    return res.status(201).json(query);
});