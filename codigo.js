

botonCalendario = document.getElementById("cargarFecha")

botonCalendario.addEventListener("click", function(){
    document.getElementById("cargarFecha").value
    console.log(cargarFecha)
})


botonHoras = document.getElementById("horaTurno")

botonHoras.addEventListener("click", function(){
    let horas = document.getElementById("horas").value
    console.log(horas)
})



botonCorte = document.getElementById("botonCorte")


botonCorte.addEventListener("click", function(){
    let corte1 = document.getElementById("corte1").value
    console.log(corte1)

})

botonCorte2 = document.getElementById("botonCorte2")

botonCorte2.addEventListener("click", function(){
    let corte2 = document.getElementById("corte2").value
    console.log(corte2)

})

botonCorte3 = document.getElementById("botonCorte3")

botonCorte3.addEventListener("click", function(){
    let corte3 = document.getElementById("corte3").value
    console.log(corte3)

})

botonCorte4 = document.getElementById("botonCorte4")

botonCorte4.addEventListener("click", function(){
    let corte4 = document.getElementById("corte4").value
    console.log(corte4)

})


let Datos = []

class Cliente {
    constructor(nombreApellido, numeroContacto) {
        this.nombreApellido = nombreApellido;
        this.numeroContacto = numeroContacto;
    } 
}

document.getElementById("datosTurno").addEventListener("submit", function(e) {
    e.preventDefault()

    let datosCliente = new FormData(e.target)
    const turno = new Cliente(datosCliente.get("nombre y apellido"), datosCliente.get("numero de contacto"))
    console.log(turno);
})