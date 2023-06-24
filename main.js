
/* 
function login() {
  nombre = prompt("Hola! como te llamas? ");
  if (nombre !== "") {
    alert("Bienvenido " + nombre);
  } else {
    alert("Error en el dato ingresado");
  }
}

login();

*/

const tableBody = document.querySelector("tbody") 


const agregarProductoHtml = (producto)=> {

  return `<tr>    
              <th scope="row">${producto.codigo}</th>
              <td>${producto.tipo}</td>
              <td>${producto.costoMetro}</td>
              <td>${producto.imagen}</td>
              <td>${producto.codigo} <button id="" class= "button"> 🤍 </button>  </td>
          </tr> `
} 





/*

function elegirTipologia(codigo) {
  let resultado = tipologia.find(
    (tipoPoliza) => tipoPoliza.codigo === parseInt(codigo)
  );
  return resultado;
}

function cotizar() {
  let codigo = prompt("Ingresa el codigo del seguro que quiere consultar. 1 - Casa / 2- Departamento / 3 - Campo / 4 - Local Comercial" );
  let seguroElegido = elegirTipologia(codigo);
  
  if (seguroElegido === 1 || 2 || 3 || 4) {
    confirm ("elegiste un seguro de " + seguroElegido.tipo);
  } 

  let metros = parseInt(prompt("Ingresa la cantidad de metros a cotizar"));

  if (metros > 1) {
    confirm("Ingresaste " + metros + " para cotizar.");
    const cuota = calcularCuotas(metros, seguroElegido);
    confirm(
      "El valor de cada cuota será de " +
        cuota.toFixed(2) +
        " ¿Podemos ayudarte en algo mas? "
    );
  } else {
    alert(" Ingresa por favor nuevamente los metros a cotizar ");
  }
}

cotizar();

function calcularCuotas(metros, seguroElegido) {
  const cuotaPoliza =
    metros * seguroElegido.costoMetro * seguroElegido.multplicador;
  return cuotaPoliza;
} */