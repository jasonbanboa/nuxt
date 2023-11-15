// prefix get only allows get requests
export default defineEventHandler((event) => {
  return {
    api: 'works',
  }
});