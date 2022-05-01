// * ===== Output | input ===== * //

// * == Output (Вывод в консоль) == * //

let userMoney = 19700;
let userName = "Maks";
let nullVar = null;


console.log(523);
console.log("523");
console.log("null");
console.log(null);
console.log(true);
console.log(undefined);


console.log(userMoney);
console.log("userName");
console.log(userName);
console.log(nullVar);

// * Склеивание (конкатенация)
// 1. Вывести в консоль сколько у пользователя денег
// У <имя> есть <деньги> евро!

// ? 1 способ
console.log("У " + userName + " есть " + userMoney + " евро!");

// ? 2 способ (Если в будущем будет доклеивание или использование)
// ! Если результат будет использоваться
let resultTask = "У " + userName + " есть " + userMoney + " евро!";
console.log(resultTask);

resultTask = resultTask + "?!"; // Доклеить
console.log(resultTask);


// ? Как вывести тип переменной в консоль?

let testVariable;

console.log(typeof resultTask); // "string"
console.log(typeof nullVar); // "object" - известная JS ошибка
console.log(typeof userMoney); // number
console.log(typeof "108"); // string
console.log(typeof 108); // number
console.log(typeof '108'); // string
console.log(typeof false); // boolean
console.log(testVariable); // undefined
console.log(typeof testVariable); // undefined
console.log(typeof NaN); // number
console.log(typeof Infinity); // number
console.log(typeof -104.657465); // number


// Всплывающее окно с сообщением
// alert('msg')

// * == Input (ввод с клавиатуры) == * //

// Запросить у пользователя текст, символ:

// let nameUser = prompt('Введите имя'); // let nameUser = "<имя>"
// console.log("Я " + nameUser + "!");

