const app = require('express')()
const http = require('http').createServer(app)
const socketIo = require('socket.io')(http)

app.get('/', (req, res) => {
  res.send('Server is running')
})

socketIo.on('connection', (userSocket) => {
  userSocket.on('send_message', (data) => {
    console.log(data)
    userSocket.broadcast.emit('receive_message', data)
  })
})

app.listen(3000)