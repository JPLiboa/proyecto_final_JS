
class Producto {
    constructor(id,nombre, marca, precio, stock) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }    
}

const producto1 = new Producto(1,"Maceta Cemento", 2000, 2000)
const producto2 = new Producto(2,"Estructura Hierro", 1000, 1000)
const producto3 = new Producto(3,"Pie Hierro", 500, 500)
const producto4 = new Producto(4,"Pie Madera", 250, 250)
const producto5 = new Producto(5,"Maceta Madera", 350, 350)
const producto6 = new Producto(6,"Combo Hierro+Madera", 1250, 1250)





let productos = [producto1, producto2, producto3, producto4, producto5, producto6]
let divProductos = document.getElementById("divProductos")
let carrito = []

productos.forEach(productosEnArray => {
    divProductos.innerHTML += `
    <div class="card productosSoplo" id="producto${productosEnArray.id}" style="width: 18rem; padding:7px; grid:row"">
    <img  class="card-img-top" src ="" alt="MacetaCemento">
    <div class="card-body">
      <h5 class="card-title">${productosEnArray.nombre}</h5>
        <p> Precio: $${productosEnArray.precio}</p>
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

/*- Storage-JSON -*/  
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


let bgColors = [
    "linear-gradient(to right, #00b09b, #96c93d)",
    "linear-gradient(to right, #ff5f6d, #ffc371)",
  ],
  i = 0;


// Displaying toast on manual action `Try`
document.getElementsByClassName("btn-primary");addEventListener("click", function() {
  Toastify({
    text: "Agregado a Carrito",
    duration: 2000,
    close: i % 3 ? true : false,
    style: {
      background: bgColors[i % 2],
    }
  }).showToast();
  i++;
});

/*fetch api hora*/
fetch("http://api.timezonedb.com/v2.1/get-time-zone")
.then(response => response.json())
.then(data =>console.log(data))
