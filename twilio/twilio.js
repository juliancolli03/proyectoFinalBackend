const dotenv = require("dotenv")
dotenv.config();
const accountId = process.env.ACCOUNTSID
const authTocken = process.env.AUTHTOCKEN
const client = require('twilio')(accountId, authTocken);

const enviarMsj  = (productosCarro,usuario,correo)=> client.messages
.create({
    body: "Nuevo pedido de" + productosCarro + ". El nombre del q lo solicto es "+ usuario +"y su mail es " + correo,
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+5491169253825'
})

module.exports= enviarMsj