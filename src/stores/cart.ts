import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({ cartList: [] }),
  actions: {
    addProduct(product) {
      const existingProduct = this.cartList.find((item) => item.id === product.id)
      if (existingProduct) {
        existingProduct.quantity++
      } else {
        // Añadimos quantity para que sea reactivo, ya que el producto no tiene esa propiedad
        this.cartList.push({ ...product, quantity: 1 })
      }
    },
  },
})