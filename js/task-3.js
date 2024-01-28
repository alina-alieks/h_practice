"use strict"

function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

    
let allValues = [];
    for (let product of products) {
    if (Object.keys(product).includes(propName)) {
        allValues.push(product[propName]);
    }
  }
return allValues

//  let result = [];
//   for (let i = 0; i < products.length; i++) {
//     if (propName in products[i]) {
//       result.push(products[i][propName]);
//     }
//   }
//   return result;

  
}

console.log(getAllPropValues("quantity")) // [4, 3, 7, 9]
console.log(getAllPropValues("price")) // [1300, 2700, 400, 1200]
console.log(getAllPropValues("category")) // []


// Напиши функцію getAllPropValues(propName), яка приймає один параметр 
// propName - ім'я (ключ) властивості. Функція повинна повернути масив усіх значень 
// властивості з таким ім'ям з кожного об'єкта в масиві products.
// Якщо в об'єктах відсутні властивості з таким ім'ям,
// функція повинна повернути порожній масив.