<template>
  <div class="w-full flex flex-col gap-5 justify-center p-5">
    <search-products></search-products>
    <product-list></product-list>
  </div>
</template>

<script>
import SearchProducts from './components/SearchProducts.vue'
import ProductList from './components/ProductList.vue'

export default {
  components: { SearchProducts, ProductList },
  data() {
    return {
    }
  },
}
</script>

<style></style>
