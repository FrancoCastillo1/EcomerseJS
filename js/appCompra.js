//extraigo a los documentos
const sectionNFT = document.querySelector(".sectionContainer")
const mainNFT = document.querySelector(".mainCompras")
//preguntamos el nombre del usuario al ingresar a esta parte de la página, digamos que las otras partes son puramente informativas
let saldo;
let nombre;
let tarjetaUsuario;
//hago que el nombre y el saldo que ingresó el usuario aparezca en el html
const nombreDeUsuario = document.querySelector("#usuarioRegistrado");
const saldoDelUsuario = document.querySelector("#saldo")
//hago una funcion donde "registre al usuario" para que pueda rellenar usus datos paar la compra
const datos = () =>{
    Swal.mixin({
     input : "text",
     confirmButtonText : "Siguiente",
     progressSteps : ["1" , "2"],
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
             title:"Ingrese su tarjeta de crédito",
             text:"No compartiremos la información con nadie"
         },
    ]).then((result) =>{
     if(result.value){
        tarjetaUsuario =result.value[1] 
         nombre =result.value[0]
         saldo = Math.round(Math.random()*10000)
         if((tarjetaUsuario.length >=14 && tarjetaUsuario.length <=16) &&(nombre != "")){
             Swal.fire({
                 title : "Completado",
                 html:`<p>Gracias ${nombre} , su saldo actual de la tarjeta ${tarjetaUsuario} es de US$${saldo}</p>`,
                 confirmButtonText:"Terminado",
             })
             localStorage.setItem("Usuario" ,nombre)
             ejecucionBucle = false
             nombreDeUsuario.textContent = nombre;
             saldoDelUsuario.textContent = `$US${saldo}`
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
//la función se ejecutará apenas inicie la página
document.addEventListener("DOMContentLoaded" , () =>{
datos()
})
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
//hago el forEach para dibujar
let dibujar;
const buscar = document.querySelector("#buscarCompras");
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
//lo llamo desde json
/* const llamarProductos = async() =>{
   const resultado = await fetch("./productos.json")
   const respuesta = await resultado.json()
    arrayForEach(respuesta)
}
llamarProductos() */
let filter;
 arrayForEach(productos)     
//filtrado de palabras
 const valorcito =buscar.addEventListener("keyup" , () =>{
   const busqueda = productos.find((producto)=> buscar.value == producto.nombre)
    sectionNFT.innerHTML = `
    <div class ="contenidoNFT">
    <img src="${busqueda.imagen}" alt="NFT , Hacerse millonario , Cripto">
    <h2>${busqueda.nombre}</h2>
    <button class="for for" value ="${busqueda.precio}">Comprar</button>
     </div>
     `
    const newArrayIterable  = document.querySelectorAll(".for")  // ¿por que pongo 2 clases,  bueno , porque el swwtAlert estaba con un forEach , de array y para que me lo reconozca , puse 2)
    arrayModicar(newArrayIterable)
    if(buscar.value != busqueda.nombre){
        arrayForEach(productos)
    }
    })
mainNFT.appendChild(sectionNFT)
//filtrado por rango
const newDivRange = document.createElement("DIV");
const sectionInput = document.querySelector(".sectionInput")
newDivRange.innerHTML = `<input type="range" name="rango" id="rangoInput" min="0" max="5643" value="0">
<span class="spanRange">0</span>
`
const inputRange = document.querySelector("#rangoInput");
const spanRange = document.getElementsByClassName("spanRange");
    if(inputRange){
        inputRange.addEventListener("input" , () =>{
            if(spanRange){
                spanRange.textContent = inputRange.value
            }
        })
    }
sectionInput.appendChild(newDivRange)
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
//hago la funcion que realize la compra , la hara si el usario rellenó los datos
const arrayModicar =  (recorrido) =>{
    recorrido.forEach((pendiente) =>{
       pendiente.addEventListener("click" , () =>{
        if((nombre !== undefined && nombre != "") && (tarjetaUsuario !== undefined && tarjetaUsuario != "")){
            const encontrar = productos.find((producto) => producto.nombre == pendiente.previousElementSibling.textContent )
            console.log(encontrar)
            if(encontrar){
                Swal.fire({
                    title:  `Compra del ${encontrar.nombre}`,
                    text: `${nombre} estas a punto de agregar al carrito un NFT valorado en US$ ${encontrar.precio}, precionar Aceptar para agregar al carrito.Recordá que tu saldo es de US$${saldo}`,
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
                        //lo convierto a JSON
                        let convertirJson = JSON.stringify(arrayPusheado)
                        localStorage.setItem("Productos" , convertirJson)
                        //lo agrego al carrito
                        let ultimo = arrayPusheado[arrayPusheado.length -1]
                        if(ultimo){
                            divContainerText.innerHTML+= `
                            <div class="divProducto">
                            <img src="${ultimo.imagen}" alt"img hacerse millonario , bruh">
                            <p>Nombre ${ultimo.nombre}</p>
                            <p>Precio US$${ultimo.precio}</p>
                            </div>
                            `
                          newDivCompras.appendChild(divContainerText);
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
//en caso que el usario haya puesto caneclar , podrá volver a llenar sus datos
const volverAllenar = () =>{
        const bottonRegistrarse = document.querySelector("#usuarioDatos")
        if(bottonRegistrarse){
            bottonRegistrarse.addEventListener("click", () =>{
                if((nombreDeUsuario.textContent != nombre) && (saldoDelUsuario.textContent != saldo)){
                    datos()
                }
            })  
        }
}
volverAllenar()
//creo DIVS para utilizarlos
const divContainerText = document.createElement("div");
divContainerText.className ="infoDiv"
// creo la funcion para ver en caso quu el usuario desee vaciar el carrito
const vaciarCarroDefinitivo = () =>{
    divContainerText.innerHTML = ""
    arrayPusheado.splice(0,arrayPusheado.length)
}
// creo la funcion que mostrara la alerta del total y validara si hay suficiente saldo
const mostrarAlerta= (unos) =>{
    const newForEach = arrayPusheado.map((pendiente)=>`<br>${pendiente.nombre} con precio de ${pendiente.precio}`)
    const total =  arrayPusheado.reduce((acumm,item)=>{
        return acumm + item.precio
    },0)
    if(saldo >= total){
      /* const vuelto= saldo - total */
      saldo= Number(saldo - total)
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
                      text:  `El total de su compra fue $US${total},le quedan US$${saldo} en su saldo tras realizar la compra,vuelva pronto! `
                    }
                    )
                    arrayPusheado.splice(0,arrayPusheado.length)
                    divContainerText.innerHTML = ""
                    saldoDelUsuario.textContent = `$US${saldo}`
                }
            })
    }else{
        errorCompra("Saldo insuficiente" , "su saldo es menor al total de la compra , cargue saldo")
    }  
}
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
