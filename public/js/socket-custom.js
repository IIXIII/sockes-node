var socket = io();
//ESCUCHAR SUCESOS
socket.on('connect', function() {
    console.log("CONECTADO AL SERVIDOR!!!!");
})
socket.on('disconnect', function() {
    console.log("SE murio el server")
})

//PARA ENVIAR INFO
socket.emit('enviarMensaje', {
    usuario: "Yop",
    mensaje: "Hola Mundo",
}, function(mensaje) {
    console.log(mensaje)
});

//PARA RECIBIR INFO
socket.on('enviarMensaje', function(message) {
    console.log("Info de server llego ===>> ", message)
})