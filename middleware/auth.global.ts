export default defineNuxtRouteMiddleware((to, from) => {
  console.log('global middleware');
  // const isLoggedIn = false;
  // if (isLoggedIn) {
  //   return navigateTo(to.fullPath);
  // }
});