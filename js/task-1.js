"use strict"


// function checkStorage(storage, item) {
//     const itemLower = item.toLowerCase();
//     for (let i = 0; i < storage.length; i++) {
//         if (storage.includes(itemLower)) {
//             return `${itemLower} is available to order!`;
//         }
//     }
//     return 'Sorry! We are out of stock!';
// }

function checkStorage(storage, item) {
    const itemLower = item.toLowerCase();
    for (let i = 0; i < storage.length; i++) {
        if (storage[i] === itemLower) {
            return `${itemLower} is available to order!`;
        }
    }
    return 'Sorry! We are out of stock!';
}


console.log(checkStorage(["apple", "plum", "pear"], "plum")) // "plum is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "pLuM")) // "plum is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "pear")) // "pear is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "pEAr")) // "pear is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "orange")) // "Sorry! We are out of stock!"
console.log(checkStorage(["apple", "plum", "pear"], "carrot")) // "Sorry! We are out of stock!"


// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].


