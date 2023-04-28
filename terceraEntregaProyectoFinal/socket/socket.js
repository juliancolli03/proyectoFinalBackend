const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const express = require('express')
const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
const container = require("../persistencia/DAO/contenedorchat")
const { normalize, denormalize, schema } = require('normalizr')
const {peligro,error,todos} = require("../../logs/log")
let chat = new container()

const socketChat = async (socket) =>{
    todos.info("conectado al socket. listo para mandar msj")
    const listaMensajes = await chat.getChat()

    socket.emit('menssages', listaMensajes)
    socket.on('new-message', async data => {

    if (listaMensajes.length === 0) {
        return await chat.addChat({...data, id: 1,fecha:new Date().toLocaleString()
        })
    }
    await chat.addChat({...data, id: listaMensajes.length +1, fecha: new Date().toLocaleString(),
    })
  
    
    io.sockets.emit('menssages',  await chat.getChat())
    })
    todos.info("mandando msj")

}

module.exports= socketChat