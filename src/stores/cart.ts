import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({ cartList: [] }),
  actions: {
    addProduct(product) {
      // add product to cart
    },
  },
})