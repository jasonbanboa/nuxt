<script setup>

const route = useRoute();
console.dir(route);

const nuxt = useNuxtApp();
console.log(nuxt);

</script>

<template>
  <div>
    event id: {{  $route.params.id }}
  </div>
</template>
