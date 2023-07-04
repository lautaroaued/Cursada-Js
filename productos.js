
let item = localStorage.getItem('Favoritos');
let elemento = JSON.parse(item);
console.log(elemento);

let tabla = document.createElement("table");
tabla.className = "table caption-top";

for (let i = 0; i < elemento.length; i++) {
  let fila = document.createElement("tr");

  let codigo = document.createElement("td");
  codigo.textContent = elemento[i].codigo;

  let seguro = document.createElement("td");
  seguro.textContent = elemento[i].seguro;

  let monto = document.createElement("td");
  monto.textContent = elemento[i].monto;

  let imagen = document.createElement("td");
  let imagenElemento = document.createElement("img");
  imagenElemento.src = elemento[i].imagen;
  imagenElemento.alt = "Imagen " + elemento[i].codigo;
  imagen.appendChild(imagenElemento);

  let precio = document.createElement("td");
  precio.textContent = elemento[i].precio;

  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.addEventListener("click", () => eliminarElemento(i));

  fila.appendChild(codigo);
  fila.appendChild(seguro);
  fila.appendChild(monto);
  fila.appendChild(imagen);
  fila.appendChild(precio);
  fila.appendChild(botonEliminar);

  tabla.appendChild(fila);
}

document.getElementById("productos-seleccionados").appendChild(tabla);


function eliminarElemento(index) {
 
  elemento.splice(index, 1);

  
  let tablaActualizada = document.createElement("table");
  tablaActualizada.className = "table caption-top";

  for (let i = 0; i < elemento.length; i++) {
    let fila = document.createElement("tr");

    let codigo = document.createElement("td");
    codigo.textContent = elemento[i].codigo;

    let seguro = document.createElement("td");
    seguro.textContent = elemento[i].seguro;

    let monto = document.createElement("td");
    monto.textContent = elemento[i].monto;

    let imagen = document.createElement("td");
    let imagenElemento = document.createElement("img");
    imagenElemento.src = elemento[i].imagen;
    imagenElemento.alt = "Imagen " + elemento[i].codigo;
    imagen.appendChild(imagenElemento);

    let precio = document.createElement("td");
    precio.textContent = elemento[i].precio;

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", () => eliminarElemento(i));

    fila.appendChild(codigo);
    fila.appendChild(seguro);
    fila.appendChild(monto);
    fila.appendChild(imagen);
    fila.appendChild(precio);
    fila.appendChild(botonEliminar);

    tablaActualizada.appendChild(fila);
  }

  let productosSeleccionados = document.getElementById("productos-seleccionados");
  productosSeleccionados.innerHTML = ""; 
  productosSeleccionados.appendChild(tablaActualizada);
  mostrarImporteTotal()
}


function mostrarImporteTotal() {
    const totalMonto = elemento.reduce((acc, elem) => acc + elem.precio, 0);
  
    let totalMontoElemento = document.createElement("p");
    totalMontoElemento.textContent = `Monto Total a pagar por los seguros contratados es: $${totalMonto}`;
    
    let montoTotalContainer = document.getElementById("monto-total").firstElementChild;
    montoTotalContainer.textContent = "";
    montoTotalContainer.appendChild(totalMontoElemento);
  }

  mostrarImporteTotal();
  



  







