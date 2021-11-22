"use strict";

function logger() {
  console.log("My name is Marius");
}
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
fruitProcessor(3, 4);

console.log(fruitProcessor(4, 3));
