//funciones conversor divisas
class Cripto{
    constructor(nombre ,precio){
        this.nombre = nombre;
        this.precio = precio
    }
}
const cripto1 = new Cripto("Bitcoin" , 2700);
const cripto2 = new Cripto("Lemon" , 345)
const cripto3 = new Cripto("Cardano" , 1)
const cripto4 = new Cripto("Dogecoin" , 1.1)
let criptoMonedas =[
    {TipoDeCripto:  "Bitcoin" , precio : cripto1.precio , disponibilidad :true},
    {TipoDeCripto: /* cripto2.nombre */ "Lemon" , precio :cripto2.precio , disponibilidad: false},  
    {TipoDeCripto: /* cripto3.nombre */ "Cardano", precio : cripto3.precio , disponibilidad :true},
    {TipoDeCripto: /* cripto4.nombre */ "DogeCoin" , precio :cripto4.precio , disponibilidad :true}, 
]
function iniciarCompra(){
     nombreUsuario = prompt("Cual es tu nombre");
    alert(`Saludos ${nombreUsuario} bienvenido a la tienda DevanCoin`);
    montoUsuario = Number(prompt("Ingrese su monto estimado, en USD o Cripto"))
}
function resumirCodeDivicion(moneda,cripto){
     Number(prompt(`Has elegido ${cripto} , elegi cuanto en usd queres vender`));
        let resultadoFinal = ventaCode /moneda
        alert(`Usted a vendido ${resultadoFinal} de ${cripto}`)
        datosUsuario.push(resultadoFinal)   
}
function resumirCodeCompra(moneda,cripto){
     Number(prompt(`Has elegido ${cripto} , elegi cuanto en usd queres vender`));
        let resultadoFinal = comprarCode * moneda
        alert(`Usted a comprado ${resultadoFinal} de ${cripto}`)
        datosUsuario.push(resultadoFinal)   
}
function compraVenta(){
     switch(producto){
          case "vender":
           ventaCode = prompt(`Ingrese la divisa que desea vender , valor US
            1  bitcoins
            2  Lemon Cash
            3 Cardano
            4  Dogecoin
            Esc para salir del algoritmo
            `)
            while(ventaCode !=="esc"){   
                 if(ventaCode ==="1"){
                    resumirCodeDivicion(cripto1.precio ,"bitcoin")
                    break
                }
                else if(ventaCode ==="2"){
                    resumirCodeDivicion(cripto2.precio ,"Lemon")
                    break
                }
                else if(ventaCode ==="3"){
                    resumirCodeDivicion(cripto3.precio ,"Cardano")
                    break
                }
                else if(ventaCode ==="4"){
                    resumirCodeDivicion(cripto4.precio ,"Dogecoin")
                    break
                }else{
                    alert("Por favor vuelva a ingresar un numero")
                }
                break
            }
        case "comprar":
            comprarCode = prompt(`Ingrese la divisa que quiera comprar , valor US
            1:bitcoins
            2:Lemon Cash
            3:Cardano
            4:Dogecoin
            Esc para salir del algoritmo
           `)
           while(comprarCode !== "esc"){
               if(comprar == "1"){
                resumirCodeCompra(cripto1.precio ,"Bitcoin")
                  break
               }
               else if(comprar == "2"){
                resumirCodeCompra(cripto2.precio ,"Lemon")
                 break
               }
               else if(comprar == "3"){
                resumirCodeCompra(cripto3.precio ,"Cardano")
                 break
               }
               else if(comprar == "4"){
                resumirCodeCompra(cripto4.precio ,"Dogecoin")
                break
               }else{
                   alert("Seleccione un numero valido ")
               }
           }
           break
        case "esc" || "salir":
            alert("No comprara nada")
        break
     }
    }
//ersto lo usare mas adelante
class UsuarioCoin{
    constructor(nombre , ahorroCripto , vendido , comprado ){
        this.nombre = nombre;
        this.ahorroCripto = ahorroCripto
        this.vendido = vendido;
        this.comprado = comprado
    }
    porcentajeGancias(){
        let ganado = (this.vendido - this.comprado) / this.vendido
        return ganado
    }
}
const USUARIO1 = new UsuarioCoin("Franco" , "5673" , "3479" , "5786");
const USUARIO2 = new UsuarioCoin("Franco" , "56453" , "3479" , "5786");
 console.log(USUARIO1.porcentajeGancias())
//main
let ventaCode;
let comprarCode;
let montoUsuario;
let whilePadre = true
let producto;
let datosUsuario = []
let nombreUsuario;
producto = prompt(`Quieres comprar/vender criptos o salir `)
while(producto != "esc" && whilePadre){
    iniciarCompra()
    compraVenta()
 let seguirComprando = prompt(`Desea seguir comprando/vendiendo`)
    if(seguirComprando ==="no"){
        alert(`Gracias por comercializar con nosotros ${nombreUsuario}`)
        break
    }else if(seguirComprando ==="si"){
        while(seguirComprando !== "no" ){
            producto = prompt(`bien , pon comprar o vender `)
            compraVenta()
            seguirComprando = prompt(`Desea seguir comprando/vendiendo xfd`)
            if(seguirComprando =="no"){
                whilePadre = false
            }
        }
    }
 }
alert(`Este fue le resultado de tu tu consulta ${datosUsuario.join(", ")} `)