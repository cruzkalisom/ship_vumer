const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const session = require('express-session')
const BodyParser = require('body-parser')
const ejs = require('ejs')

const initSocket = require('./modules/sockets/sockets')
const general = require('./routes/general')

const app = express()

const port = 50553

const server = http.createServer(app)
const io = socketIo(server)

app.use(BodyParser.urlencoded({extended: false}))
app.use(BodyParser.json())

app.use(session({
    secret: 'ishçrfj03i2oijioeu85940oeg6qerfehfjhdkjsowehfekj',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}))

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.use('/', general)

app.use((req, res) => {
    res.status(404).send('Funcionalidade ainda não existe')
})

initSocket(io)

server.listen(port, () => {
    console.log('Servidor Rodando na porta ' + port)
    console.log('link para acesso: http://localhost:'  + port)
})