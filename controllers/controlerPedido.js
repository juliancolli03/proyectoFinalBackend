const containerCart = require("../persistencia/DAO/contenedorCarrito")
let miCarrito = new containerCart()
const enviarMsj = require("../../twilio/twilio")
const {enviarMail} = require("../nodemailer/nodemailer.js")

const hacerPedido = async (req,res)=>{
  const usuario = req.user.name
  const correo = req.user.username
  let carrito = await miCarrito.getCart(correo)
  let productosCarro = JSON.stringify(carrito.productos)
  res.json("gracias por tu compra")
  enviarMsj(productosCarro,usuario,correo)
  enviarMail(usuario,correo,productosCarro)      
  }

module.exports=hacerPedido