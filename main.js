let corteComun = " Corte de pelo ";
let barbaCorte = " Corte de Barba ";
let corteCompleto = "Corte de pelo mas corte de barba ";
let corteTinte = "Corte completo mas tinte ";

alert("Bienvenidos a Habana Barbershop, Por favor elija alguno de nuestros tipos de corte o servicios");

function consultaCortes(){
    let tipoServicios = Number(prompt(" 1: Corte comun, 2: Barba, 3: Corte completo, 4: Corte y tinte"));

        if(tipoServicios == 1){
            alert("Usted a elegido " + corteComun);
            
        }else if(tipoServicios == 2){
            alert("Usted a elegido " + barbaCorte);

        }else if(tipoServicios == 3){
            alert("Usted a elegido " + corteCompleto);

        }else if(tipoServicios == 4){
            alert("Usted a elegido  " + corteTinte);
            
        }else if(tipoServicios = 1 || tipoServicios >= 4){ 
            alert("por favor ingrese un numero de las opciones del 1 al 4");

        }else {
            alert("Por favor ingrese una opcion valida")
        }      

}

do{
    consultaCortes()
    var siga = prompt("consultar otro corte o servicio? si/no ").toLowerCase()
}while(siga == "si")

alert("A continuacion consulte por turnos y horarios disponibles de Habana Barbershop");

    class semana{
        constructor(dia1, dia2, dia3, dia4, dia5, dia6, turno1, turno2, turno3, turno4, turno5, turno6, turno7, turno8, turno9){
            this.dia1 = dia1;
            this.dia2 = dia2;
            this.dia3 = dia3;
            this.dia4 = dia4;
            this.dia5 = dia5;
            this.dia6 = dia6;
            this.turno1 = turno1;
            this.turno2 = turno2;
            this.turno3 = turno3;
            this.turno4 = turno4;
            this.turno5 = turno5;
            this.turno6 = turno6;
            this.turno7 = turno7;
            this.turno8 = turno8;
            this.turno9 = turno9;
            this.disponible = false;
        }
    
        consulta1(){
            console.log('Por favor elija un dia disponible de la semana para su turno desde el dia ' + this.dia1 + ' hasta el dia ' + this.dia6);
        }

        consulta2(){
            console.log('Por favor elija una hora disponible a partir de las ' + this.turno1 + ' am hasta las ' + this.turno9 + 
            'horas, a las 13 Horas no se toman turnos del dia ' + this.dia1 + ' al dia ' + this.dia6 + ', los dias ' + this.dia6 + 
            ' se toman turnos desde las ' + this.turno2 +'am a las ' + this.turno5 + ' horas');
        }

        turnoDisponible(){
            if (this.disponible == false){
                console.log("turno disponible");
            }else {
                console.log("turno no disponible, consulte por otro turno");
                this.disponible = false;
            }
        }
    }   
