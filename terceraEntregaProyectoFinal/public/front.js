const socket = io()
socket.on("menssages",data=>{
    
    const html = data.map(msj => {
        return `<div>
        <strong>${msj.autor.email}:</strong>
        <strong>${msj.text}</strong>
        <em>${msj.fecha}</em>
        </div>`
    })
    .join(" ")

    document.getElementById("messagesDeUsers").innerHTML = html
    })

function addMsj() {
    
    const message = {
        autor:{
            email: document.getElementById("email").value,
        },
        text: document.getElementById("textoo").value,
    }
    
    socket.emit('new-message', message)
}


