const { io } = require('../server')

io.on('connection', (client) => {
    console.log("SE CONECTO==>> " + client);

    client.emit('enviarMensaje', {
        usuario: "Admin",
        msg: "Ya te contectaste",
    });

    client.on('disconnect', () => {
        console.log("Usuario desconectado")
    })

    //ESCUCHAR AL CLIENTE
    client.on('enviarMensaje', (data, callback) => {
        console.log("ME llego ===>> ", data)

        //CLIENT.BROADCAST.EMIT PARA ENVIAR A TODOS
        client.broadcast.emit('enviarMensaje', {
            usuario: "Admin",
            msg: data,
        });
        // if (message.usuario) {
        //     callback("Todo salio bien");
        // } else {
        //     callback("Todo salio mal");
        // }
    })
})