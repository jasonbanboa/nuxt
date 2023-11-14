export default defineNuxtPlugin(() => {
  return {
    provide: {
      sayHello(name: string) {
        console.log(`Hello, ${name}`);
      }
    }
  }
});