const express = require('express')

const musicRouter = require('./music-be/music-be-router')

const server = express()

server.use(express.json())

server.use('/api/music', musicRouter)

module.exports = server
