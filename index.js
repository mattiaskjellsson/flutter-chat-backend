const server = require('http').createServer()
const io = require('socket.io')(server)

io.on('connect', function (client) {

  console.log('client connect...', client.id);

  client.on('typing', (data) => {
    console.log('typing', data);
    io.emit('typing', data)
  })

  client.on('message', (data) => {
    console.log(data);
    io.emit('message', data)
  })

  // client.on('connect', () => {
  //   console.log('connect');
  // })

  client.on('disconnect', (data) => {
    console.log('client disconnect...', data, client.id)
  })

  client.on('error', (err) => {
    console.log('received error from client:', client.id)
    console.log(err)
  })
})

var server_port = process.env.PORT || 3000;

server.listen(server_port, (err) => {
  if (err) throw err
  console.log('Listening on port %d', server_port);
});

