<script setup>
const route = useRoute();
console.dir(route);

const nuxt = useNuxtApp();
console.log(nuxt);

useHead({
  title: `${route.fullPath}`,
  meta: [
    { name: 'content', content: 'description'  }
  ]
});

</script>

<template>
  <div>
    event id: {{  $route.params.id }}
  </div>
</template>
