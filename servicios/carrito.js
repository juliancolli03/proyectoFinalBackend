const containerCart = require("../persistencia/DAO/contenedorCarrito")
const containerProducts = require("../persistencia/DAO/contenedorProd")
const carrito = new containerCart()
const producto = new containerProducts()

const getCart = (correo) =>{
    return carrito
		.getCart(correo)
}

const addCart = (newCart) =>{
    carrito.addCart(newCart)
}
const cartUpdate = (correo,product) =>{
    carrito.updateCart(correo, { $push: { productos: product } })
}
const updateCartDeletedProduct = (idCarrito,product) =>{
    carrito.updateCart(idCarrito, { $pull: { productos: product } })
}
const deleteCart = (correo) =>{
    carrito.deleteCart(correo)
} 
const getidProduct = (id) =>{
    producto.getId(id)
}

module.exports={
    getCart,addCart,cartUpdate,getidProduct,updateCartDeletedProduct,deleteCart
}