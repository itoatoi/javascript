console.log(Math.max(1)); //1
console.log(Math.max(1, 2)); //2
console.log(Math.max(1, 2, 3)); //3
console.log(Math.max()); // -Infinity

console.log(Math.max.apply(null, [1, 2, 3])); // 3
console.log(Math.max(...[1, 2, 3])); // 3
