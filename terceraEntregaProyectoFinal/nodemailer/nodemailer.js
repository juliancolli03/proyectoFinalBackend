const nodemailer = require("nodemailer")
const dotenv = require("dotenv")
dotenv.config();
const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
      user: process.env.MAIL,
      pass: process.env.CLAVE,
    },
    tls: {
      rejectUnauthorized: false
  }
  })

  const infoo =(nombre,correo,direccion,numero,edad)=>{
  transporter.sendMail({
    from: process.env.MAIL,
    to:process.env.MAIL,
    subject: "nuevo registro",
    text: `se registro la siguiente persona: Su nombre es: ${nombre},su correo es ${correo},vive en ${direccion}, su numero es ${numero} y tiene ${edad} años.`
  })}
  const enviarMail =(usuario,correo,productosCarro)=> transporter.sendMail({
    from: process.env.MAIL,
    to: process.env.MAIL,
    subject: "nuevo pedido de"+usuario+correo,
    text: `se registro un nuevo pedido: ${productosCarro} `
  })

module.exports={infoo,enviarMail}