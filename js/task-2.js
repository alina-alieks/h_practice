"use strict"

// Функція getProductPrice(productName) приймає 
// один параметр productName - назва продукту.
// Функція містить масив об'єктів products з такими властивостями, 
// як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона шукала об'єкт продукту 
// з певним ім'ям (властивість name) в масиві products 
// і повертала його ціну(властивість price).Якщо продукт з такою назвою не знайдений,
// функція повинна повертати null.

function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
// first way
  for (let product of products) {
    if (product.name === productName) {
    return product.price
    }
  }
    return null
    // Second way
//     for (let product of products) {
//     if (Object.values(product).includes(productName)) {
//     return product.price
//     }
//   }
//    return null
}
console.log(getProductPrice("Radar")); //1300
console.log(getProductPrice("Grip")); //1200
console.log(getProductPrice("Scanner")); //2700
console.log(getProductPrice("Droid")); //400
console.log(getProductPrice("Engine")); //null