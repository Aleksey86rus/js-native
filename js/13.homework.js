// Задачи по теме 13. Function types
// 1. Задача(FD & FE & AF)
// Написать функцию, на вход которой подаётся переменная, функция возвращает название типа данных.

// FD.
// function getDataType(params) {
//   return typeof params
// }
// console.log(getDataType('text'));
// console.log(getDataType(20));
// console.log(getDataType(true));
// console.log(getDataType({}));
// console.log(getDataType(undefined));
// console.log(getDataType(Symbol));
// console.log(getDataType(BigInt));
// console.log(getDataType(null));


// FE.
// const getDataType = function (params) {
//   return typeof params
// }
// console.log(getDataType('text'));
// console.log(getDataType(20));
// console.log(getDataType(true));
// console.log(getDataType({}));
// console.log(getDataType(undefined));
// console.log(getDataType(Symbol));
// console.log(getDataType(BigInt));
// console.log(getDataType(null));

//Af.
// const getDataType = (params) => typeof params

// console.log(getDataType('text'));
// console.log(getDataType(20));
// console.log(getDataType(true));
// console.log(getDataType({}));
// console.log(getDataType(undefined));
// console.log(getDataType(Symbol));
// console.log(getDataType(BigInt));
// console.log(getDataType(null));



// more varint
// const arrayTypes = ['text', 20, true, {}, undefined, Symbol, BigInt, null];
// let newArray = [];

// function getDataType(params) {
//   for (const el of params) {
//     console.log(typeof el);
//   }
// }
// getDataType(arrayTypes);

// ================================================================================================ //

// 2. Задача(AF)
// Написать функцию, которая проверяет, является ли переменная типом null.

// const checkIsNull = params => params === null

// console.log(checkIsNull(null));

// ================================================================================================ //

// 3. Задача(AF)
// Написать функцию, которая проверяет переданное число на чётность.

// const checkNumberIsEven = params => params % 2 === 0

// console.log(checkNumberIsEven(10));
// console.log(checkNumberIsEven(11));
// ================================================================================================ //

// 4. Задача(FE)
// Написать функцию, которая склеивает переданные строки через пробел. Функция работает, как с двумя, так и со многими переданными переменными.

// const concatString = function (...params) {
//   let newString = ' ';
//   for (const el of params) {
//     newString += el + ' '
//   }
//   console.log(newString);
// }

// concatString('HTML', 'CSS', 'JS');
// concatString('HTML', 'CSS', 'JS', 'PHP', 'Pyton');

// ================================================================================================ //

// 5. Задача(FE)
// Написать функцию, на вход которой подаётся массив строк, функция возвращает одну строку(склеенную из всех в массиве).

// const arrayStr = ['Moscow', 'Washington', 'London', 'Paris'];

// const cityArray = function (strings) {
//   return strings.join('')
// }
// console.log(cityArray(arrayStr));

// ================================================================================================ //

// 6. Задача(FD)
// Написать функцию, на вход которой подаётся массив из чисел, функция возвращает новый массив из чисел, которые делятся на 4.

// const arrayNumbers = [2, 40, 88, 128, 75, 63, 90, 140];
// const userArrayNumbers = [];

// function getNewArrayNumbers(numbers) {
//   for (const el of numbers) {
//     if (el % 4 === 0) {
//       userArrayNumbers.push(el)
//     }
//   }
//   return userArrayNumbers
// }

// console.log(getNewArrayNumbers(arrayNumbers));

// ================================================================================================ //

// 7. Задача(FD)
// Написать функцию, на вход которой подаётся любое количество чисел, функция возвращает массив из чисел, которые делятся на 3.

// function getArrayNumbersShareByThree(...params) {
//   const userArray = [];
//   for (const el of params) {
//     if (el % 3 === 0) {
//       userArray.push(el)
//     }
//   }
//   return userArray
// }

// console.log(getArrayNumbersShareByThree(10, 20, 30, 40, 50, 60, 70, 80, 90));

// ================================================================================================ //

// 8. Задача(FD)
// Дана функция, привести её к виду Function Decalration.
// const checkMoreTen = num => num > 10;

// function checkMoretEN(num) {
//   return num > 10;
// }
// console.log(checkMoretEN(5));
// console.log(checkMoretEN(20));

// ================================================================================================ //

// 9. Задача(FE)
// Дана функция, привести функцию к виду Function Expression.
// const getGender = text => text === 'm' ? 'male' : 'female';


// const getGender = function (text) {
//   return text === 'm' ? 'male' : 'female'
// }

// console.log(getGender('m'));
// ================================================================================================ //

// 10. Задача(AF)
// Дана функция, привести функцию к виду Arrow Function.

// function test(x, y, z = 1) {
//   return x * y * z;
// }


const text = (x, y, z = 1) => x * y * z;
console.log(text(10, 10, 10));

// ================================================================================================ //

// 11. Задача(AF)
// Дана функция, привести функцию к виду Arrow Function.

// function test(x, y, z = 0) {
//   console.log(x + y + z);
// }
// ================================================================================================ //

// 12. Задача(AF || FE || FD)
// Написать функцию, на вход которой подаёт неизвестное количество строк.Функция вовзаращает число - количество всех символов из всех переданных строк.
// ================================================================================================ //

// 13. Задача(AF || FE || FD)
// Написать функцию, на вход которой подаёт любое количество чисел.Функция возвращает сумму всех чисел.
// ================================================================================================ //

// 14. Задача(AF || FE || FD)
// Написать функцию, на вход которой подаётся массив чисел.Функция возвращает одно число - наименьшее из них.
// ================================================================================================ //

// 15. Задача
// Что вернёт фунция tester ?

// const tester = (...numbers) => typeof numbers;
// let result = tester(3, 7, 4, 1); // ?
// ================================================================================================ //

// 16. Задача
// Что вернёт фунция tester ?

// const tester = numbers => typeof numbers;
// let result = tester([3, 7, 4, 1]); // ?
// ================================================================================================ //

// 17. Задача
// Что вернёт фунция tester ?

// const tester = numbers => Array.isArray(numbers);
// let result = tester([3, 7, 4, 1]); // ?
// ================================================================================================ //

// 18. Задача(FD)
// Перепишите Arrow Function в Function Declaration.

// const tester = numbers => Array.isArray(numbers);
// let result = tester([3, 7, 4, 1]);
// ================================================================================================ //

// 19. Задача(AF)
// Сделать рефакторинг функции isLongString.

// const isLongString = (string) => {
//   if (string.length > 10) {
//     return true;
//   } else {
//     return false;
//   }
// }
// ================================================================================================ //

// 20. Задача(AF)
// Написать функцию, на вход которой подаётся 2 параметра.Функция вычисляет произведение двух чисел.Функция возвращает объект, в котором хранится 2 параметра и результат умножения.
// ================================================================================================ //

// ★ Задачи повышенной сложности ★
// ★ 21. Задача ★
// Что выведется в консоль ?

// const tester = numbers => Array.isArray(numbers);

// const res = changeBoolToString(tester([3, 7, 4, 1]));

// function changeBoolToString(a) {
//   return a ? "array" : "Not an Array";
// }

// console.log(res);
// ================================================================================================ //

// ★ 22. Задача ★
// Что выведется в консоль ?

// const arr = [3, 7, 4, 1];
// const tester = numbers => Array.isArray(numbers);

// const res = changeBoolToString(tester);

// function changeBoolToString(a) {
//   return a(arr) ? "array" : "Not an Array";
// }

// console.log(res);
