                    //Cotizacion JS
// accedemos a las los elementos
const inputUsd =document.querySelector("#inputText");
const sectionCotizacion = document.querySelector(".conteinerCambio")
const selectCripto = document.querySelector("#selectCripto");
const options = document.createElement("option");
/* const criptoOne = criptoTwo.options[criptoTwo.selectedIndex].text
let seleecionar = document.querySelector(".divResultadoCotizacion"); */

//creamos una funcion flecha para acceder a los elementos
/* const cotizacionCripto = (historico , bajo ,nombre) => {
    const precioActual =  inputUsd.value / criptoTwo.value
    seleecionar.innerHTML = `<h3>necesiatas <strong>${inputUsd.value}</strong> para comprar <strong>${precioActual}</strong> ${nombre}, actualmente cotiza en ${criptoTwo.value}</h3>
    <h3>Precio actual :${criptoTwo.value}</h3>
    <h3>Precio historico :${historico}</h3>
    <h3>Precio más bajo : ${bajo} </h3>`
  sectionCotizacion.appendChild(seleecionar)
} */

// hago la validacion
/* let resultado = document.querySelector("button");
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
    }) */
  
//extraigo la api de cripto
const llamarCripto = () =>{
  const criptos = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b41bac7642msh93330af4cf78151p11835bjsn31cb1ee5ad28',
        'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
      }
    };  
 fetch('https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=20&order=market_cap_desc', criptos)
.then(response => response.json())
.then((response) => response.forEach(moneda => {
  console.log(moneda)
  if(selectCripto){
    selectCripto.innerHTML = `<option name="${moneda.id}">${moneda.name}</option>` 
  }
}))
.catch(err => console.error(err));       
 /* criptosMonedas.forEach(cripto =>{
  options.innerHTML = `${cripto.image} ${cripto.name}`
    selectCripto.appendChild(options)
  }) */
}
/* console.log(resultado)
if(resultado.status == 200){
  const criptosMonedas = await resultado.json()  
  console.log(criptosMonedas)
  criptosMonedas.forEach(cripto =>{
    options.innerHTML = `${cripto.image} ${cripto.name}`
    selectCripto.appendChild(options)
  })
} */
llamarCripto()
