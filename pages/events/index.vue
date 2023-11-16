<script setup>
useHead({
  title: 'events page',
  meta: [
    { name: 'content', content: 'description'  }
  ]
});
definePageMeta({
  middleware: 'auth'  // should match file name under middleware folder 
})
</script>

<template>
  <div>
    index events
  </div>
</template>