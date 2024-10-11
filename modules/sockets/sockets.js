const initSocket = (io) => {
    io.on('connection', (socket) => {
        console.log('Usuário Conectado:' + socket.id)

        socket.on('disconnect', () => {
            console.log("Usuário Desconectado: " + socket.id)
        })
    })
}

module.exports = initSocket