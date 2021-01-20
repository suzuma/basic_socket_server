const express =require ('express');
const path=require('path');
require('dotenv').config();  //leemos la variable de entorno

//Aplicacion de Express
const app = express();

//crear servidor NODE
<<<<<<< HEAD
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
=======
const server =require('http').createServer(app);
module.exports.io=require('socket.io')(server);
>>>>>>> 680eb9f87a0a846c48406e76a363336c4f78172b
require('./sockets/socket');



//path publico (mostra la pagina web de default)
const publicpath=path.resolve(__dirname,'public');
app.use(express.static(publicpath));


server.listen(process.env.PORT,(err)=>{
    if ( err ) throw new Error(err);
    console.log('Servidor Corriendo en el puerto: ',process.env.PORT);
})
