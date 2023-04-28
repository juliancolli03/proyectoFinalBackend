# PROYECTO FINAL BACKEND
## Para ejecturarla, en la consola de node ejecuta estos comandos: 
### `cd proyectoFinal`
### `npm i`
### `node server.js`
## Recomiendo para esta aplicacion, utilizar la extension rest de google chrome, para hacer el crud: 

Antes de comenzar, asi anda toda la aplicacion perfectamente, hay un archivo txt que se llama archivoEnv.txt . Ese archivo tiene todas las credenciales protegidas, ya que al subirlo a github se rompen las credenciales de algunas librerias. 

Hay que crear un archivo .env con todas esas credenciales, y ahi la aplicacion va a andar perfectamente.

Lo primero que hay que hacer, es ir al localhost 8080 a la ruta ingresar, y ahi tenes la opcion, de loguearte o registrate. Esas estrategias de autenticacion se hicieron con passport.

Por cada registro, me va a llegar a mi gmail un mensaje con los datos de registro.

 Ahi pasarias a la pantalla principal, que es un chat web socket. 
 Recomiendo probar la extension rest de google chorme, ya que te logueas del lado del mavegador, y gracias a ese logeo con la extension rest, podes hacer todas las operaciones de un crud.
Este crud tiene una pequeña validacion, para que solo un usuario administrador pueda subir productos.
El usuario solo podra hacer las operaciones de un crud con el carrito de compra.
## METODOS Y RUTAS PARA CRUD:
## PRODUCTOS:
GET  localhost:8080/productos OBTIENE PRODUCTOS
POST localhost:8080/productos CREA PRODUCTOS, OBTENIENDO JSON
PUT  localhost:8080/productos/:id OBTIENE EL PRODUCTO CON ESE Y LO ACTUALIZA
DELETE localhost:8080/productos/:id BORRA EL PRODUCTO CON ESE ID
## CARRITO:
GET localhost:8080/carrito OBTIENE TU CARRITO
POST localhost:8080/carrito/:id PONE EN EL CARRITO UN PRODUCTO
DELETE localhost:8080/carrito/:id ELIMINA DEL CARRITO UN PRODUCTO
DELETE localhost:8080/carrito ELIMINA TODO EL CARRITO

Se utilizó Mongo Atlas para el guardado de mensajes, productos, carritos y sesiones.
Tambien se utilizo el motor de plantillas de EJS para el Front-end.

Cuando quieras hacer un pedido, vas a tener que apretar el boton hacer pedido, que me va a mandar a mi numero de whatsapp y correo, la informacion.

## Muchas gracias por acompañarnos en toda la cursada profe. Un gusto haber aprendido con vos programacion backend! 

Hecho con 🧡 por Julian Colli.



