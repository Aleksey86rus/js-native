
// 1. Написать функцию, на вход которой подаётся 2 числа
// Функция проверяет является ли первое чётным, а второе делится ли на 3
// - Если оба удовлетворяют условиям, то вернуть true
// - Если один удовлетворяет, то вернуть 'true/false'
// - Если ни одно, то вернуть false

// function checkNumbers(num1, num2) {
//   if (num1 % 2 === 0 && num2 % 3 === 0) {
//     return true
//   } else if (num1 % 2 === 0 || num2 % 3 === 0) {
//     return 'true/false'
//   } else {
//     return false
//   }
// }


// console.log(checkNumbers(10, 27));
// console.log(checkNumbers(20, 28));
// console.log(checkNumbers(15, 28));

// ~~ 2. Написать функцию, которая проверяет, не попало ли число в промежуток от 7 до 23 вкл

// function checkRangeNumber(number) {
//   return number >= 7 && number <= 23
// }

// console.log(checkRangeNumber(14));
// console.log(checkRangeNumber(25));


// 3. Написать функцию, на вход которой подаётся одно число
// Вывести все чётные числа от 1 до того числа, которое подали в функцию

// function allEvenNumbers(number) {
//   for (let i = 1; i < number; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }
// allEvenNumbers(20);
// allEvenNumbers(40);


// 4. Написать функцию, на вход которой подаётся 2 числа
// Функция возвращает сумму все чисел от первого параметра функции, до второго

// function sumTwoNumbers(num1, num2) {

//   let sumNum = 0;
//   for (let i = num1; i <= num2; i++) {
//     // sumNum += i
//     sumNum = sumNum + i
//   }
//   return sumNum
// }
// console.log(sumTwoNumbers(1, 3));
// console.log(sumTwoNumbers(1, 5));


// ? 5. Написать функцию, которая выводит лесенку из звёздочек
// Функция принимает на вход одно число - количество ступенек

// function outputsQuantitySteps(steps) {
//   // debugger
//   let star = '';
//   for (let i = 0; i < steps; i++) {
//     star = star + '*'
//     console.log(star);
//   }
// }
// outputsQuantitySteps(3);

// Пример: 3
// *
// **
// ***

// Пример: 5
// *
// **
// ***
// ****
// *****


// ? 6. Написать функцию, которая проверяет, является ли переданный параметр примитивом

// function checkIsPrimitive(check) {
//   return typeof check === 'object' && check !== null
// }

// Печать (рефаторинг isChecked)

// number, string, boolean, undefined, null
// symbol, bigInt (крайне-редкие)
// object

// console.log(typeof '108'); // 'string'
// console.log(typeof 88); // 'number'
// console.log(typeof []); // 'number'
// let test = '';
// if (typeof test === 'number')
// if (typeof test === 'object')
// if (test !== null)


// console.log(checkIsPrimitive('abc'));
// console.log(checkIsPrimitive(10));
// console.log(checkIsPrimitive(true));
// console.log(checkIsPrimitive([]));
// console.log(checkIsPrimitive({}));
// console.log(checkIsPrimitive(null));

// isPrimitive(true) // true
// isPrimitive([]) // false
// isPrimitive(534) // true
// isPrimitive('text') // true
// isPrimitive({}) // false

// ? 7. Написать функцию, которая удаляет первый и последний элементы из массива
// Функция мутирует исходный массив

// const myArray = [11, 21, 55, 67, 11, 35, 19, 99, 100]

// function deleteFirstLastElements(arr) {
//   arr.shift(0);
//   arr.pop(6);
// }
// deleteFirstLastElements(myArray);
// console.log(myArray);

// ?? 8. Написать функцию, которая удаляет первый и последний элементы из массива
// Функция НЕ мутирует исходный массив, а возвращает новый тот же самый массив, но уже с удалёнными элементами


// function deleteFirstLastElements(arr) {
//   // debugger
//   const myNewArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     myNewArray.push(arr[i])
//   }
//   myNewArray.shift();
//   myNewArray.pop();
//   return myNewArray
//   // console.log(myNewArray === array);
// }

// const array = [-10, 25, 32, 55, -78, 42, 11, -15, 77]
// console.log(deleteFirstLastElements(array));
// console.log(array);





