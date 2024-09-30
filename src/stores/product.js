import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {id: 1, name: 'Liquidificador', price: 79.99, qty: 100},
    {id: 2, name: 'Batedeira', price: 79.99, qty: 100},
    {id: 3, name: 'Máquina de costura', price: 79.99, qty: 100},
    {id: 4, name: 'Panela', price: 79.99, qty: 100},
    {id: 5, name: 'Processador', price: 79.99, qty: 100}
  ]);

  function deleteProductById(id) {
    const pos = products.value.findIndex((product) => product.id == id)
    products.value.splice(pos, 1)
  }

  function getProductById(id) {
    for (let product of products.value) {
      if (product.id == id) {
        return product;
      }
    }
    return null;
  }

  return { products, getProductById, deleteProductById }
})
  