/* Array de Cryptos */
/* let criptoMonedas = []; */

//funciones conversor divisas
class Cripto {
  constructor(nombre, precio , disponibilidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
  }
}
const cripto1 = new Cripto("Bitcoin", 2700 , true);
const cripto2 = new Cripto("Lemon", 345 , true);
const cripto3 = new Cripto("Cardano", 1 , false);
const cripto4 = new Cripto("Dogecoin", 1.1 , true);

// creo un array de objetos para que funciuone le find , lo que pedia el desafio
let criptoMonedas = [
  { TipoDeCripto: cripto1.nombre, precio: cripto1.precio, disponibilidad: cripto1.disponibilidad },
  {TipoDeCripto: cripto2.nombre, precio: cripto2.precio,  disponibilidad: cripto2.disponibilidad,
  },
  { TipoDeCripto: cripto3.nombre, precio: cripto3.precio, disponibilidad: cripto3.disponibilidad },
  { TipoDeCripto: cripto4.nombre, precio: cripto4.precio, disponibilidad: cripto4.disponibilidad },
];
/* Sirver para ver si le llego la información al Array */
console.log(criptoMonedas);

function iniciarCompra() {
  nombreUsuario = prompt("Cual es tu nombre");
  alert(`Saludos ${nombreUsuario} bienvenido a la tienda DevanCoin`);
}
function compraVenta() {
  switch (producto) {
    case "vender":
      ventaCode = prompt(`Ingrese la divisa que desea vender , valor US
            1  bitcoins
            2  Lemon Cash
            3 Cardano
            4  Dogecoin
            Esc para salir del algoritmo
            `);
          let recorrido = criptoMonedas.find(
              (cripto) => cripto.TipoDeCripto === ventaCode
              );
              if(recorrido.disponibilidad == true){
            let cantidad = Number(prompt(`Gracias por seleccionar ${recorrido.TipoDeCripto} con un precio de US$${recorrido.precio}
            Por favor ingrese la cantidad de cripto exacta para concretar la venta
              `));
             let operacionFinal = cantidad * recorrido.precio
                datosUsuario.push(operacionFinal)
                alert(`Se vendieron de ${recorrido.TipoDeCripto} $US ${operacionFinal}`)
              }else{
                alert(`No esta disponible`)
              }
      break;
    case "comprar":
      comprarCode = prompt(`Ingrese la cripto moneda que desea comprar
            1:bitcoins
            2:Lemon Cash
            3:Cardano
            4:Dogecoin
            Esc para salir del algoritmo
           `);
        let recorrido2 = criptoMonedas.find(
          (cripto) => cripto.TipoDeCripto === comprarCode
          );
          if(recorrido2.disponibilidad == true){
        let cantidad = Number(prompt(`Gracias por seleccionar ${recorrido2.TipoDeCripto} con un precio de US$${recorrido2.precio}
        Por favor ingrese la cantidad de cripto exacta para concretar la compra
          `));
         let operacionFinal = cantidad / recorrido2.precio
            datosUsuario.push(operacionFinal)
            alert(`Se compraron de ${recorrido2.TipoDeCripto} $US ${operacionFinal}`)
          }else{
            alert(`No esta disponible`)
          }
      break;
    case "esc" || "salir":
      alert("No comprara nada");
      break;
  }
}

//esto lo usare mas adelante
class UsuarioCoin {
  constructor(nombre, ahorroCripto, vendido, comprado) {
    this.nombre = nombre;
    this.ahorroCripto = ahorroCripto;
    this.vendido = vendido;
    this.comprado = comprado;
  }
  porcentajeGancias() {
    let ganado = (this.vendido - this.comprado) / this.vendido;
    return ganado;
  }
}
const USUARIO1 = new UsuarioCoin("Franco", 5673, 3479, 5786);/* A los numero, siempre declararlas como tipo number para realizar operaciones en un futuro */
const USUARIO2 = new UsuarioCoin("Franco", 56453, 3479, 5786);
console.log(USUARIO1.porcentajeGancias());
//main
let ventaCode;
let comprarCode;
let producto;
let datosUsuario = [];
let nombreUsuario;

/* producto = prompt(`Quieres comprar/vender criptos o salir `);
while (producto != "salir") {
  iniciarCompra();
  compraVenta();
  let seguirComprando =confirm( `Desea seguir comprando/vendiendo. Ingrese no para salir`);
  if (seguirComprando == false) {
    alert(`Gracias por comercializar con nosotros ${nombreUsuario}`);
    break;
  } 
}
alert(`Este fue le resultado de tu tu consulta ${datosUsuario.join(", ")} `); */
/* const objJson = {
  name : "franco",
  dni : 4716223,
  programador : true
}  // creo un objeto inicial

const convertirJson = JSON.stringify(objJson) // con esto pasamos el objeto a formato JSON
const localStore = localStorage.setItem("persona" , convertirJson)  como el localStore solo acepta claves y valores ,creamos una clave y anidamos el Json qu convertirmos recien */ 
/* const recuperar = localStorage.getItem("persona") */ // con getItem nos fijamos si esta
/* console.log(JSON.stringify(recuperar))  */// lo convertimos a JSON porque en caso que sea un obeto , lo pasamos


// ejercicios coder
let productos = [
  {id:1 , nombre:"Licuadora" , precio:233 },
  {id:2 , nombre:"Remera" , precio:4545 },
  {id:3 , nombre:"Pantalón" , precio:566 },
]
let promesa;
const filtrado  = (param) =>{
  setTimeout(() =>{ 
    promesa = productos.find((para) =>para.nombre == param)
  },3000)
  return new Promise((resolve, reject) => {
    if(promesa){
      resolve(console.log("El " + param + "existe en la base de datos")) 
    }else{
      reject(console.log("El nombre no existe la base de datos,por favor ingrese otro"))
    }
  })
}
filtrado("jssd")
        .then((prod) => console.log(prod))
        .catch((prod) => console.log(prod))