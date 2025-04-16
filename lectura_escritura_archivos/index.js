import {
    getProducts,
    getProductsById,
    addProduct,
    updateProduct,
    deleteProduct
  } from '../lectura_escritura_archivos/ProductManager.js';

import { createCart, getCartById, addProductToCart } from '../lectura_escritura_archivos/CartManager.js';

const productos = getProducts();
console.log(productos);



const main = async () => {
  const cart = await createCart();
  console.log('Nuevo carrito:', cart);

  await addProductToCart(cart.id, 'prod001');
  await addProductToCart(cart.id, 'prod001');
  await addProductToCart(cart.id, 'prod002');

  const carritoActualizado = await getCartById(cart.id);
  console.log('Carrito actualizado:', carritoActualizado);
};

main();

