// Завдання 1.
// Рекурсивне зведення в ступінь
// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функціюpow (num, degree).

// let n = +prompt ('Please, add a number');
// let d = +prompt('Please add a degree'); 

// function pow(n, d) {
// return (d == 1) ? n : (n * pow(n, d-1));
// }

// console.log(`${n} ^ ${d} = ${pow(n,d)}`)

// Завдання 2. Реалізуйте функцію removeElement
// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

// let fruitCart = ['Apple', 'Kiwi', 'Banana', 'Melon', 'Potato', 'Grapes'];

// function removeElement(fruitCart,item) {
//     let index = fruitCart.indexOf(item);
//     if (index !== -1) {
//         fruitCart.splice(index, 1);
//         console.log("Item removed from them Fruit Cart");
//     } else {
//         console.log("Item is not in a Fruit Cart")
//     }
//     return fruitCart;
// }

// removeElement(fruitCart, 'Potato');
// removeElement(fruitCart, 'Tomato');

// console.log(fruitCart)

// Завдання 3. Реалізуйте функцію generateKey
// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

    let characters = '123456789abcdefghijklmnopqrstuvwxyz';
    let length = +prompt ("Add the Length")

    function generateKey (length, characters) {
        let stringToArray = characters.split("");
        let newStorageArray = [];
        for (let i = 0; i < length; i++) {
            let randomIndex = Math.round(Math.random() * stringToArray.length);
            newStorageArray.push(stringToArray[randomIndex]);
        }
        return newStorageArray.join("");
    }

    const key = generateKey(length, characters);
    console.log(characters);
    console.log(`${key}`);
