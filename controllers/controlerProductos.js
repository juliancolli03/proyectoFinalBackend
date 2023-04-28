const {getAll,addProduct,updateProduct,deleteProduct} = require("../servicios/productos")
const dotenv = require("dotenv")
dotenv.config()
const get = (req, res) => {
	getAll()
		.then((productos) => {
			res.json({ productos})
		})
		.catch((err) => {
			res.json(err)
		})
};

const add = (req, res) => {
	const correo = req.user.username
	if(correo==process.env.USERADMIN){
	const newProduct = {
		timestamp: Date.now(),
		nombre: req.body.nombre,
		descripcion: req.body.descripcion,
		codigo: req.body.codigo,
		precio: req.body.precio,
		foto: req.body.foto,
		stock: req.body.stock,
	};
	addProduct(newProduct)
		.then(() => {
			res.json({newProduct})
		})
		.catch((err) => {
			res.json(err);
		})
}
else{
	res.json("no estas autorizado a crear productos")
}
};

const update = (req, res) => {
	const correo = req.user.username
	if(correo==process.env.USERADMIN){

	const id = req.params.id
	const newProduct = {
		timestamp: Date.now(),
		nombre: req.body.nombre,
		descripcion: req.body.descripcion,
		codigo: req.body.codigo,
		precio: req.body.precio,
		foto: req.body.foto,
		stock: req.body.stock,
	}
	updateProduct(id, newProduct)

		.then(() => {
			res.json({newProduct})
		})
		.catch((err) => {
			res.json(err)
		})
}else{
	res.json("no estas autorizado a actualizar productos")
}
}

const deelete = (req, res) => {
	const correo = req.user.username
	if(correo==process.env.USERADMIN){
	const id = req.params.id
	const productoBorrado = deleteProduct(id)
		.then(() => {
			res.json({productoBorrado})
		})
		.catch((err) => {
			res.json(err)
		})
}else{
	res.json("no estas autorizado a borrar productos")
}
}

module.exports= {get,add,update,deelete}