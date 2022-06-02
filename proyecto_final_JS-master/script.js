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
let carrito = []

productos.forEach(productosEnArray => {
    divProductos.innerHTML += `
    <div class="card productosSoplo" id="producto${productosEnArray.id}" style="width: 18rem; padding:7px; grid:row"">
    <div class="card-body">
      <h5 class="card-title">Nombre: ${productosEnArray.nombre}</h5>
        <p> Marca: ${productosEnArray.marca}</p>
        <p> Precio: ${productosEnArray.precio}</p>
        <p> Stock: ${productosEnArray.stock}</p>
      <a href="#" id="boton${productosEnArray.id}" class="btn btn-primary">Agregar al carrito</a>
    </div>
  </div>
     `
})

productos.forEach(productos=> {
   document.getElementById(`boton${productos.id}`).addEventListener('click', () =>{
    carrito.push(productos)
    localStorage.setItem("productosCarrito", JSON.stringify(carrito))
   })
})

document.getElementById("mostrarBoton").addEventListener('click', ()=> {
    let arrayParseado = JSON.parse(localStorage.getItem('productosCarrito'))
    console.log(arrayParseado)
})

/*desafio clase 11 - Storage-JSON -*/
   
class buscador {
    constructor(modelo,material,precio, stock) {
        this.modelo = modelo;
        this.material = material;
        this.precio = precio;
        this.stock = stock;
    }
}

const buscador1 = new buscador("maceta", "cemento", 2000, "si")
const buscador2 = new buscador("estructura", "hierro", 1000, "no")
const buscador3 = new buscador("pie", "hierro", 500, "si")
const buscador4 = new buscador("pie", "madera", 200, "no")

let buscadores = [buscador1, buscador2, buscador3, buscador4]

let inputColor = document.getElementById("inputColor")
let inputTexto = document.getElementById("inputTexto")
let divBuscador = document.getElementById("divBuscador")



inputColor.addEventListener('input', () => {
    document.body.style.backgroundColor = inputColor.value
})

inputTexto.addEventListener('change', () => {
    let search = inputTexto.value
    console.log(search.toLowerCase())
    let productosEncontrados = buscadores.filter(buscador => buscador.modelo.includes(search.toLowerCase()))

    productosEncontrados.forEach(buscador => {
        divBuscador.innerHTML += `
        <div class="card" id="divProductos${divProductos.id}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Modelo: ${buscador.modelo}</h5>
                <p>Material: ${buscador.material} </p>
                <p>Precio: $${buscador.precio} </p>
                <p>Stock: ${buscador.stock} </p>
                <button id="boton${divProductos.id}" class="btn btn-dark">Agregar al Carrito</button>
                
            </div>
        </div>
        `
    })
})


/*let botonundefined =document.getElementById ("botonundefined")

botonundefined.addEventListener("click" , () =>
Toastify({
    text: "Producto agregado al carrito",
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
  )*/
