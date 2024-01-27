//const express = require('express');
import  express  from "express";
import { pokemon } from './routes/apipokemon.js'

const app = express();

//middlewares

app.use(express.json());

const port = 4000;

app.use('/api/pokemon', pokemon)


app.listen(port, ()=>{

    console.log(`Escuchando en el puerto ${port} `);
});