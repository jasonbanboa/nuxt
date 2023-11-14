<script setup>
const counter = useCounter();

</script>


<template>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
    <button @click="counter--">
      -
    </button>
  </div>
  <GlobalCounter />  <!-- shares the same state -->
</template>