const tableBody = document.querySelector("tbody") 
const buscarCobertura = document.querySelector("input#buscarCobertura")
const verFavoritos = document.getElementById("ver-favoritos")
const modalContainer = document.getElementById("modal-container")

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

  modalContainer.innerHTML=""
  modalContainer.style.display = "block"
   
  const modalHeader = document.createElement("div");
  modalHeader.className= "modal-header"
  modalHeader.innerHTML = `  
  <h1 class= "modal-header-titulo"> Seguros Contratados</h1>
  `
  modalContainer.append(modalHeader)

  const modalButton = document.createElement("h1")
  modalButton.innerText = "x"
  modalButton.className = "modal-header-button"

  modalButton.addEventListener("click", ()  => { 

   modalContainer.style.display = "none" 

  }) 

  modalHeader.append(modalButton)
 
  segurosContratados.forEach((prod) => {
    let segurosElegidos = document.createElement("div")
    segurosElegidos.className = "modal-content"
    segurosElegidos.innerHTML = `  
       
    <tr>    
    <th scope="row">${prod.codigo}</th>
    <td>${prod.seguro}</td>
    <td>${prod.monto}</td>
    <td> <img src="${prod.imagen}" alt="Seguro de ${prod.seguro}" class="imagen-seguro"></td>
    <td>${prod.precio}$</td>
    
    </tr> `

       modalContainer.append(segurosElegidos)

  }) 

  const total = segurosContratados.reduce((acc , seguro) => acc + seguro.precio, 0);

  const totalCompra = document.createElement("div")
  totalCompra.className = "total-content"
  totalCompra.innerHTML = ` total a pagar: ${total} $ `;
  modalContainer.append(totalCompra);


    })
