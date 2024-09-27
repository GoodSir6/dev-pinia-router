import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {id: 1, name: 'Liquidificador', price: 79.99, qty: 100},
    {id: 2, name: 'Batedeira', price: 79.99, qty: 100},
    {id: 3, name: 'Vibrador', price: 79.99, qty: 100},
    {id: 4, name: 'Panela', price: 79.99, qty: 100},
    {id: 5, name: 'Processador', price: 79.99, qty: 100}
  ])

  return { products }
})
  