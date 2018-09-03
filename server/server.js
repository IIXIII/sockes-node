const express = require('express');
const sockerIO = require('socket.io')
const http = require('http')
const path = require('path');
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();
let server = http.createServer(app);

app.use(express.static(publicPath));

//io = comunicacion del back
module.exports.io = sockerIO(server)
require('./sockets/socketIO')
server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});