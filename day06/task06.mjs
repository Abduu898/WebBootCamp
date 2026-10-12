export function arrayFiltering(array, test) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (test(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

/*function test(value) {
  return value % 3 === 0;
}

const toFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const res = arrayFiltering(toFilter, test);
console.log(res);*/
