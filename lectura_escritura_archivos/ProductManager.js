
import fs from 'fs'

import path from 'path';

import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathProductos = path.join(__dirname, 'productos.json'); 

function getProducts() {
    const productos = fs.readFileSync(pathProductos, 'utf-8'); 
    return JSON.parse(productos); 
}

function getProductsById(pid) {
    const productos = getProducts(); 
    return productos.find(producto =>  producto.id === pid) 
}

function addProduct(product) {
    const productos = getProducts();
    productos.push(product); 
    fs.writeFileSync(pathProductos, JSON.stringify(productos))  
}

function updateProduct(pid, updated) {
    const productos = getProducts();
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
