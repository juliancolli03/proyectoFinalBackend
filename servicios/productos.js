const containerProducts = require("../persistencia/DAO/contenedorProd")
const products = new containerProducts()
const getProductDTO = require("../persistencia/DTO/productoDTO")

const getAll = () =>{
    return products
		.get()
}

const addProduct = (newProduct) =>{
    const productDto = getProductDTO(newProduct)
    products
		.add(productDto)
}

const updateProduct = (id,newProduct) =>{
    const productDto = getProductDTO(newProduct)
    products
		.update(id, productDto)
}

const deleteProduct = (id) =>{
    return products
		.delete(id)
}

module.exports= {getAll,addProduct,updateProduct,deleteProduct}