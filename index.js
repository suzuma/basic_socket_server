const express =require ('express');
const path=require('path');
require('dotenv').config();  //leemos la variable de entorno

//Aplicacion de Express
const app = express();

//crear servidor NODE
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');



//path publico (mostra la pagina web de default)
const publicpath=path.resolve(__dirname,'public');
app.use(express.static(publicpath));


server.listen(process.env.PORT,(err)=>{
    if ( err ) throw new Error(err);
    console.log('Servidor Corriendo en el puerto: ',process.env.PORT);
})