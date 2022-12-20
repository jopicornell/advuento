<template>
  <div class="flex flex-1 justify-stretch gap-2 w-full">
    <search-products @found-products="$emit('found-products', $event)"></search-products>
    <button @click="openCart" type="button" class="w-14 inline-flex relative items-center justify-center p-3 text-sm font-medium text-center text-blue-800 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:text-blue-200 dark:focus:ring-blue-800">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
      <span class="sr-only">Notifications</span>
      <div v-if="cartStore.cartList.length" class="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">{{ cartStore.cartList.length}}</div>
    </button>
    <shopping-cart :ref='(cart) => { shoppingCart = cart }' />
  </div>
</template>

<script setup>
import SearchProducts from './SearchProducts.vue'
import ShoppingCart from './ShoppingCart.vue'
import { useCartStore } from '@/stores/cart'
import { ref } from 'vue'


const cartStore = useCartStore()
const shoppingCart = ref(null)

const openCart = () => {
  shoppingCart.value.open()
}

</script>

<style scoped>

</style>