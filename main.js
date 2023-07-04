let arregloAuxiliar = [];
let resultadoContratado = '';
const coberturasDeSeguros = [
  { codigo: 1, seguro: "Casa", monto: "Hasta $500.000", imagen: "./imagenes/casa.jpg", precio: 999.99},
  { codigo: 2, seguro: "Campo", monto: "Hasta $100.000", imagen: "./imagenes/campo.jpg", precio: 199.99 }, 
  { codigo: 3, seguro: "Negocio", monto: "Hasta $300.000", imagen: "./imagenes/local comercial.jpg", precio: 599.99 },   
 
]

const tableBody = document.querySelector("tbody") 
const buscarCobertura = document.querySelector("input#buscarCobertura")
const verFavoritos = document.getElementById("ver-favoritos")



const agregarSeguroHtml = (prod)=> {

  return `<tr>    
              <th scope="row">${prod.codigo}</th>
              <td>${prod.seguro}</td>
              <td>${prod.monto}</td>
              <td> <img src="${prod.imagen}" alt="Seguro de ${prod.seguro}" class="imagen-seguro"></td>
              <td>${prod.precio}</td>
              <td> <button id="${prod.codigo}" class= "button"> AGREGAR </button>  </td>
          </tr> `

        } 

const seleccionarPolizas = () => {

  let arrayResultado = coberturasDeSeguros.filter((coberturas) => coberturas.seguro.toLowerCase().includes(buscarCobertura.value.trim().toLowerCase()))
  if(arrayResultado.length > 0) {
   cargarSeguros(arrayResultado)
  }   
}

buscarCobertura.addEventListener("search", seleccionarPolizas)

const activarClickEnBotonesContratar = ()=> {
 console.log("active botones");
    const botonesContratar = document.querySelectorAll('button')
  
  for (let botonContratar of botonesContratar)
        botonContratar.addEventListener ('click', ()=> {
          resultadoContratado = coberturasDeSeguros.find((prod) => prod.codigo === parseInt(botonContratar.id)) 
          arregloAuxiliar.push(resultadoContratado);
          console.log(arregloAuxiliar);
          console.log(botonContratar.id);
          guardarEnLocalStorage();
          
          
        }) 
      }

const cargarSeguros = (array) => {
        tableBody.innerHTML = ""
        array.forEach((producto) => {
          tableBody.innerHTML += agregarSeguroHtml(producto)          
        });
        activarClickEnBotonesContratar()
}

cargarSeguros(coberturasDeSeguros);


verFavoritos.addEventListener("click", ()=> {
  location.href = "favoritos.html" 
})

const guardarEnLocalStorage = ()=> {
     
        localStorage.setItem('Favoritos', JSON.stringify(arregloAuxiliar))
   
    
      console.log("imprimiendo localstorage");
      console.log(localStorage)
      console.log(resultadoContratado.seguro);
      mostrarMensajes(`El seguro de ${resultadoContratado.seguro} se AGREGO a tu portafolio..`) 
}
  

const mostrarMensajes = (msg)=> {
    const divMsg = document.querySelector('.cuadroDialogo');
    divMsg.innerHTML = msg || ''
   
}