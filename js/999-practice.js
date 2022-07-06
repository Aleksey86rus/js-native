
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
//     star = star + ' *'
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

// isPrimitive(true) // true
// isPrimitive([]) // false
// isPrimitive(534) // true
// isPrimitive('text') // true
// isPrimitive({}) // false

// ? 7. Написать функцию, которая удаляет первый и последний элементы из массива
// Функция мутирует исходный массив

// ?? 8. Написать функцию, которая удаляет первый и последний элементы из массива
// Функция НЕ мутирует исходный массив, а возвращает новый тот же самый массив, но уже с удалёнными элементами









