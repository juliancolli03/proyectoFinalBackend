const controlerpedido = require("../controllers/controlerPedido")
const { Router } = require('express');
const pedido = Router()
pedido.get("/",controlerpedido)

module.exports=pedido