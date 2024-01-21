// *Server config
const express = require('express');
const server = express();
const cors = require('cors')

// *Routers
const { router } = require('./routes/index')

//* Middlewares

server.use(express.json());
server.use(cors());
//* Este middleware agrega el /rickandmorty a todas las rutas del router
server.use('/rickandmorty', router);

module.exports = {
    server
}