const {getCart,addCart,cartUpdate,getidProduct,updateCartDeletedProduct,deleteCart} = require("../servicios/carrito")

const getCarrito = (req, res) => {

    const correo = req.user.username

	getCart(correo)
		.then((carritos) => {
			res.json({ carritos })
		})
		.catch((err) => {
			res.json(err)
		});
};

const postProductoCarrito = (req, res) => {
	const correo = req.user.username
	const idProducto = req.params.id
	getCart(correo)
	.then((cart) => {
		if (!cart) {
			const newCart = {
				autor: {
					nombre: req.user.nombre,
					direccion: req.user.direccion,
					numero: req.user.numero,
					username: req.user.username,
				},
				productos: [],
				timestamp: Date.now(),
			};
			addCart(newCart)
		}
	});
	getidProduct(idProducto).then((producto) => {
		let product = producto;
		cartUpdate(correo, { $push: { productos: product } });
	});
	res.json(getCart(correo))
};
const deleteProductoCarrito = (req, res) => {
	const idProducto = req.body.id
	const idCarrito = req.user.username

	getidProduct(idProducto).then((producto) => {
		let product = producto
		updateCartDeletedProduct(idCarrito, { $pull: { productos: product } })
	});

	res.json(getCart(idCarrito))
};

const deleteCarrito = (req, res) => {
	const correo = req.user.username
    deleteCart(correo)
	res.json(getCart(correo))
};

module.exports={getCarrito,postProductoCarrito,deleteCarrito,deleteProductoCarrito}