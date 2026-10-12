import { arraysAreEqual } from "./task02.mjs";

console.log(arraysAreEqual([1, 2], [1, 2])); // true
console.log(arraysAreEqual([1, 2], [1, 4])); // false
console.log(arraysAreEqual([1, 2], [1, 2, 3])); // false
console.log(arraysAreEqual([], [])); // true
