const {peligro} = require("../log")
const {infoo} = require("../nodemailer/nodemailer")

const mostrarDatosPantalla =  async (req, res) => {
    peligro.warn("tenes q estar loguado para entrar aca")
    const usuario = req.user.name
    const correo = req.user.username
    const direccion = req.user.direccion
    const numero = req.user.numero
    const edad = req.user.edad
    const fotohtml = req.user.urlfoto
    const fotonormal = req.user.foto
    if (usuario === null || usuario === undefined) {
        return res.redirect("/ingresar")
    }
    res.render('inicio', {usuario,fotohtml,fotonormal} )
    infoo(usuario,correo,direccion,numero,edad)
  }

module.exports= mostrarDatosPantalla