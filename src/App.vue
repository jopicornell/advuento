<template>
  <div class="w-full flex flex-col gap-5 justify-stretch p-5">
    <app-header @found-products='foundProducts'/>
    <product-list :products='products'></product-list>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import AppHeader from './components/AppHeader.vue'

export default {
  components: { ProductList, AppHeader },
  data() {
    return {
      products: []
    }

  },
  methods: {
    foundProducts(products) {
      this.products = products
    }
  },
}
</script>

<style></style>
