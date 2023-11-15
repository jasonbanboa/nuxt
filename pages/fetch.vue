<script setup>
const response1 = await $fetch('/api/hello');
const response2 = await $fetch('/hey');

</script>  
<template>
  <code>'/api/hello'</code>{{ response1 }} <br>
  <code>'/hello'</code>{{ response2 }}
</template>