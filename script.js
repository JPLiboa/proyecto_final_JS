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





/*desafio clase 9 - eventos -*/
   
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
            </div>
        </div>
        `
    })
})

