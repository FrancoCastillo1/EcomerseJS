//extraigo a los documentos
const sectionNFT = document.querySelector(".sectionContainer")
const mainNFT = document.querySelector(".mainCompras")
//hago que el nombre y el saldo que ingresó el usuario aparezca en el html
const nombreDeUsuario = document.querySelector("#usuarioRegistrado");
const saldoDelUsuario = document.querySelector("#saldo")
//creo una variable del locla global
let extraerStorage;
let saldoDelStorage;
//creo la funcion para pintrla , porque haora , simple , si lo hago en el ambito de la funcion datos funcion ala primera vez y lo hago fuera funciona todas las veces excepto la primera
const pintarDatos = () =>{
    extraerStorage = JSON.parse(localStorage.getItem("Usuario"))
    saldoDelStorage = JSON.parse(localStorage.getItem("saldoDelUsuario"))
    nombreDeUsuario.textContent = extraerStorage.nombreUsuario;
    saldoDelUsuario.textContent = `$US${saldoDelStorage.saldoTarjeta}`
}
//hago una funcion donde "registre al usuario" para que pueda rellenar usus datos paar la compra
const datos = () =>{
    Swal.mixin({
     input : "text",
     confirmButtonText : "Siguiente",
     progressSteps : ["1" , "2" , "3"],
     showCancelButton:true,
     cancelButtonText : "Cancelar",
     allowEscapeKey:false,
     allowOutsideClick:false,
     allowEscapeKey:false,
    }).queue([
         {
             title:"Introduce tu nombre",
             text:"El nombre nos asegura que seas vos el que este comprando"
         },
         {
            title:"Ingrese su domiclio legal",
            text:"Esta información servirá para cuando le enviemos el pedido"
        },
         {
             title:"Ingrese su tarjeta de crédito",
             text:"No compartiremos la información con nadie"
         }, 
    ]).then((result) =>{
     if(result.value){
       let  nombre =result.value[0]
       let  direccion = result.value[1]
       let  tarjetaUsuario =result.value[2] 
       let  saldo = Math.round(Math.random()*10000)
         if((tarjetaUsuario.length >=14 && tarjetaUsuario.length <=16) && (nombre != "")){
             Swal.fire({
                 title : "Completado",
                 html:`<p>Gracias ${nombre} , su saldo actual de la tarjeta ${tarjetaUsuario} es de US$${saldo}</p>`,
                 confirmButtonText:"Terminado",
             })
        //hago el localStorage de lo general y saldo(que irá cambiando , por eso lo pongo aparte)
        let datosObjeto = {
            nombreUsuario : nombre,
            direccionUsuario : direccion,
            tarjetaCredito : tarjetaUsuario,
        }
        let saldoObjeto = {saldoTarjeta : saldo}
          const datos = JSON.stringify(datosObjeto)
          const dinero = JSON.stringify(saldoObjeto)
          localStorage.setItem("Usuario" ,datos)
          localStorage.setItem("saldoDelUsuario" , dinero)
         pintarDatos()
         }else{
             Swal.fire({
                 title : "Dato de la tarjeta invalido",
                 html:`<p> ${nombre} , su tarjeta ${tarjetaUsuario} es ivalida ,presione "Rehacer" para volver a llenar el formulario`,
                 confirmButtonText:"Rehacer",
                 showCancelButton:true
             }).then((recarga) =>{
                recarga && location.reload()
             })
         }
     }
    })
}
if(localStorage.getItem("Usuario")){
    pintarDatos()
}
//la función se ejecutará apenas inicie la página
if((nombreDeUsuario.textContent =="Indefinido" ) && (saldoDelUsuario.textContent == "sin saldo")){
    document.addEventListener("DOMContentLoaded" , () =>{
    datos()
    })
}
// creo el array de objetos para el HTML, no lo hago desde fetch ya que ya lo hice con las cripto y aca se me complicaba mucho =/
const productos =[
    {
        id :1,
        nombre :"NFT Devan",
        imagen: "../img/img1.jpg",
        precio : 1000,
    },
    {
        id :2,
        nombre :"NFT GOOMBA",
        imagen :"../IMG/img2.jfif",
        precio : 3785,
    },
    {
        id :3,
        nombre : "NFT ROBOT XD",
        imagen :"../img/img3.webp",
        precio : 84,
    },
    {
        id :4,
        nombre : "NFT ¿ROBOT???",
        imagen :"../img/img4.webp",
        precio : 5643,
    },
    {
        id :5,
        nombre : "NFT MICHAEL JORDAN",
        imagen :"../img/IMG5.jfif",
        precio : 4243,
    },
    {
        id :6,
        nombre :"NFT LeBron James",
        imagen :"../img/IMG6.jfif",
        precio : 3453,
    },
    {
        id :7,
        nombre :"NFT ROCKY",
        imagen :"../img/img7.jpg",
        precio: 364,
    },
    {
        id :8,
        nombre :"NFT CHUCK NORRIS",
        imagen :"../img/img8.jfif",
        precio : 334,
    },
    {
        id :9,
        nombre : "NFT BRUCE LEE",
        imagen :"../img/img9.jfif",
        precio : 3424,
    },
    {
        id :10,
        nombre :"NFT FERNAN",
        imagen :"../img/img10.webp",
        precio : 3424,
    },
    {
        id :11,
        nombre :"NFT MESSI",
        imagen :"../img/img11jpg.jpg",
        precio : 800,
    },
    {
        id :12,
        nombre :"NFT ROBOT RARO",
        imagen :"../img/img12.webp",
        precio : 300,
    },
]
//creo DIVS para utilizarlos
const divContainerText = document.createElement("div");
divContainerText.className ="infoDiv"
//hago el forEach para dibujar
let dibujar;
const arrayForEach =(dibujo) =>{
   dibujo.forEach((producto) =>{
     sectionNFT.innerHTML += `
       <div class ="contenidoNFT">
       <img src="${producto.imagen}" alt="NFT , Hacerse millonario , Cripto">
       <h2>${producto.nombre}</h2>
       <button class="comprarNFT" value ="${producto.precio}">Comprar</button>
       </div>
       `

   }) 
}
let filter;
 arrayForEach(productos)     
//filtrado de palabras
const buscar = document.querySelector("#buscarCompras");
   buscar.addEventListener("keyup" , (e) =>{
   const busqueda = productos.find((producto)=> buscar.value == producto.nombre)
   if(busqueda){
      sectionNFT.innerHTML = `
       <div class ="contenidoNFT">
       <img src="${busqueda.imagen}" alt="NFT , Hacerse millonario , Cripto">
       <h2>${busqueda.nombre}</h2>
       <button class="for for" value ="${busqueda.precio}">Comprar</button>
        </div>
        `
       const newArrayIterable  = document.querySelectorAll(".for")  // ¿por que pongo 2 clases,  bueno , porque el swwtAlert estaba con un forEach , de array y para que me lo reconozca , puse 2)
    arrayModicar(newArrayIterable)
   }else if(buscar.value ==""){
    sectionNFT.innerHTML = ""
    arrayForEach(productos)
    const newCompras = document.querySelectorAll(".comprarNFT")
    arrayModicar(newCompras)
   }
})
mainNFT.appendChild(sectionNFT)
// hago que el usuario confirme la compra y creo un array para pushear los totales
let arrayPusheado = []
const confirmar = document.querySelectorAll(".comprarNFT");
const comprado = document.querySelector(".loComprado")
const botton = document.querySelector("#carrito");
//creo el div donde estará el añadido del producto
const divContainerBottons = document.createElement("div");
divContainerBottons.className = "conteinerBottom"
//creo le carrito de compras
const main = document.querySelector(".mainCompras");
const divComprasContainer = document.querySelector(".carritoCompra")
let newDivCompras = document.createElement("DIV")
newDivCompras.classList.add("subContainer")
//creo el icono de cerrar
const bottonCerar = document.createElement("button")
bottonCerar.className = "bottonCerrar"
bottonCerar.innerHTML = `<i class="fa-solid fa-xmark"></i>`
bottonCerar.addEventListener("click" , () =>{
    newDivCompras.outerHTML = ""
    sectionNFT.style.marginTop = "0px"
})
newDivCompras.appendChild(bottonCerar)
//creo la funcion que el caso quese presente cualquier error
const errorCompra = (razon , contenido) =>{
    Swal.fire({
        title:  razon,
        text: `${contenido}`,
        icon: 'error',
        padding : "1rem"
    })
}
//funcion de eliminar producto
const eliminar = (eli) =>{
    eli.forEach((eliminar) =>{
     eliminar.addEventListener("click" , () =>{
         arrayPusheado.splice(eliminar,1)
         eliminar.parentElement.outerHTML = ""  
     })
 })
}
//en caso que el usario haya puesto caneclar , podrá volver a llenar sus datos
const volverAllenar = () =>{
    const bottonRegistrarse = document.querySelector("#usuarioDatos")
    if(bottonRegistrarse){
        bottonRegistrarse.addEventListener("click", () =>{
            if((nombreDeUsuario.textContent == "Indefinido") && (saldoDelUsuario.textContent == "sin saldo")){
                datos()
            }
        })  
    }
}
volverAllenar()
//hago la funcion que realize la compra , la hara si el usario rellenó los datos
const arrayModicar =  (recorrido) =>{
    recorrido.forEach((pendiente) =>{
       pendiente.addEventListener("click" , () =>{
        if((extraerStorage !== undefined)&&(saldoDelStorage!== undefined)){
            const encontrar = productos.find((producto) => producto.nombre == pendiente.previousElementSibling.textContent )
            if(encontrar){
                Swal.fire({
                    title:  `Compra del ${encontrar.nombre}`,
                    text: `${extraerStorage.nombreUsuario} estas a punto de agregar al carrito un NFT valorado en US$ ${encontrar.precio}, precionar Aceptar para agregar al carrito.Recordá que tu saldo es de US$${saldoDelStorage.saldoTarjeta}`,
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: 'green',
                    cancelButtonColor: '#d33',
                    cancelButtonText :"Cancelar",
                    confirmButtonText: 'Aceptar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Operacion exitosa',
                            `El NFT ${encontrar.nombre} fue añadido correctamente`
                            )
                        //Guardo los datos ingresados por el usuario en un array de objetos
                      arrayPusheado.push({
                            nombre : encontrar.nombre ,
                            precio : Number(encontrar.precio),
                            imagen : encontrar.imagen
                      })
                        let ultimo = arrayPusheado[arrayPusheado.length -1]
                        if(ultimo){
                            divContainerText.innerHTML+= `
                            <div class="divProducto">
                            <img src="${ultimo.imagen}" alt"img hacerse millonario , bruh">
                            <p>Nombre ${ultimo.nombre}</p>
                            <p>Precio US$${ultimo.precio}</p>
                            <i class="fa-solid fa-ban"></i>
                            </div>
                            `
                          newDivCompras.appendChild(divContainerText);
                        //aca elimino el producto
                            let nodeEliminar = document.querySelectorAll(".fa-ban");
                            eliminar(nodeEliminar)
                        }
                    }
                })
            }
        }else{
            errorCompra("No llenaste tus datos", "si quieres comprar NFT asegúrate de llenar los datos en la esquina superior derecha")
        }
        })    
    })
}
arrayModicar(confirmar)
// creo la funcion para ver en caso quu el usuario desee vaciar el carrito
const vaciarCarroDefinitivo = () =>{
    divContainerText.innerHTML = ""
    arrayPusheado.splice(0,arrayPusheado.length)
}
//creo la funcion donde mostrará los envios 
let nuevoArray = []
let arrayPush = []
const enviosCompra = (nombre , total,  domicilio , regreso) =>{
    sectionNFT.innerHTML = ""
    //hago que se pinte los divs que marcaran el envio
    if(buscar){
        buscar.style.display = "none"
    }
    let regalos = ["regalo.jfif","regalo2.jfif","regalo3.jfif"]
      regreso.innerHTML = `<i class="fa-solid fa-arrow-right-to-bracket"></i>
      <div class="infoBell">
      <p>Presioná aca para volver a comprar</p>
      </div>
      `
      let direccionRandomHora = Math.round(Math.random()*23)
      let  direccionRandomMinuto = Math.round(Math.random()*60)
      let horaFinal = `${direccionRandomHora}:${direccionRandomMinuto}`
      let acceso = regalos[Math.round(Math.random()*3)]
      let idRandom = Math.round(Math.random()*100000)
       let Object = {
            regalos: acceso,
            idEnvio : idRandom,
            totalPedido : total
        } 
         const guardarInfo = JSON.stringify(Object);
         localStorage.setItem("Envios" , guardarInfo)
         const extraer = JSON.parse(localStorage.getItem("Envios"))
         nuevoArray.push(extraer)
          let divCompras = document.createElement("DIV");
          divCompras.className = "compra"
          let ultimoArray = nuevoArray[nuevoArray.length -1]
            if(ultimoArray){
                divCompras.innerHTML += `
                 <img src="../img/${ultimoArray.regalos}" alt="nft regalos devancoin">
                 <h2 class="verComprobante">Total de la compra<strong>US$${ultimoArray.totalPedido}</strong></h2>
                 <p>id del pedido<strong>#${ultimoArray.idEnvio}</strong></p>
                 <p class="direccionEnvio">El comprobante del pedido llegara a su domicilio ${domicilio} mañana a las ${horaFinal}hrs</p>
                `
            }
            //aca hay algo raro ,cuando appencheo me da el último ,pero cuando lo hago con DivContainerText, se quedan los elementos en el carrito ,pero aca se reemplaza ,sabes porque??
            sectionNFT.appendChild(divCompras)
        //comprobante
        const verComprobate = document.querySelector(".verComprobante")
        if(verComprobate){
            verComprobate.addEventListener("click" , () =>{
                Swal.fire({
                    title : "TOTAL De la Compra",
                    html : `<p>El total fue de: ${nombre}</p>`,
                    icon : "info",
                    showCancelButton: true,
                    confirmButtonColor: 'green',
                    cancelButtonColor: '#d33',
                    cancelButtonText :"Cancelar",
                    confirmButtonText: 'Aceptar'
                })
            })
        }
    //si el usuario desea pedir más NFT
    regreso.addEventListener("click" , () =>{
        sectionNFT.innerHTML = ""
        arrayForEach(productos)
        const newCompras = document.querySelectorAll(".comprarNFT")
       arrayModicar(newCompras)
        regreso.innerHTML = ""
        if(buscar){
            buscar.style.display = "block"
        }

    })
}
// creo la funcion que mostrara la alerta del total y validara si hay suficiente saldo
let total;
let newForEach;
const mostrarAlerta= (unos) =>{
     newForEach = arrayPusheado.map((pendiente)=>`<br>${pendiente.nombre} con precio de ${pendiente.precio}`)
     total =  arrayPusheado.reduce((acumm,item)=>{
        return acumm + item.precio
    },0)
    if(saldoDelStorage.saldoTarjeta >= total){
      saldoDelStorage.saldoTarjeta = Number(saldoDelStorage.saldoTarjeta - total)
      let newObject = {saldoTarjeta : saldoDelStorage.saldoTarjeta}
      localStorage.setItem("saldoDelUsuario" , JSON.stringify(newObject))
      saldoDelStorage = JSON.parse(localStorage.getItem("saldoDelUsuario"))
        Swal.fire({
            title : "TOTAL De la Compra",
            html : `<p>El total de la compra es de ${unos}: ${newForEach}</p>`,
            icon : "info",
            padding: "1rem",
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: '#d33',
            cancelButtonText :"Cancelar",
            confirmButtonText: 'Aceptar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon : "success",
                      padding : "1rem",
                      title : 'Gracias por Comprar en DevanCoin',
                      text:  `El total de su compra fue $US${total},le quedan US$${saldoDelStorage.saldoTarjeta} en su saldo tras realizar la compra,vuelva pronto! `
                    }
                    )
                    arrayPusheado.splice(0,arrayPusheado.length)
                    divContainerText.innerHTML = ""
                    saldoDelUsuario.textContent = `$US${saldoDelStorage.saldoTarjeta}`
                    //agrego los comprobantes
                    const buttonBell = document.querySelector("#envioCampana")
                    buttonBell.innerHTML =`<i class="fa-solid fa-bell"></i>
                    <div class="infoBell">
                    <p>Presiona la campana para poder ver el envio de la compra</p>
                    </div>
                    `
                    buttonBell.addEventListener("click" , () =>{
                        enviosCompra(newForEach , total , extraerStorage.direccionUsuario , buttonBell)
                        })
                }
            })
    
    }else{
        errorCompra("Saldo insuficiente" , "su saldo es menor al total de la compra , cargue saldo")
    }  
}
//confirmo su existencia para acceder luego
//¿hay uno o varios?
const unOrUnos = () =>{
    arrayPusheado.length>1?mostrarAlerta("unos"):mostrarAlerta("un")
}
//empiezo conla estructura HTML
const botonUser = divContainerBottons.innerHTML =`
<div class="buttonContainer">
<button id="vaciarCarrito">Vaciar Carrito</button>
<button class="comprar">Comprar</button>
</div>
`
newDivCompras.appendChild(divContainerBottons)
divComprasContainer.appendChild(newDivCompras).style.display = "none"
//evento comprar
const compra = document.querySelector(".comprar")
if(compra){
    compra.addEventListener("click" , () =>{
        divContainerText.innerHTML?unOrUnos():errorCompra("Error al comprar" ,"No se puede calcular el total si el carrito está vacio ")
    })
}
//ebvento vaciar
const vaciado = document.querySelector("#vaciarCarrito");
if(vaciado){
    vaciado.addEventListener("click" , () =>{
        divContainerText.innerHTML != ""?vaciarCarroDefinitivo() ="":errorCompra("Error al vaciar carrito" ,"El carro ya está vacio, ¿para que lo quieres vaciar?")
    })
}
//hago que si el boton es click pase esto
const dibujarCarro = () =>{
    botton.addEventListener("click" , () =>{
        sectionNFT.style.marginTop = "200px"
        divComprasContainer.appendChild(newDivCompras).style.display = "block"
    })
}
dibujarCarro()
