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
              <td> <button id="${prod.codigo}" class= "button"> Contratar </button>  </td>
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
  const botonesContratar = document.querySelectorAll('button')
  
  for (let botonContratar of botonesContratar)
        botonContratar.addEventListener ('click', ()=> {
          let resultadoContratado = coberturasDeSeguros.find((prod) => prod.codigo === parseInt(botonContratar.id)) 
          segurosContratados.push(resultadoContratado)
          guardarEnLocalStorage()
          mostrarMensajes(`El seguro de ${resultadoContratado.seguro} se guardo en favorito..`) 
          
        }) 
      }

const cargarSeguros = (array) => {
        tableBody.innerHTML = ""
        array.forEach((producto) => {
          tableBody.innerHTML += agregarSeguroHtml(producto)          
        });
        activarClickEnBotonesContratar()
}

cargarSeguros( coberturasDeSeguros)




verFavoritos.addEventListener("click", ()=> {
   
  location.href = "favoritos.html" 

  segurosContratados.forEach((product) => {

    return `<tr>    
              <th scope="row">${prod.codigo}</th>
              <td>${prod.seguro}</td>
              <td>${prod.monto}</td>
              <td> <img src="${prod.imagen}" alt="Seguro de ${prod.seguro}" class="imagen-seguro"></td>
              <td>${prod.precio}</td>
              <td> <button id="${prod.codigo}" class= "button"> Contratar </button>  </td>
          </tr> `
  })

})