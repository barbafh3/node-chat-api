const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: "Buba",
        text: "Xama q eh nois",
        createdAt: 621
    });

    socket.on('createMessage', (message) => {
        console.log('create message', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
    });

    socket.on('disconnect', (socket) => {
        console.log('User disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
