<script setup>

const { data: count, pending, refresh } = await useLazyAsyncData('count', () => $fetch('/api/count'));

</script>

<template>
  <Loading v-if="pending" />
  <div v-else>{{ count }}</div>

  <button @click="refresh" class="outline-1 outline outline-slate-950 p-2 text-slate-900">Refresh</button>
</template>