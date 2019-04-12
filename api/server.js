const express = require('express');

const Games = require('../games/games-model');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Server is running')
})

server.get('/games', (req, res) => {
    Games
        .getAll()
        .then(games => {
            res.status(200).json(games)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

server.post('/games', (req, res) => {
    let { title, genre } = req.body;
    if(!title || !genre) {
        res.status(422).json({ message: 'please provide title and genre'})
    }

    Games
        .insert({ title, genre })
        .then(game => {
            res.status(201).json(game)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


module.exports = server;