<script setup>
// useFetch has tons of optional options 

// awaits until resolved
const { data: products } = await useFetch('/api/products');
console.log(products);
console.log(toRaw(products.value));

// Loading component can now render is now available
const { data: products2, pending } = await useLazyFetch('/api/products2');
console.log(products2);

</script>

<template>
  
  <Loading v-if="pending" />
  <Products v-else :products="products2" />
  
</template>