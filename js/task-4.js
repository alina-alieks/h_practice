"use strict"

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

let totalPrice = 0;
  for (let product of products) {
    if (product.name === productName){
      totalPrice = product.price * product.quantity;
      return totalPrice;
    }
    
  }
return `Product ${productName} not found!`;
  
}

console.log(calculateTotalPrice("Blaster")); // "Product Blaster not found!"
console.log(calculateTotalPrice("Radar")); // 5200
console.log(calculateTotalPrice("Droid")); // 2800
console.log(calculateTotalPrice("Grip")); // 10800
console.log(calculateTotalPrice("Scanner")); // 8100

// Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!" , де <productName> — це ім'я товару.