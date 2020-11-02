function* generator(i) {
  return Math.random();
}

const gen = generator(10);

console.log(gen())
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
