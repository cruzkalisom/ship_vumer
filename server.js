const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

const initSocket = require('./modules/sockets/sockets')
const general = require('./modules/general')

const app = express()

const port = 50553

const server = http.createServer(app)
const io = socketIo(server)

app.use('/', general)

app.use((req, res) => {
    res.status(404).send('Funcionalidade ainda não existe')
})

initSocket(io)

server.listen(port, () => {
    console.log('Servidor Rodando na porta ' + port)
    console.log('link para acesso: http://localhost:'  + port)
})