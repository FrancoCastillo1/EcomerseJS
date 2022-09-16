//extraigo a los documentos
const sectionNFT = document.querySelector(".sectionContainer")
const mainNFT = document.querySelector(".mainCompras")
// creo el array de objetos para el HTML
const productos =[
    {
        id :1,
        nombre :"NFT  Devan",
        imagen: "https://s2.coinmarketcap.com/static/img/coins/200x200/1.png",
        precio : 1000
    },
    {
        id :2,
        nombre : "Lemon",
        imagen :"https://cdn-images-1.medium.com/max/1200/1*5ts4IXY1bvm1Fd3YJgSePg.png",
        precio : 3785
    },
    {
        id :3,
        nombre : "Cardano",
        imagen :"https://cdn-images-1.medium.com/max/1200/1*5ts4IXY1bvm",
        precio : 84
    },
    {
        id :4,
        nombre : "Dogecoin",
        imagen :"https://cdn-images-1.medium.com/max/1200/1*5ts4IXY1bvm",
        precio : 5643
    },
    {
        id :5,
        nombre : "Etherium",
        imagen :"https://cdn-images-1.medium.com/max/1200/1*5ts4IXY1bvm",
        precio : 4243
    },
    {
        id :6,
        nombre : "Polkadot",
        imagen :"https://cdn-images-1.medium.com/max/1200/1*5ts4IXY1bvm",
        precio : 3453
    },
    {
        id :7,
        nombre : "USD COIN",
        imagen :"https://cdn-images-1.medium.com/max/1200/1*5ts4IXY1bvm",
        precio : 3424
    },
    {
        id :8,
        nombre : "Devan Coin",
        imagen :"https://cdn-images-1.medium.com/max/1200/1*5ts4IXY1bvm",
        precio : 334
    },
    {
        id :9,
        nombre : "DAI",
        imagen :"https://cdn-images-1.medium.com/max/1200/1*5ts4IXY1bvm",
        precio : 3424
    },
    {
        id :10,
        nombre : "Etherium",
        imagen :"https://cdn-images-1.medium.com/max/1200/1*5ts4IXY1bvm",
        precio : 3424
    },
    {
        id :11,
        nombre : "Tather",
        imagen :"https://cdn-images-1.medium.com/max/1200/1*5ts4IXY1bvm",
        precio : 800
    },
    {
        id :12,
        nombre : "ArgentinaCoin",
        imagen :"https://cdn-images-1.medium.com/max/1200/1*5ts4IXY1bvm",
        precio : 300
    },
]
//hago el forEach para dibujar
const newNFTCompra = document.createElement("div");
newNFTCompra.classList.add("contenidoNFT")
productos.forEach((producto) =>{
        newNFTCompra.innerHTML += `
        <img src "${producto.imagen}" alt "NFT , Hacerse millonario , Cripto">
        <h2> ${producto.nombre}</h2>
        <button class="comprarNFT">Comprar</button>
        `
  }) 
  sectionNFT.appendChild(newNFTCompra)
    // hago que el usuario confirme la compra
    const comprado = document.querySelector(".loComprado")
    const confirmar = document.querySelectorAll(".comprarNFT");
    for(let i =0;i<confirmar.length; i++){
    confirmar[i].addEventListener("click" , () =>{
       const acceder = confirm(`estas apuendo de comprar ${confirmar[i].previousElementSibling.textContent} pon acepatar en caso que lo quieras comprar`)
       if(acceder){
        comprado.innerHTML = `</h3>Has comprado ${confirmar[i].previousElementSibling.textContent}</h3>`
       }else{
        console.log("Volver a comprar")
       }
      })
      
    }   
    // Esto lo usare ahora
    const buscar = document.querySelector("#buscarCompras");
    const section = document.querySelector(".sectionContainer")
    const main = document.querySelector(".mainCompras");
    buscar.addEventListener("keyup" , () =>{
    productos.filter((producto) =>{
       if(buscar.value == producto.nombre){
        console.log("encontardo")
       }
    })
})