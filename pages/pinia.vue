<script setup>
const store = useCounterStore();

setTimeout(() => {
  store.name = 'wow';
}, 1500);

</script>

<template>
  <button @click="store.increment">
    click me!
  </button>
  {{ store.count }}
  {{ store.name }}
</template>