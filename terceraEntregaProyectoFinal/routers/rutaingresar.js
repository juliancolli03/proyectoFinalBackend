const {getUsuario,salir} = require("../controllers/ingresar")
const passport = require("./middleware/pasport")
const { Router } = require('express')
const upload = require("../multer")
const ingresar = Router()
const registrarse = Router()
const salirse = Router()


ingresar.get("/", getUsuario);
ingresar.post("/", passport.authenticate("login", { 
    failureRedirect: "/ingresar/errorIngresar", 
    successRedirect: "/chat",
}));
ingresar.get("/errorIngresar", (req, res,done) => {
    done("error de log in")
});

registrarse.get("/", getUsuario);
registrarse.post("/",upload.single("foto"),
 passport.authenticate("register", {
    failureRedirect: "/registrarse/errorRegistro", 
    successRedirect: "/chat",
}));
registrarse.get("/errorRegistro", (req, res,done)=> {
    done("error de registro")
});

salirse.get("/", salir);
module.exports= {ingresar,registrarse,salirse}