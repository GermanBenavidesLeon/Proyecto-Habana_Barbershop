/* Catalogo con Fetch y Json local */

catalogo = document.getElementById("catalogo");

fetch('./productos.json')
    .then(response => response.json())
    .then(data => {
        for(productos of data){
            catalogo.innerHTML += `
            <section class="miCatalogo"${productos.id}">
                <img src="${productos.img}" class="" alt="${productos.nombre}" style="width: 150px; height: 150px;">
                <div>
                    <h3>${productos.nombre}</h3>
                    <p class="habanaP">Productos Habana.</p>
                    <p class="precioP"> Precio: ${productos.valor} </p>
                    <a href="#" class="botonW"> Consultar Whatsapp</a>
                </div>
            </section>
     `       
    }
})
