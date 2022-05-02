/*Arrays de producto + link con HTML + comienzo e-commerce*/
class Producto {
    constructor(nombre, marca, precio, stock) {
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock

    }
    
}

const producto1 = new Producto("Maceta Cemento", "Soplo", 2000, 20)
const producto2 = new Producto("Estructura Hierro", "Soplo", 1000, 40)
const producto3 = new Producto("Pie Hierro", "Soplo", 500, 15)
const producto4 = new Producto("Pie Madera", "Soplo", 250, 25)

let productos = [producto1, producto2, producto3, producto4]

let divProductos = document.getElementById("divProductos")

productos.forEach(productosEnArray => {
    divProductos.innerHTML += `
    <div class="card productosSoplo" id="style=producto${productosEnArray}" style="width: 18rem; padding:7px; grid:row"">
    
    <div class="card-body">
      <h5 class="card-title">Nombre: ${productosEnArray.nombre}</h5>
        <p> Marca: ${productosEnArray.marca}</p>
        <p> Precio: ${productosEnArray.precio}</p>
        <p> Stock: ${productosEnArray.stock}</p>
      <a href="#" class="btn btn-primary">Agregar al carrito</a>
    </div>
  </div>
     `
})


/*Prompt de GiftCard del Shop*/

let giftCardTotal= 10000
let giftCard= parseInt( prompt ("Ingrese el monto de la SoploCard"))

while (isNaN(giftCard)){
    giftCard = parseInt(prompt('Monto no válido, ingreselo nuevamente'));
}
let PieHierro= 2000
let MacetaCemento= 5000
let MacetaPlastico= 500



let suma= 1;


for (let i = 0; i < suma; i++) {
    let giftCardTipo=  prompt ("Ingrese el tipo de SoploCard: Estructura Hierro - Maceta Cemento - Pie Madera")
    if (giftCardTipo == "Estructura Hierro"){
    prompt("Ingrese el e-mail del beneficiado")
    alert("¡¡Muchas gracias por regalar vida!!")
    suma= suma - 1 ;
}else if (giftCardTipo == "Maceta Cemento"){
    prompt("Ingrese el e-mail del beneficiado")
    alert("¡¡Muchas gracias por regalar vida!!")
    suma= suma - 1 ;
}else if (giftCardTipo == "Pie Madera"){
    prompt("Ingrese el e-mail del beneficiado")
    alert("¡¡Muchas gracias por regalar vida!!")
    suma= suma - 1 ;
}else{
    alert ("opcion no valida");   
    suma= suma + 1 ;
}

}


   

