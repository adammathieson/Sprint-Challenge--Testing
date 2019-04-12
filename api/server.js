const express = require('express');

const Games = require('../games/games-model');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Server is running')
})

module.exports = server;