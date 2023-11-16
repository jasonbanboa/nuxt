const state = {
  count: 0,
};

// server takes 1500ms to respond
export default defineEventHandler(async () => {
  const count = await new Promise((res) => {
    setTimeout(() => {
      state.count++;
      res(state.count);
    }, 1500);
  });
  
  return {
    count,
  };

});