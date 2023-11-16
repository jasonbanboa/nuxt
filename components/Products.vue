<script setup>

const props = defineProps({
  products: Object,
});
console.log(props.products);
</script>

<template>
  <ul>
    <li v-for="(prodcut, index) in products" :key="index">
      {{ prodcut.name }}
    </li>
  </ul>
</template>