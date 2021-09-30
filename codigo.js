/* Boton fecha dias del Calendario*/

let Calendarios = []

botonCalendario = document.getElementById("cargarFecha")

botonCalendario.addEventListener("click", function(){
    let fecha = document.getElementById("dia1").value
    console.log(fecha)
    Calendarios.push(fecha)
    localStorage.setItem("Fecha", JSON.stringify(Calendarios))
})

botonCalendario2 = document.getElementById("cargarFecha2")

botonCalendario2.addEventListener("click", function(){
    let fecha2 = document.getElementById("dia2").value
    console.log(fecha2)
    Calendarios.push(fecha2)
    localStorage.setItem("Fecha", JSON.stringify(Calendarios))
})

botonCalendario3 = document.getElementById("cargarFecha3")

botonCalendario3.addEventListener("click", function(){
    let fecha3 = document.getElementById("dia3").value
    console.log(fecha3)
    Calendarios.push(fecha3)
    localStorage.setItem("Fecha", JSON.stringify(Calendarios))
})

botonCalendario4 = document.getElementById("cargarFecha4")

botonCalendario4.addEventListener("click", function(){
    let fecha4 = document.getElementById("dia4").value
    console.log(fecha4)
    Calendarios.push(fecha4)
    localStorage.setItem("Fecha", JSON.stringify(Calendarios))
})

botonCalendario5 = document.getElementById("cargarFecha5")

botonCalendario5.addEventListener("click", function(){
    let fecha5 = document.getElementById("dia5").value
    console.log(fecha5)
    Calendarios.push(fecha5)
    localStorage.setItem("Fecha", JSON.stringify(Calendarios))
})

botonCalendario6 = document.getElementById("cargarFecha6")

botonCalendario6.addEventListener("click", function(){
    let fecha6 = document.getElementById("dia6").value
    console.log(fecha6)
    Calendarios.push(fecha6)
    localStorage.setItem("Fecha", JSON.stringify(Calendarios))
})

botonCalendario7 = document.getElementById("cargarFecha7")

botonCalendario7.addEventListener("click", function(){
    let fecha7 = document.getElementById("dia7").value
    console.log(fecha7)
    Calendarios.push(fecha7)
    localStorage.setItem("Fecha", JSON.stringify(Calendarios))
})


/*Boton menu desplegable de las Horas*/

let horarios = []

botonHoras = document.getElementById("horaTurno")

botonHoras.addEventListener("click", function(){
    let horas = document.getElementById("horas").value
    console.log(horas)
    horarios.push(horas)
    localStorage.setItem("Hora", JSON.stringify(horarios))
})



/*Botones para elegir el tipo de cortes*/

let cortes = []

botonCorte = document.getElementById("botonCorte")


botonCorte.addEventListener("click", function(){
    let corte1 = document.getElementById("corte1").value
    console.log(corte1)
    cortes.push(corte1)
    localStorage.setItem("Tipo Corte", JSON.stringify(cortes))
})

botonCorte2 = document.getElementById("botonCorte2")

botonCorte2.addEventListener("click", function(){
    let corte2 = document.getElementById("corte2").value
    console.log(corte2)
    cortes.push(corte2)
    localStorage.setItem("Tipo Corte", JSON.stringify(cortes))
})

botonCorte3 = document.getElementById("botonCorte3")

botonCorte3.addEventListener("click", function(){
    let corte3 = document.getElementById("corte3").value
    console.log(corte3)
    cortes.push(corte3)
    localStorage.setItem("Tipo Corte", JSON.stringify(cortes))
})

botonCorte4 = document.getElementById("botonCorte4")

botonCorte4.addEventListener("click", function(){
    let corte4 = document.getElementById("corte4").value
    console.log(corte4)
    cortes.push(corte4)
    localStorage.setItem("Tipo Corte", JSON.stringify(cortes))
})


/*Clase para crear evento, y tomar informacion del cliente en console y localStorage*/

let datos = []

class Cliente {
    constructor(dia, hora, corte, nombreApellido, numeroContacto) {
        this.dia = dia;
        this.hora = hora;
        this.corte = corte;
        this.nombreApellido = nombreApellido;
        this.numeroContacto = numeroContacto;
    } 
}

document.getElementById("datosTurno").addEventListener("submit", function(e) {
    e.preventDefault()

    let datosCliente = new FormData(e.target)
    const turno = new Cliente(datosCliente.get("nombre y apellido"), datosCliente.get("numero de contacto"))
    console.log(turno);
    datos.push(turno)
    localStorage.setItem("Datos", JSON.stringify(datos))
})