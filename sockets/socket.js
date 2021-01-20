const { io }=require('../index');

const Bands =require('../models/bands');
const Band =require('../models/band');
const bands=new Bands();

bands.addBand(new Band('Heroes del Silencio'));
bands.addBand(new Band('Queen'));

console.log(bands);


//mensajes con los sockets
io.on('connection',cliente=>{    
    console.log('CLIENTE CONECTADO');

    cliente.emit('active-bands',bands.getBands());

    cliente.on('disconnect',()=>{ 
        console.log('CLIENTE DESCONECTADO');
    });

    cliente.on('mensaje',(payload)=>{
        console.log(payload);
        io.emit('mensaje',{admin:'Nuevo Mensjae'});
    });

    cliente.on('vote-band',(payload)=>{
        bands.voteBand(payload.id);
        io.emit('active-bands',bands.getBands());

    });

    cliente.on('add-band',(payload)=>{
        const newBand=new Band(payload.name);
        bands.addBand(newBand);
        io.emit('active-bands',bands.getBands());
    });

    cliente.on('delete-band',(payload)=>{
        bands.deleteBand(payload.id);
        io.emit('active-bands',bands.getBands());

    });

    cliente.on('emitir-mensaje',(payload)=>{
        //io.emit('nuevo-mensaje',payload); // emite el msg a todos
        cliente.broadcast.emit('nuevo-mensaje',payload); // emite el msg a todos menos al que lo emite
    });
    

});