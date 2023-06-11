function login() {
  nombre = prompt("Hola! como te llamas? ");
  if (nombre !== "") {
    alert("Bienvenido " + nombre);
  } else {
    alert("Error en el dato ingresado");
  }
}

login();

const tipologia = [
  { codigo: 1, tipo: "Casa", multplicador: 1.1, costoMetro: 10.0 },
  { codigo: 2, tipo: "Departamento", multplicador: 1.05, costoMetro: 17.0 },
  { codigo: 3, tipo: "Campo", multplicador: 1.3, costoMetro: 40.0 },
  { codigo: 4, tipo: "Local comercial", multplicador: 1.7, costoMetro: 50.0 },
];

function elegirTipologia(codigo) {
  let resultado = tipologia.find(
    (tipoPoliza) => tipoPoliza.codigo === parseInt(codigo)
  );
  return resultado;
}

function cotizar() {
  let codigo = prompt(
    "Ingresa el codigo del seguro que quiere consultar. 1 - Casa / 2- Departamento / 3 - Campo / 4 - Local Comercial"
  );
  let seguroElegido = elegirTipologia(codigo);
  if (seguroElegido !== undefined) {
    confirm("elegiste un seguro de " + seguroElegido.tipo);
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
}