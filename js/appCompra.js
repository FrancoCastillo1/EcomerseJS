/* import Swal from 'sweetalert2/dist/sweetalert2.js' */
//extraigo a los documentos
const sectionNFT = document.querySelector(".sectionContainer")
const mainNFT = document.querySelector(".mainCompras")
// creo el array de objetos para el HTML
const productos =[
    {
        id :1,
        nombre :"NFT  Devan",
        imagen: "https://s2.coinmarketcap.com/static/img/coins/200x200/1.png",
        precio : 1000,
    },
    {
        id :2,
        nombre : "Lemon",
        imagen :"https://cdn-images-1.medium.com/max/1200/1*5ts4IXY1bvm1Fd3YJgSePg.png",
        precio : 3785,
    },
    {
        id :3,
        nombre : "Cardano",
        imagen :"https://cdn-images-1.medium.com/max/1200/1*5ts4IXY1bvm",
        precio : 84,
    },
    {
        id :4,
        nombre : "Dogecoin",
        imagen :"https://cdn-images-1.medium.com/max/1200/1*5ts4IXY1bvm",
        precio : 5643,
    },
    {
        id :5,
        nombre : "Etherium",
        imagen :"https://cdn-images-1.medium.com/max/1200/1*5ts4IXY1bvm",
        precio : 4243,
    },
    {
        id :6,
        nombre : "Polkadot",
        imagen :"https://cdn-images-1.medium.com/max/1200/1*5ts4IXY1bvm",
        precio : 3453,
    },
    {
        id :7,
        nombre : "USD COIN",
        imagen :"https://cdn-images-1.medium.com/max/1200/1*5ts4IXY1bvm",
        precio: 364,
    },
    {
        id :8,
        nombre : "Devan Coin",
        imagen :"https://cdn-images-1.medium.com/max/1200/1*5ts4IXY1bvm",
        precio : 334,
    },
    {
        id :9,
        nombre : "DAI",
        imagen :"https://cdn-images-1.medium.com/max/1200/1*5ts4IXY1bvm",
        precio : 3424,
    },
    {
        id :10,
        nombre : "Etherium",
        imagen :"https://cdn-images-1.medium.com/max/1200/1*5ts4IXY1bvm",
        precio : 3424,
    },
    {
        id :11,
        nombre : "Tather",
        imagen :"https://cdn-images-1.medium.com/max/1200/1*5ts4IXY1bvm",
        precio : 800,
    },
    {
        id :12,
        nombre : "ArgentinaCoin",
        imagen :"https://cdn-images-1.medium.com/max/1200/1*5ts4IXY1bvm",
        precio : 300,
    },
]
//hago el forEach para dibujar

const buscar = document.querySelector("#buscarCompras");
const arrayForEach =() =>{
    productos.forEach((producto) =>{
       sectionNFT.innerHTML += `
       <div class ="contenidoNFT">
       <img src "${producto.imagen}" alt "NFT , Hacerse millonario , Cripto">
       <h2> ${producto.nombre}</h2>
       <button class="comprarNFT" value ="${producto.precio}">Comprar</button>
       </div>
       `
   }) 
}
arrayForEach()    
buscar.addEventListener("keyup" , () =>{
    productos.filter((producto)=>{
        if(buscar.value == producto.nombre){
            console.log(producto.nombre.parentEl)
            const filtradoementArray = {
                id:"filtrado",
                nombre:producto.nombre,
                imagen: producto.imagen,
                precio:producto.precio
            }
            productos.push(filtradoArray);
            arrayForEach()  
            arrayModicar()
            sectionNFT.innerHTML = `
            <div class ="contenidoNFT">
            <img src "${filtradoArray.imagen}" alt "NFT , Hacerse millonario , Cripto">
            <h2> ${filtradoArray.nombre}</h2>
            <button class="comprarNFT" value ="${filtradoArray.precio}">Comprar</button>
            </div>
            `
        }
      }) 
    
})
mainNFT.appendChild(sectionNFT)
// hago que el usuario confirme la compra y creo un array para pushear los totales
let arrayPusheado = []
let filtrado =[]
const confirmar = document.querySelectorAll(".comprarNFT");
const comprado = document.querySelector(".loComprado")
const botton = document.querySelector("#carrito");

/* const filter = document.querySelectorAll(".filterComprarNFT")
const falsoArray = [filter ,"a"] */

// Esto para filtrar
const main = document.querySelector(".mainCompras");
const divComprasContainer = document.querySelector(".carritoCompra")
let newDivCompras = document.createElement("DIV")
newDivCompras.classList.add("subContainer")
// no se porqque no me funciona con el mismo query en filtrar el swwet Alert,por eso utiliza una funcion
const arrayModicar =  () =>{
    confirmar.forEach((pendiente) =>{
        pendiente.addEventListener("click" , () =>{
            Swal.fire({
                title:  `Compra del NFT ${pendiente.previousElementSibling.textContent}`,
                text: `Estas a punto de agregar al carrito un NFT valorado en US$${pendiente.value}, precionar Aceptar para agregar al carrito`,
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
                        `El NFT ${pendiente.previousElementSibling.textContent} fue añadido correctamente`
                        )
                    //Guardo los datos ingresados por el usuario en un array de objetos
                  arrayPusheado.push({
                        nombre : pendiente.previousElementSibling.textContent ,
                        precio : Number(pendiente.value)
                  })
                    //lo convierto a JSON
                    let convertirJson = JSON.stringify(arrayPusheado)
                    localStorage.setItem("Productos" , convertirJson)
                }
            })
        })    
    } 
    )
}
arrayModicar()
// creo esta constante para que sea de lectura global
//creo DIVS para utilizarlos
const divContainerBottons = document.createElement("div");
divContainerBottons.className = "conteinerBottom"
const divContainerText = document.createElement("div");
divContainerText.className ="infoDiv"
//creo la funcion que el caso que se encuentre vacio:
const llenaElCarro = ( contenido) =>{
    Swal.fire({
        title:  `El carro está vacío`,
        text: `${contenido}`,
        icon: 'error',
        padding : "1rem"
    })
}
// creo la funcion para ver en caso quu el usuario desee vaciar el carrito
const eventoClick = () =>{
    divContainerText.innerHTML != ""?divContainerText.innerHTML ="":llenaElCarro( "El carro ya está vacio, ¿para que lo quieres vaciar?")
}
//funcion para el evento click cerrar
const eventoClickCerrar = () =>{
    newDivCompras.outerHTML = ""
}
// creo 2 funciones , otra para mostrar la alerta de ese TOTAL y otra para hacer la validacion si el carrito esta lleno o no
const mostrarAlerta= () =>{
   const newForEach = arrayPusheado.map((pendiente)=>`${pendiente.nombre} con precio de ${pendiente.precio}`)
    console.log(newForEach)
    const total =  arrayPusheado.reduce((acumm,item)=>{
        return acumm + item.precio
    },0)  
    Swal.fire({
        title : "TOTAL De la Compra",
        text : `El total de la compra fue de un ${newForEach}`,
        icon : "info",
        padding: "1rem",
        showCancelButton: true,
         confirmButtonColor: 'green',
         cancelButtonColor: '#d33',
        cancelButtonText :"Cancelar",
        confirmButtonText: 'Aceptar'
         }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                'Gracias por Comprar en DevanCoin',
                `El total de su compra fue $US${total},vuelva pronto! `
                )
                }
            arrayPusheado.splice(0,arrayPusheado.length)
    })
}
const totalCompra =() =>{
    divContainerText.innerHTML?mostrarAlerta():llenaElCarro("No se puede calcular el total si el carrito está vacio ")
}
//empiezo conla estructura HTML
const botonUser = divContainerBottons.innerHTML =`
<button onclick="eventoClickCerrar()"class="bottonCerrar"><i class="fa-solid fa-xmark"></i></button>
<div class="buttonContainer">
<button id="vaciarCarrito" onclick ="eventoClick()">Vaciar Carrito</button>
<button class="comprar" onclick="mostrarAlerta()">Comprar</button>
</div>
`
//hago que si el boton es click pase esto
const dibujarCarro = () =>{
    botton.addEventListener("click" , () =>{
       arrayPusheado.forEach((pendiente) =>{
        if(filtrado){ // no  me muestra el indice que sea -1
            divContainerText.innerHTML+= `
            <p>Nombre ${pendiente.nombre} precio US$${pendiente.precio}<i class="fa-solid fa-xmark eliminarProducto"></p>
        `
        }
        })
        newDivCompras.appendChild(divContainerText);
        newDivCompras.appendChild(divContainerBottons)
        divComprasContainer.appendChild(newDivCompras)
    })
}
// extrago los botones para hacer eventso con ellos
