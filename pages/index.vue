<script setup>
const { composableEx } = useUtils();
const { $sayHello } = useNuxtApp();
$sayHello('J');
composableEx();
</script>

<template>
  <div>
    <Alert />
  </div>
  <Profile />
  <SuperUnnecessarilyNestedComponentThatWorks />
  <img class="h-12 w-32" src="~/assets/nuxt.png" alt="">
  <img class="h-12 w-32" src="/public.jpg" alt="">
  <IconsBell />
</template>
