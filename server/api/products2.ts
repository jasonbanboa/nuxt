const data = [
  {idx: 0, name: 'product 0'},
  {idx: 1, name: 'product 1'},
  {idx: 2, name: 'product 2'},
  {idx: 3, name: 'product 3'},
  {idx: 4, name: 'product 4'},
  {idx: 5, name: 'product 5'},
  {idx: 6, name: 'product 6'},
  {idx: 7, name: 'product 7'},
];

export default defineEventHandler(() => {
  return new Promise((res) => {
    setTimeout(() => {
      res(data);
    }, 1500);
  });
});
