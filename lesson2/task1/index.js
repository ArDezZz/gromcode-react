function sum(a, b) {
  return a + b;
}

const bindedSum = sum.bind(obj, 10, 20, 30);
console.log(bindedSum());
