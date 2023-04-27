const getUsuario = (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect("/chat")
    }
    return res.render("iniciodesesion")
};

const salir = (req, res) => {
    const usuario = req.user.name;
    req.logout(e => {
        const saludo = `Hasta luego ${usuario}`;
        res.render("saludo", {saludo});
    });
};

module.exports = {
    getUsuario,
    salir
}