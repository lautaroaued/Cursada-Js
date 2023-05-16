function login () {
    username = prompt("Ingresa su nombre de usuario:") 
    if (username.trim() !=="" ) { 
        alert("Bienvenido! "  + username)
    } else { alert("Error en el dato ingresado")}

}

login()

function calcularCuotas(monto, plazo) {
    const tasaInteres = 0.1; // Tasa de interés del préstamo (10%)
    let cuotaInteres = 0;
    let cuotaTotal = 0;
  
    for (let i = 1; i <= plazo; i++) {
      cuotaInteres = monto * tasaInteres / plazo; // Cuota de interés mensual
      cuotaTotal = monto / plazo + cuotaInteres; // Cuota total mensual (capital + interés)
  
      console.log(`Cuota mensual del mes ${i}: ${cuotaTotal.toFixed(2)}`);
  
    
    }
  }
  
  // Ejemplo de uso
  const montoPrestamo = parseFloat(prompt("Ingrese el monto del préstamo:"));
  const plazoPrestamo = parseInt(prompt("Ingrese el plazo del préstamo en meses:"));
  
  calcularCuotas(montoPrestamo, plazoPrestamo);


