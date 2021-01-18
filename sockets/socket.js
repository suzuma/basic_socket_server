const { io }=require('../index');

//mensajes con los sockets
io.on('connection',cliente=>{    
    console.log('CLIENTE CONECTADO');

    cliente.on('disconnect',()=>{ 
        console.log('CLIENTE DESCONECTADO');
    });

    cliente.on('mensaje',(payload)=>{
        console.log(payload);
        io.emit('mensaje',{admin:'Nuevo Mensjae'});
    })

});