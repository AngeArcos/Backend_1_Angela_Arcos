//file sistem, existen dos formas de trabajar con file sistem, a través de callback y a través de promesas. 
//operaciones de file sistem que se usan para un CRUD( create read, ipate, delete) writeFile (create - update) readFile (read) unlink(delete)
//primero leo el archivo conr eadFile, luego parseo o convierto el archivo js a un objeto json (serializar), con el objeto serializado lo sobre escribo (update)
//para escribir writeFileSync
//para leer readFileSync
//para appendFileSync
// unlinkSync
// existsSync

//primero importo
import fs from 'fs'
//const fs = require('fs');
import path from 'path';
//const path = require('path');
import { fileURLToPath } from 'url';

// Esto reemplaza __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathProductos = path.join(__dirname, 'productos.json'); //aqui hay que pasar la direccion donde se encuentra el archivo, la dirección 

function getProducts() {
    const productos = fs.readFileSync(pathProductos, 'utf-8'); //leo objeto con readFuleSync, devuelve objeto raro 
    return JSON.parse(productos); 
}

function getProductsById(pid) {
    const productos = getProducts(); //primero obtengo los productos (todos), con esta funcion
    return productos.find(producto =>  producto.id === pid) //luego lo retorno con su id
}

function addProduct(product) {
    const productos = getProducts();
    productos.push(product); //aqui agrego el producto que me envian por parámetro a los productos
    fs.writeFileSync(pathProductos, JSON.stringify(productos))  //aqui lo leo, lo hagocpon json porque es un archivo json.
}

function updateProduct(pid, updated) {
    const productos = getProducts();
    //const productoUpdater =getProductsById(pid); //primero encuentra el producto
    productos [pid - 1] = updated;
    fs.writeFileSync(pathProductos, JSON.stringify(productos)) 
}

function deleteProduct(pid) {
    let productos = getProducts();
    productos = productos.filter(product =>  product.id !== pid);
    fs.writeFileSync(pathProductos, JSON.stringify(productos)) 
}

deleteProduct(6)

/*
const productoAgregar = {
    id: 6,
    name: "Teclado Mecánico RGB",
    description: "Teclado mecánico con retroiluminación RGB personalizable y switches azules.",
    price: 129.99,
    category: "Periféricos",
    stock: 60,
    image: "https://example.com/images/teclado-mecanico-rgb.jpg"
}
addProduct(productoAgregar)

updateProduct(1, {
    id:1,
    name:"Laptop Pro 15",
    description:"Laptop de alto rendimiento con pantalla Retina de 15 pulgadas, 8 nucleos.",
    price: 500.000,
    category:"Electrónica",
    stock: 50,
    image:"https://example.com/images/laptop-pro-15.jpg"
})
*/


//const productos = getProducts();
// console.log(productos)
// console.log('producto is 3', getProductsById(3));
export {
    getProducts,
    getProductsById,
    addProduct,
    updateProduct,
    deleteProduct
  };
