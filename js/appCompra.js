/* import Swal from 'sweetalert2/dist/sweetalert2.js' */
//extraigo a los documentos
const sectionNFT = document.querySelector(".sectionContainer")
const mainNFT = document.querySelector(".mainCompras")
// creo el array de objetos para el HTML
const productos =[
    {
        id :1,
        nombre :"NFT Devan",
        imagen: "../img/img1.jpg",
        precio : 1000,
    },
    {
        id :2,
        nombre : "NFT GOOMBA",
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
        nombre : "NFT LeBron James",
        imagen :"../img/IMG6.jfif",
        precio : 3453,
    },
    {
        id :7,
        nombre : "NFT ROCKY",
        imagen :"../img/img7.jpg",
        precio: 364,
    },
    {
        id :8,
        nombre : "NFT CHUCK NORRIS",
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
        nombre : "NFT FERNAN",
        imagen :"../img/img10.webp",
        precio : 3424,
    },
    {
        id :11,
        nombre : "NFT MESSI",
        imagen :"../img/img11jpg.jpg",
        precio : 800,
    },
    {
        id :12,
        nombre : "NFT ROBOT RARO",
        imagen :"../img/img12.webp",
        precio : 300,
    },
]
//hago el forEach para dibujar
let dibujar;
const buscar = document.querySelector("#buscarCompras");
const arrayForEach =() =>{
    productos.forEach((producto) =>{
    dibujar = sectionNFT.innerHTML += `
       <div class ="contenidoNFT">
       <img src="${producto.imagen}" alt="NFT , Hacerse millonario , Cripto">
       <h2> ${producto.nombre}</h2>
       <button class="comprarNFT" value ="${producto.precio}">Comprar</button>
       </div>
       `

   }) 
}
let filter;
arrayForEach()    
buscar.addEventListener("keyup" , () =>{
    productos.filter((producto)=>{
        if(buscar.value == producto.nombre){
             const filtradoArray = {
                id:"filtrado",
                nombre:producto.nombre,
                imagen: producto.imagen,
                precio:producto.precio
            }
            productos.push(filtradoArray);  
            sectionNFT.innerHTML = `
            <div class ="contenidoNFT">
            <img src="${filtradoArray.imagen}" alt="NFT , Hacerse millonario , Cripto">
            <h2> ${filtradoArray.nombre}</h2>
            <button class="for for" value ="${filtradoArray.precio}">Comprar</button>
            </div>
            `
            const newArrayIterable  = document.querySelectorAll(".for") // ¿por que pongo 2 clases,  bueno , porque el swwtAlert estaba con un forEach , de array y para que me lo reconozca , puse 2)
            arrayModicar(newArrayIterable)
        }
      }) 
    
})
mainNFT.appendChild(sectionNFT)
// hago que el usuario confirme la compra y creo un array para pushear los totales
let arrayPusheado = []
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
const arrayModicar =  (recorrido) =>{
    recorrido.forEach((pendiente) =>{
        pendiente.addEventListener("click" , () =>{
            Swal.fire({
                title:  `Compra del ${pendiente.previousElementSibling.textContent}`,
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
arrayModicar(confirmar)
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
const vaciarCarroDefinitivo = () =>{
    divContainerText.innerHTML = ""
    arrayPusheado.splice(0,arrayPusheado.length)
}
const eventoClick = () =>{
    divContainerText.innerHTML != ""?vaciarCarroDefinitivo() ="":llenaElCarro( "El carro ya está vacio, ¿para que lo quieres vaciar?")
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
                Swal.fire({
                icon : "success",
                  padding : "1rem",
                  title : 'Gracias por Comprar en DevanCoin',
                   text:  `El total de su compra fue $US${total},vuelva pronto! `
                }
                )
                }
            arrayPusheado.splice(0,arrayPusheado.length)
            divContainerText.innerHTML = ""
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
<button class="comprar" onclick="totalCompra()">Comprar</button>
</div>
`
//hago que si el boton es click pase esto
const dibujarCarro = () =>{
    botton.addEventListener("click" , () =>{
        let ultimo = arrayPusheado[arrayPusheado.length -1]
        if(ultimo){
            divContainerText.innerHTML+= `
            <p>Nombre ${ultimo.nombre} precio US$${ultimo.precio}<i class="fa-solid fa-xmark eliminarProducto"></p>
            `
        }
        newDivCompras.appendChild(divContainerText);
        newDivCompras.appendChild(divContainerBottons)
        divComprasContainer.appendChild(newDivCompras)
    })
}
dibujarCarro()
