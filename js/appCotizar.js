                    //Cotizacion JS
// accedemos a las los elementos
const inputUsd =document.querySelector("#inputText");
const sectionCotizacion = document.querySelector(".conteinerCambio")
const selectCripto = document.querySelector("#selectCripto");
const selecionarCripto = document.querySelector(".divResultadoCotizacion");
//extraigo la api de cripto
const resultadoCripto = document.querySelector("button")
const sectionTabla = document.querySelector(".tabla");
sectionTabla.innerHTML = `
<div class="headerCripto">Cotización Cripto</div>
<div class="atributosTabla">
<div>Nombre</div>
<div>Precio</div>
<div>Monedas Circulando</div>
</div>
`
const divValoresCriptos =document.createElement("DIV");
divValoresCriptos.className ="divValores"
//funcion para ahorar código
const pintarCripto = (input , op, name , precio , ath , atl , total , volume) =>{
  selecionarCripto.innerHTML = `<p>Con $US${input} podes comprar ${op} de ${name}</p>
  <p>Precio actual:${precio}</p>
  <p>Precio histórico :${ath}</p>
  <p>Precio minimo histórico:${atl}</p>
  <p>Monedas en circulación:${total}</p>
  <p>Volumen:${volume}</p>
  `
}
// creo la funcion donde extraere la informacion de las cripto
const llamarCripto = async() =>{
  const criptos = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b41bac7642msh93330af4cf78151p11835bjsn31cb1ee5ad28',
        'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
      }
    };  
const resultado = await fetch('https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=20&order=market_cap_desc', criptos)
let peticion = await resultado.json()
//creo las variables de la opeación
peticion.forEach((moneda) =>{
  //agrego cada moneda con el appendChild
  let opcionesSelect = document.createElement("option");
  opcionesSelect.setAttribute("value", `${moneda.current_price}`);
  let nombreOpciones = document.createTextNode(`${moneda.name}`);
  opcionesSelect.appendChild(nombreOpciones)
  selectCripto.appendChild(opcionesSelect)
  //hago que caundo sea click me lo dibuje en pantalla
resultadoCripto.addEventListener("click" , () =>{
  let dolaresIngresados = Number(inputUsd.value);
  let opcionSeleccioanda = Number(selectCripto.value);
  let operacion = dolaresIngresados / opcionSeleccioanda;
    //encuentro la cripro para hacer más operaciones
  const newArray =  Array.from(peticion)
  /* console.log(newArray) */
  const filterCripto = newArray.find((moneda) => selectCripto.value == moneda.current_price)
  let operaciones = {
    capturar : Number(inputUsd.value),
    operacionRealizada : operacion,
  }
  const guardarStorage = JSON.stringify(filterCripto)
  const guardarLocal =  JSON.stringify(operaciones)
  localStorage.setItem("Cripto" , guardarStorage)
  localStorage.setItem("Resultado" , guardarLocal)
      pintarCripto(inputUsd.value ,operacion , filterCripto.name ,filterCripto.current_price , filterCripto.ath ,filterCripto.atl , filterCripto.total_supply ,filterCripto.total_volume)
    })

  //creo las filas necesarias paar mostar los datos en la tabla
divValoresCriptos.innerHTML += `
<div><img src="${moneda.image}">${moneda.name}</div>
<div>${moneda.current_price}</div>
<div>${moneda.total_supply}</div>
`
if(sectionTabla){
  sectionTabla.appendChild(divValoresCriptos)
}
}
)}
llamarCripto()
//extraigo datos del localStorage
let criptos = localStorage.getItem("Cripto")
const criptoParse = JSON.parse(criptos)
let resultado = localStorage.getItem("Resultado")
const resultadoOp = JSON.parse(resultado)
  if(criptos !== null && resultado !== null){
    pintarCripto(resultadoOp.capturar , resultadoOp.operacionRealizada , criptoParse.name , criptoParse.current_price , criptoParse.ath , criptoParse.atl , criptoParse.total_supply , criptoParse.total_volume)
  inputUsd.value = resultadoOp.capturar
  }