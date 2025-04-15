import {
    getProducts,
    getProductsById,
    addProduct,
    updateProduct,
    deleteProduct
  } from '../lectura_escritura_archivos/ProductManager.js';


const productos = getProducts();
console.log(productos);
