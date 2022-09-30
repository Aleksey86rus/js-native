// Задачи по теме 15. Array methods. Part 2 (callback - HOF)##
// 1. Задача
// Написать функцию, которая находит индекс первого числа в массиве, кратного 3.


// const myArray = [2, 1, 5, 9, 8, 10];

// // const searchFirstIndexInArray = myArray.findIndex((value) => {
// //   return value % 3 === 0;
// // })


// const searchFirstIndexInArray = myArray.findIndex((value) => value % 3 === 0)

// console.log(searchFirstIndexInArray);




// =============================================================================== //
// 2. Задача
// Написать функцию, которая находит индекс первого имени в массиве, длина которого больше 5.

// const array = ['day', 'morning', 'night', 'today', 'tomorrow'];

// // const searchIndexFirstNameInArr = array.findIndex((index) => {
// //   return index.length > 5;
// // })

// const searchIndexFirstNameInArr = array.findIndex((index) => index.length > 5)

// console.log(searchIndexFirstNameInArr);

// =============================================================================== //
// 3. Задача
// Написать функцию, которая находит индекс первого булевого true из массива любых типов данных.

// const array = ['string', 55, false, 'night', true, null];

// // const searchFirstIndexBoolEl = array.findIndex((index) => {
// //   return typeof index === 'boolean';
// // })

// const searchFirstIndexBoolEl = array.findIndex((value) => typeof value === 'boolean')
// console.log(searchFirstIndexBoolEl);

// =============================================================================== //
// 4. Задача
// Написать функцию, которая ищет среди массива чисел первое встречное отрицательное число.

// const arr = [5, 6, 8, 10, -11, 25, -60];

// // const searchFirstNegativNumb = arr.find((value) => {
// //   return value < 0;
// // })

// const searchFirstNegativNumb = arr.find((value) => value < 0)
// console.log(searchFirstNegativNumb);

// =============================================================================== //
// 5. Задача
// Написать функцию, которая ищет среди массива имен первое встречное имя с длиной строки менее 4.

// const names = ['Mihail', 'Eva', 'Igor', 'Maks', 'Pol'];

// // const searchFirstNameInArr = names.find((value) => {
// //   return value.length < 4;
// // })

// const searchFirstNameInArr = names.find((value) => value.length < 4)
// console.log(searchFirstNameInArr);

// =============================================================================== //
// 6. Задача
// Написать функцию, которая мутирует массив, заменяя все чётные числа на 777.

// const myArr = [22, 13, 45, 77, 10, 48, 31, 50];

// myArr.forEach((value, index, arr) => {
//   if (value % 2 === 0) {
//     arr[index] = 777;
//   }
// })

// console.log(myArr);

// =============================================================================== //
// 7. Задача
// Написать функцию, которая мутирует массив, заменяя все строки на число 0.

// const array = ['one', 'two', 10, 'three', true, 'four', undefined, 'five'];

// array.forEach((value, index, arr) => {
//   typeof value === 'string' && (arr[index] = 0)
// })

// console.log(array);

// =============================================================================== //

// 8. Задача
// Написать функцию, которая выводит в консоль все чётные индексы, начиная с 2.

//             0  1  2  3  4  5  6  7  8    9  10  11  12  13  14  15  16  17  18
// const array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// array.forEach((v, index) => {
//   if (index % 2 === 0 && index !== 0) {
//     console.log(index);
//   }
// })

















// const myArr = [5, 10, 25, 50, 100];

// function copyArrayAndDoSmth(arr, instructions) {
//   const output = [];

//   for (let i = 0; i < arr.length; i++) {
//     output.push(instructions(arr[i]))
//   }
//   return output;
// }



// function numSquared(num) {
//   return num * num;
// }

// function divideBy2(num) {
//   return num / 2;
// }



// const result = copyArrayAndDoSmth([10, 20, 30], numSquared);
// const result = copyArrayAndDoSmth([10, 20, 30], (num) => num ** 2);
// const result2 = copyArrayAndDoSmth([10, 20, 30], divideBy2);
//
// console.log(result);
// console.log(result2);