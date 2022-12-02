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
      searchTerm: '',
      products: [],
      selectedProduct: null,
      loading: false,
    }
  },
  methods: {
    async findProducts(searchTerm) {
      this.loading = true
      if (!searchTerm) {
        this.loading = false
        this.products = []
        return
      }
      const productsResponse = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
      const { products } = await productsResponse.json()
      this.products = products
      this.loading = false
    },
  },
}
</script>

<style></style>
