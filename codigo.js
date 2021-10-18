/*CALENDARIO*/
/* Array y llamado de los Id para crear calendario*/

let mesesNombres = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];

let fechaActual = new Date();
let diaActual = fechaActual.getDate();
let mesActual = fechaActual.getMonth();
let añoActual = fechaActual.getFullYear();

let fechas = document.getElementById('fechas');
let mes = document.getElementById('mes');
let año = document.getElementById('año');

let prevMes = document.getElementById('prev-mes');
let nextMes = document.getElementById('next-mes');

/*para cambiar los nombre de los meses del año del calendario */

mes.textContent = mesesNombres[mesActual];
año.textContent = añoActual.toString();

/*Evento para mover los botones de los meses*/

prevMes.addEventListener('click', ()=>mesAnterior());
nextMes.addEventListener('click', ()=>mesSiguiente());

/* Funcion para crear los dias del mes, dia actual y los dias anteriores del mes*/

const escribirMeses = (mes) => {
    for(let i = primerDia(); i>0;i--){
        fechas.innerHTML += ` <div class="calendario-item calenadario-dias_antes">${totalDias(mesActual-1)-(i-1)}</div>`;
    }

    for(let i=1; i<=totalDias(mes); i++){

        if(i===diaActual) {
            fechas.innerHTML += ` <div class="calendario-item fechas calendario-hoy">${i}</div>`;
        }else{
            fechas.innerHTML += ` <div class="calendario-item fechas">${i}</div>`;

        }
    }
}

/* funcion para la cantidad de los dias de cada mes*/

const totalDias = (mes) => {
    if(mes === -1) mes = 11;

    if(mes == 0 || mes == 2 || mes == 4 || mes == 6 || mes == 7 || mes == 9 || mes == 11) {
        return 31;
    }else if(mes == 3 || mes == 5 || mes == 8 || mes == 10){
        return 30;
    }else {
        return isLeap() ? 29:28;
    }

}

/* funcion para años biciestos*/

const isLeap = () => {
    return ((añoActual % 100 !==0) && (añoActual % 4 === 0) || (añoActual % 400 === 0));
    
}

/* funcion primer dia del mes*/

const primerDia = () => {
    let inicio = new Date(añoActual, mesActual, 1);
    return((inicio.getDay()-1) === -1) ? 6 : inicio.getDay()-1;
}

/* funcion dias del mes anterior*/
const mesAnterior = () => {
    if(mesActual !== 0) {
        mesActual--;   
    }else{
        mesActual = 11;
        añoActual--;
    }

    nuevoDia();
}

/* funcion del mes siguiente */
const mesSiguiente = () => {
    if(mesActual !== 11) {
        mesActual++;   
    }else{
        mesActual = 0;
        añoActual++;
    }

    nuevoDia();
}

/* funcion del nuevo dia y ecribir los dias de Js*/

const nuevoDia = () => {
    fechaActual.setFullYear(añoActual, mesActual, diaActual);
    mes.textContent =mesesNombres[mesActual];
    año.textContent =añoActual.toString();
    fechas.textContent = '';
    escribirMeses(mesActual);

}

escribirMeses(mesActual);


//=========================//
/* EVENTOS Y LOCALSTORAGE*/


fechas.addEventListener('click', function(e){
    localStorage.setItem('Fechas', e.target.textContent)
});


let botonHora = document.getElementById('botonHora')

botonHora.addEventListener('click', (e) =>{
    localStorage.setItem('hora', e.target.textContent)
})


let botonCorte = document.getElementById('botonCorte')

botonCorte.addEventListener('click', (e)=>{
    localStorage.setItem("Cortes", e.target.textContent)
    document.getElementById("datosTurno").reset();
})


let datos = []

class Cliente {
    constructor(nombre, apellido, numeroContacto) {
        this.nombre = nombre;
        this.apellido = apellido
        this.numeroContacto = numeroContacto;
    } 
}

document.getElementById("datosTurno").addEventListener("submit", function(e) {
    e.preventDefault()

    let datosCliente = new FormData(e.target)
    const turno = new Cliente(datosCliente.get("nombre"), datosCliente.get("apellido"), datosCliente.get("numero de contacto"))
    datos.push(turno)
    localStorage.setItem("Datos", JSON.stringify(datos))
    document.getElementById("datosTurno").reset();
})

//===========================//

//ANIMACION CON JQUERY//

$('#botonCarga').click(()=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El turno se ha creado, Gracias!',
        showConfirmButton: false,
        timer: 2000
      })
})