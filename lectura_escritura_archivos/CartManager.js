import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathCart = path.join(__dirname, 'cart.json');

const getCarts = async () => {
  try {
    const data = await fs.promises.readFile(pathCart, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
};

const saveCarts = async (carts) => {
  try {
    await fs.promises.writeFile(pathCart, JSON.stringify(carts, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const generateUniqueId = () => Math.random().toString(36).substring(2, 10);

export const createCart = async () => {
  const carts = await getCarts();
  const newCart = {
    id: generateUniqueId(),
    products: []
  };
  carts.push(newCart);
  await saveCarts(carts);
  return newCart;
};

export const getCartById = async (cid) => {
  const carts = await getCarts();
  return carts.find(c => c.id === cid) || null;
};

export const addProductToCart = async (cid, pid) => {
  const carts = await getCarts();
  const cart = carts.find(c => c.id === cid);
  if (!cart) return null;

  const existingProduct = cart.products.find(p => p.product === pid);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.products.push({ product: pid, quantity: 1 });
  }

  await saveCarts(carts);
  return cart;
};
