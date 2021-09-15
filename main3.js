/*
    function datosCliente() {
        let nameApellido = prompt("Por favor para registrar el turno en nuestra base de datos ingresa nombApellido y apellido");
        return nameApellido;
    }

    let nameApellido = datosCliente();
    console.log(nameApellido);


    function datosCliente2(){ 
    let celular = Number(prompt("Por favor ingresa numero de celular"));
        return celular;
    }

    let celular = datosCliente2();
    console.log(celular);


let clientes = [
        { nombApellido: "German Leon", dia: 1 + " Lunes", turno: "10 horas"}, 
        { nombApellido: "Juana Benavides", dia: 5 + " Viernes", turno: "16 horas"}, 
        { nombApellido: "Soledad Garcia", dia: 3 + " MIercoles", turno: "17 horas"},  
        { nombApellido: "Abel Diaz", dia: 6 + " Sabado", turno: "11 horas"},  
        { nombApellido: "Diana Garcia", dia: 2 + " Martes", turno: "17 horas"},  
        { nombApellido: "Vicente Romero", dia: 4 + " Jueves", turno: "17 horas"}, 
    ]
    
    console.log(clientes);
    
    console.log(clientes.find(cliente => cliente.nombApellido == "Juana Benavides"));
    
    console.log(clientes.filter(cliente => cliente.turno == "17 horas"));

    const ordenxDia = clientes.sort((a, b) => {
        if (a.dia < b.dia) {
            return - 1;
        }

        if (a.dia > b.dia) {
            return 1;
        }

        return 0;
    })
    
    console.log(ordenxDia);

    
    */