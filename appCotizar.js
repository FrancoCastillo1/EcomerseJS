                    //Cotizacion JS
// accedemos a las los elementos
const inputUsd =document.querySelector("#inputText");
const sectionCotizacion = document.querySelector(".conteinerCambio")
const criptoTwo = document.querySelector("#selectCripto");
const criptoOne = criptoTwo.options[criptoTwo.selectedIndex].text
let seleecionar = document.querySelector(".divResultadoCotizacion");
//creamos una funcion flecha para acceder a los elementos
const cotizacionCripto = (historico , bajo ,nombre) => {
    const precioActual =  inputUsd.value / criptoTwo.value
    seleecionar.innerHTML = `<h3>necesiatas <strong>${inputUsd.value}</strong> para comprar <strong>${precioActual}</strong> ${nombre}, actualmente cotiza en ${criptoTwo.value}</h3>
    <h3>Precio actual :${criptoTwo.value}</h3>
    <h3>Precio historico :${historico}</h3>
    <h3>Precio más bajo : ${bajo} </h3>`
  /*    seleecionar.innerHTML = "" */
  sectionCotizacion.appendChild(seleecionar)
}
// hago la validacion
let resultado = document.querySelector("button");
    resultado.addEventListener("click" , () =>{
        if (criptoTwo.value == "2700") {
            cotizacionCripto(50000, 2000, "Bitcoins");
          } else if (criptoTwo.value == "300") {
            cotizacionCripto(3000, 1900, "Lemon Cash");
          } else if (criptoTwo.value == "1") {
            cotizacionCripto(10, 0.2, "Cardano");
          }else {
            cotizacionCripto(17.12, 0.11, "Dogecoin");
          }
    })

