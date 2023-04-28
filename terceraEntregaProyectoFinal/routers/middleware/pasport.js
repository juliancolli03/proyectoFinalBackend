const container = require("../../persistencia/DAO/contenedorUser")
const {error} = require("../../logs/log")
const passport = require ("passport")
const LocalStrategy = require("passport-local").Strategy
const bCrypt = require("bcrypt")
const dbUsuario = new container()

function createHash(password) {
    return bCrypt.hashSync( password, bCrypt.genSaltSync(10), null )
}
  
passport.use("register", new LocalStrategy({
    passReqToCallback: true,
}, async (req, username, password, done) => {
    const { name, direccion, numero, edad} = req.body
    const usuario = await dbUsuario.getUsuario(username)
    const {file} = req

    if (usuario) {
        return done("el usuario ya esta registrado", false)
    }

    const newUser = {
        username,
        password: createHash(password),
        name,
        direccion,
        numero,
        edad,
        foto:file.filename,
    };
    await dbUsuario.addUsuario(newUser)

    done(null, newUser)
}));

function isValidPassword(user, password) {
    return bCrypt.compareSync(password, user.password)
}

passport.use("login", new LocalStrategy(async (username, password, done) => {

    const usuario = await dbUsuario.getUsuario(username)

    if (!usuario) {
    error.error("no existe usuario")
        return done("no existe el usuario", false)
    };

    if (!isValidPassword(usuario, password)) {
        error.error("contraseña incorrecta")

        return done("Contraseña incorrecta", false)
    };

    return done(null, usuario);
}));   

passport.serializeUser((user, done) => {
    done(null, user.username)
});

passport.deserializeUser(async (username, done) => {
    const usuario = await dbUsuario.getUsuario(username)
    done(null, usuario)
});

module.exports= passport