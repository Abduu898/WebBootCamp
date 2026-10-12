export function fizzBuzz(num) {
  const results = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push("FizzBuzz"); /* push pour ajouter un element a la fin du tableau */
    } else if (i % 3 === 0) {
      results.push("Fizz");
    } else if (i % 5 === 0) {
      results.push("Buzz");
    } else {
      results.push(i);
    }
  }
  console.log(results.join(", "));
}
