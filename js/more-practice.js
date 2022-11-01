

// console.log(typeof 10); // 'number'
// console.log(typeof [10]); // 'object'
// console.log(typeof {}); // 'object'
// console.log(typeof null); // 'object'

// console.log(typeof (() => { })); // 'function'
// console.log(typeof typeof (Number('10'))); //'string'
// console.log(typeof typeof (Number('10') * 5 + parseInt(30.5) && true || 0)); //'string'


// console.log(Number('')); // 0
// console.log(Number(true)); // 1
// console.log(Number('000')); // 0

// console.log(Number('50px')); // NaN
// console.log(parseInt('50px')); // 50




// Написать функцию, которая перменожает 2 или три числа, в зависимости от того, сколько пользователь подал на вход в функцию

// function multy(num1, num2, num3 = 1) {
//   return num1 * num2 * num3
// }

// console.log(multy(10, 20, 30));

// Переписать эту функцию в AF

// const multy = (num1, num2, num3 = 1) => {
//   return num1 * num2 * num3
// }

// console.log(multy(10, 20, 30));


// const multy = (num1, num2, num3 = 1) => num1 * num2 * num3

// console.log(multy(10, 20, 30));


// Написать фнукцию, которая изменяет строчку таким образом, что дописывает после каждого символа восклицательный знак

// star -> s!t!a!r!

// let userText = 'star';

// function changeString(string) {
//   let newText = '';
//   for (let i = 0; i < string.length; i++) {
//     newText += string[i] + '!';
//   }
//   return newText;
// }

// console.log(changeString(userText));




// 1. Написать фнукцию, которая изменяет строчку таким образом, что дописывает после каждого символа восклицательный знак, кроме последнего (решить через цикл и через методы)

// let userstring = 'Apple';

// function afterSymbolPoint(str) {
//   let userNewText = '';
//   for (let i = 0; i < str.length; i++) {
//     userNewText += str[i] + '!';
//   }
//   return userNewText.slice(0, -1)
// }

// console.log(afterSymbolPoint(userstring));

//=====================================================================================

// 2. Написать функцию, которая прнимает на вход массив чисел
// Функция возвращает сумму чётных чисел
// (циклы + ~callback)

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function getSumEvenNumbers(array) {
//   let sumNumbers = 0;
//   for (const el of array) {
//     if (el % 2 === 0) {
//       sumNumbers += el
//     }
//   }
//   return sumNumbers
// }

// console.log(getSumEvenNumbers(myArr));

//=====================================================================================

// 3. Написать функцию, которая принимает на вход большо количество числовых переменных
// Функция вычисляет сумму каждого третьего числа


//=====================================================================================

// 4.  Написать функцию, которая проверяет перемнную, является ли она чётным числом




//=====================================================================================

// 5. Написать функцию, которая проверяет является ли перемнная типом number
//=====================================================================================

// 6. Написать функцию, которая проверяет перемнную, является ли она объектом


// * Следим за названием функции или оператором

// Повторить математику и логический тип на приоритет действий
// Повторить значения всех типов данных
// Повторить преобразование к Boolean / Number / String
// Повтоориьт AF, FD, FE
// for-of, ? :, &&







