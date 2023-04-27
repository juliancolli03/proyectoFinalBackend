class ProductDto{

    constructor({timestamp,nombre,descripcion,codigo,precio,foto,stock}){
        this.timestamp=timestamp
        this.nombre=nombre
        this.descripcion=descripcion
        this.codigo=codigo
        this.precio=precio
        this.foto=foto
        this.stock=stock
    }
    
}

const getProductDTO = (data) =>{
    return new ProductDto(data)
}

module.exports=getProductDTO