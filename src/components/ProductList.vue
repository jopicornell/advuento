<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <product-card v-for='product in products' :key='product.id' :product='product'></product-card>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  components: { ProductCard },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
}
</script>
