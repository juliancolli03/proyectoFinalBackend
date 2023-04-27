const mostrarDatosPantalla = require("../controllers/controlerchat")
const { Router } = require('express')
const chat = Router()

chat.get("/",mostrarDatosPantalla)

module.exports=chat