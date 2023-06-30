
const coberturasDeSeguros = [
    { codigo: 1, seguro: "Casa", monto: "Hasta $500.000", imagen: "./imagenes/casa.jpg", precio: 999.99},
    { codigo: 2, seguro: "Campo", monto: "Hasta $100.000", imagen: "./imagenes/campo.jpg", precio: 199.99 }, 
    { codigo: 3, seguro: "Negocio", monto: "Hasta $300.000", imagen: "./imagenes/local comercial.jpg", precio: 599.99 },   
   
  ]

  const guardarEnLocalStorage = ()=> {
    if (segurosContratados.length > 0) {
        localStorage.setItem('Favoritos', JSON.stringify(segurosContratados))
    }
}

const recuperarFavsDeLocalStorage = ()=> {
    if (localStorage.getItem('Favoritos')) {
        return JSON.parse(localStorage.getItem('Favoritos'))
    } else {
        return []
    }
}

const segurosContratados = recuperarFavsDeLocalStorage()

const mostrarMensajes = (msg)=> {
    const divMsg = document.querySelector('div.cuadroDialogo')
    divMsg.textContent = msg || ''
   
}

