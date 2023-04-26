const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
      user: 'pruebacoder1211@gmail.com',
      pass: 'zryrpwputqicxqrz',
    },
    tls: {
      rejectUnauthorized: false
  }
  })

  const infoo =(nombre,correo,direccion,numero,edad)=>{
  transporter.sendMail({
    from: 'pruebacoder1211@gmail.com',
    to: 'pruebacoder1211@gmail.com',
    subject: "nuevo registro",
    text: `se registro la siguiente persona: Su nombre es: ${nombre},su correo es ${correo},vive en ${direccion}, su numero es ${numero} y tiene ${edad} años.`
  })}
  const enviarMail =(usuario,correo,productosCarro)=> transporter.sendMail({
    from: 'pruebacoder1211@gmail.com',
    to: 'pruebacoder1211@gmail.com',
    subject: "nuevo pedido de"+usuario+correo,
    text: `se registro un nuevo pedido: ${productosCarro} `
  })

module.exports={infoo,enviarMail}