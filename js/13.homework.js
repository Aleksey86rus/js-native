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

// const test = (x, y, z = 1) => x * y * z;
// console.log(test(10, 10));
// console.log(test(10, 10, 10));

// ================================================================================================ //

// 11. Задача(AF)
// Дана функция, привести функцию к виду Arrow Function.

// function test(x, y, z = 0) {
//   console.log(x + y + z);
// }

// const test = (x, y, z = 0) => x + y + z;
// console.log(test(20, 20));
// console.log(test(20, 20, 20));

// ================================================================================================ //

// 12. Задача(AF || FE || FD)
// Написать функцию, на вход которой подаёт неизвестное количество строк. Функция вовзаращает число - количество всех символов из всех переданных строк.


// 1. AF
// let countSymbols = 0;
// const countAllSymbolsInStr = (...params) => countSymbols = params.join('').length

// console.log(countAllSymbolsInStr('abc'));
// console.log(countAllSymbolsInStr('abc', 'abc'));
// console.log(countAllSymbolsInStr('abc', 'abc', 'abc'));
// console.log(countAllSymbolsInStr('abc', 'abc', 'abc', 'abc'));


// 2. FE
// let countSymbols = 0;
// const countAllSymbolsInStr = function (...params) {
//   return countSymbols = params.join('').length
// }

// console.log(countAllSymbolsInStr('abc'));
// console.log(countAllSymbolsInStr(' abc '));
// console.log(countAllSymbolsInStr('abc', 'abc'));
// console.log(countAllSymbolsInStr('abc', 'abc', 'abc'));
// console.log(countAllSymbolsInStr('abc', 'abc', 'abc', 'abc'));


// 3. FD
// let countSymbols = 0;
// function countAllSymbolsInStr(...params) {
//   return countSymbols = params.join().length
// }

// console.log(countAllSymbolsInStr('abc'));
// console.log(countAllSymbolsInStr(' abc '));
// console.log(countAllSymbolsInStr('abc', 'abc'));
// console.log(countAllSymbolsInStr('abc', 'abc', 'abc'));
// console.log(countAllSymbolsInStr('abc', 'abc', 'abc', 'abc'));

// ================================================================================================ //

// 13. Задача(AF || FE || FD)
// Написать функцию, на вход которой подаёт любое количество чисел.Функция возвращает сумму всех чисел.

// AF
// let sumNumbers = 0;
// const manyDifferentNumbers = (...params) => {
//   for (const el of params) {
//     sumNumbers += el
//   }
//   return sumNumbers
// }

// console.log(manyDifferentNumbers(2, 6, 8, 9, 4, 12, 55, 47, 10));

// FE
// let sumNumbers = 0;
// const manyDifferentNumbers = function (...params) {
//   for (const el of params) {
//     sumNumbers += el
//   }
//   return sumNumbers
// }

// console.log(manyDifferentNumbers(2, 6, 8, 9, 4, 12, 55, 47, 10));


// FD
// let sumNumbers = 0;
// function manyDifferentNumbers(...params) {
//   for (const el of params) {
//     sumNumbers += el
//   }
//   return sumNumbers
// }
// console.log(manyDifferentNumbers(2, 6, 8, 9, 4, 12, 55, 47, 10));


// ================================================================================================ //

// 14. Задача(AF || FE || FD)
// Написать функцию, на вход которой подаётся массив чисел. Функция возвращает одно число - наименьшее из них.

// AF
// const userArray = [21, 55, 9, 47, 88, 12, 4, 36];
// const getMinNumber = numbers => {
//   let minNumber = userArray[0];
//   for (const el of numbers) {
//     if (el < minNumber) {
//       minNumber = el
//     }
//   }
//   return minNumber
// }
// console.log(getMinNumber(userArray));



// const userArray = [21, 55, 9, 47, 88, 12, 4, 36, 2];
// const getMinNumber = numbers => {
//   let minNumber = userArray[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < minNumber) {
//       minNumber = numbers[i]
//     }
//   }
//   return minNumber
// }
// console.log(getMinNumber(userArray)); //? Как вызвать данную функцию?
// // let result = getMinNumber();
// console.log(result);


// FE
// const myArray = [25, 47, -5, 10, 12, 8];
// let minNumber = myArray[0];

// const getMinNumber = function (number) {
//   for (const el of number) {
//     if (el < minNumber) {
//       minNumber = el
//     }
//   }
//   return minNumber
// }

// console.log(getMinNumber(myArray));

// FD
// const array = [55, 12, 90, 14, 35];
// let minNumber = array[0];
// function getMinNumber(number) {
//   for (const el of number) {
//     if (el < minNumber) {
//       minNumber = el
//     }
//   }
//   return minNumber
// }

// console.log(getMinNumber(array));

// ================================================================================================ //

// 15. Задача
// Что вернёт фунция tester ?

// const tester = (...numbers) => typeof numbers;
// let result = tester(3, 7, 4, 1); // ? object
// ================================================================================================ //

// 16. Задача
// Что вернёт фунция tester ?

// const tester = numbers => typeof numbers;
// let result = tester([3, 7, 4, 1]); // ? object
// ================================================================================================ //

// 17. Задача
// Что вернёт фунция tester ?

// const tester = numbers => Array.isArray(numbers);
// let result = tester([3, 7, 4, 1]); // ? true
// ================================================================================================ //

// 18. Задача(FD)
// Перепишите Arrow Function в Function Declaration.

// const tester = numbers => Array.isArray(numbers);
// let result = tester([3, 7, 4, 1]);


// function tester(number) {
//   let result = Array.isArray(number);
//   return result
// }

// console.log(tester([3, 7, 4, 1]));
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

// AF
// const isLongString = string => string.length > 10 ? true : false
// console.log(isLongString('hahahahaha'));
// console.log(isLongString('hahahahahaha'));
// ================================================================================================ //

// 20. Задача(AF)
// Написать функцию, на вход которой подаётся 2 параметра. Функция вычисляет произведение двух чисел.Функция возвращает объект, в котором хранится 2 параметра и результат умножения.

// const getObject = (num1, num2) => {
//   let theProductOfTwoNumbers = num1 * num2;
//   const userObject = {
//     'число-1': num1,
//     'число-2': num2,
//     'Произведение двух чисел': theProductOfTwoNumbers
//   }
//   return userObject
// }

// console.log(getObject(10, 20));
// console.log(getObject(20, 30));
// console.log(getObject(30, 40));

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
