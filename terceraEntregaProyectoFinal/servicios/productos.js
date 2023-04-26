const container = require("../persistencia/DAO/contenedorchat")

let chat = new container()

const getInicioModel = (usuario) =>{
    return{
        chat,
        usuario,
        fotohtml,
        fotonormal
    }
}

module.exports=getInicioModel