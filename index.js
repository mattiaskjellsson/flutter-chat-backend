const app = require('express')()
const http = require('http').createServer(app)
const socketIo = require('socketio')(http)

app.get('/', (req, res) => {
  res.send('Server is running')
})

socketIo.on('connection', (userSocket) => {
  userSocket.on('send_message', (data) => {
    userSocket.broadcast.emit('receive_message', data)
  })
})

app.listen(3000)