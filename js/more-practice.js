

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

// let userNum = 10;
// let userNum = 11;

// the first option)
// function checkIsEvenNumber(num) {
//   if (num % 2 === 0) {
//     return true
//   }
//   return false
// }

// the second option)
// function checkIsEvenNumber(num) {
//   return num % 2 === 0 ? true : false
// }

// the third option)
// function checkIsEvenNumber(num) {
//   return num % 2 === 0
// }

// console.log(checkIsEvenNumber(userNum));

//=====================================================================================

// 5. Написать функцию, которая проверяет является ли перемнная типом number

// let userNum = 10;
// let userNum = '10';
// let userNum = NaN;
// let userNum = null;
// let userNum = Infinity;

// function checkIsTypeNumber(num) {
//   return typeof num === 'number'
// }

// console.log(checkIsTypeNumber(userNum));


//=====================================================================================

// 6. Написать функцию, которая проверяет перемнную, является ли она объектом

// let userType = {};
// let userType = 10;
// let userType = '10';
// let userType = null;
// let userType = [];
// let userType = (() => { });


// function checkIsObject(params) {
//   return typeof params === 'object' && params !== null;
// }

// console.log(checkIsObject(userType));




// * Следим за названием функции или оператором

// Повторить математику и логический тип на приоритет действийs
// Повторить значения всех типов данных
// Повторить преобразование к Boolean / Number / String
// Повтоориьт AF, FD, FE
// for-of, ? :, &&




// * ===== switch - case ===== * //

// Пользователь ввёл число, оно сохранилось в переменную
// Если оно рано 1, то вывести 1
// Если оно равно 2, то вывести 4
// Если оно равно 3, то вывести 'ok'
// Если оно равно 4, то вывести 'ok-ok'
// Иначе вывести 'error'

// const userNum = 0

// if (userNum === 1) {
//   console.log(userNum);
// } else if (userNum === 2) {
//   console.log(4);
// } else if (userNum === 3) {
//   console.log('ok');
// } else if (userNum === 4) {
//   console.log('ok-ok');
// } else {
//   console.error('error');
// }

// switch
// Только если проверяем одну переменную
// И только если везде сранвнение ===


// switch (userNum) {
//   case 1:
//     return userNum

//   case 2:
//     return 4

//   case 3:
//     return 'ok';

//   case 4:
//     return 'ok-ok';

//   default:
//     return 'error';
// }




// Если это число чётное, то вывести только: even;
// Если это число делится на 7, то вывести только: multiple;
// Но если это число и чётное, и делится на 7, то вывести только: even & multiple;


// let userNum = Number(prompt('Write your number'));
// if (userNum % 2 === 0 && userNum % 7 === 0) {
//   console.log('even & multiple');
// } else if (userNum % 2 === 0) {
//   console.log('even');
// } else if (userNum % 7 === 0) {
//   console.log('multiple');
// }

// let userNum = Number(prompt('Write your number'));
// if (userNum % 7 === 0 && userNum % 2 !== 0) {
//   console.log('multiple');
// } else if (userNum % 2 === 0 && userNum % 7 !== 0) {
//   console.log('even');
// } else if (userNum % 2 === 0 && userNum % 7 === 0) {
//   console.log('even & multiple');
// }




// Написать функцию, которая проверяет массив, является ли он пустой и если он пустой, то функция возвращает 0
// Иначе 1


function checkArray(arr) {
  // arr.length -> 0
  // if (Boolean(arr.length)) -> if (Boolean(0))
  if (arr.length) { // true  arr.length > 0 <==>  arr.length !== 0
    return 1
  } else { // arr.length === 0
    return 0
  }
  // return arr.length ? 1 : 0 //  Refactoring
}

// const checkArray = arr => arr.length ? 1 : 0 // Full Refactoring



console.log(7 && 'fd' && null && []); //  null
console.log(7 && 'fd' && 'null' && []); // []
console.log(7 && 'fd' && 'null' && 77); // 77
// console.log(true && true && false && true); //  false
// 


// Написать функцию, которая проверяет строчку, если в ней ест хотя бы 1 символ, то вернуть true
// Иначе возвращает 0


// function checkStr(str) {
//   // if (str.length) {
//   //   return true
//   // } else {
//   //   return ''
//   // }
//   return str.length ? true : 0;
// }

function checkStr(str) {
  // return str.length ? true : 0;
  return str.length && true;
}



const userStr = '';
console.log(checkStr(userStr));




const userArr = [];

console.log(checkArray(userArr)); // expect -> 0










// TODO: https://habr.com/ru/post/298134/
// Напишите программу, которая выводит на экран числа от 1 до 100.
// При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти — слово «Buzz».
// Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»






