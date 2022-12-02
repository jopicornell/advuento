<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <product-card></product-card>
    <product-card></product-card>
    <product-card></product-card>
    <product-card></product-card>
    <product-card></product-card>
    <product-card></product-card>
    <product-card></product-card>
    <product-card></product-card>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  components: { ProductCard },
}
</script>
