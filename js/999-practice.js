
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



// ! 9
// Написать функцию, которая принимает на вход массив чисел
// Функция возвращает true, если количество элементов больше 5
// Иначе возвращает null

// const myArray = [1, 25, 35]
// function checkMoreFiveElements(arr) {
//   return arr.length > 5 ? true : null
// }
// const resultFunction = checkMoreFiveElements(myArray)
// console.log(resultFunction);


// 10.
// Написать функцию, на вход которой идёт массив чисел
// Если последний элемент массива чётный, то функция мутирует массив и удаляет его
// Иначе функция просто возвращает первый элемент




// function deliteLastElement(arr) {
//   // return arr[arr.length - 1] % 2 === 0 ? arr.pop() : arr[0]

//   // Такой if невозможно выполнить тернарным оператором
//   if (arr[arr.length - 1] % 2 === 0) {
//     // return arr.pop() // Возвращать удалённый элемент нам не нужно!
//     arr.pop()
//   } else {
//     return arr[0]
//   }
// }



// const myArray = [2, 55, 88, 10, 77, 36, 15, 22, 23]
// console.log(deliteLastElement(myArray));
// console.log(myArray);

// Как получить самый первый элемент в массиве
// console.log(myArray[0]);
// // Как получить последний элемент?
// console.log(myArray[myArray.length - 1]);
// // Как получить предпоследний элемент?
// console.log(myArray[myArray.length - 2]);


// 11
// Написать функцию, на вхо которой подаётся массив
// Функция муирует массив, изменяя каждый третий элемент на '===x3==='
// Нулевой менять не надо!

//                0   1  2    3    4  5   6   7
// const newArray = [3, 25, 63, 101, 55, 87, 99, 11]


// function changeEveryThirdElement(arr2) {
//   for (let i = 0; i < arr2.length; i++) {
//     if ((i + 1) % 3 === 0) {
//       arr2[i] = '===x3==='
//     }
//   }
// }

// console.log(changeEveryThirdElement(newArray));
// console.log(newArray);


// ДЗ:
// 12.
// Написать функцию, на вход которой подаётся массив
// Функция возвращает наибольшее число из массива

// const myArray = [2, 12, 9, 22, 65, 87, 98, 23, 105];

// function checkMaxNumber(arr) {
//   debugger
//   let maxNumber = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNumber) {
//       maxNumber = arr[i]
//     }
//   }
//   return maxNumber
// }

// console.log(checkMaxNumber(myArray));

//===============================================================//


// 12.5
// Написать функцию, на вход которой подаётся массив и символ '+' или '-'
// Функция возвращает наибольшее число из массива, если вторым параметром был передан + иначе функция вернёт наименьшее значение

// const myArray = [2, 77, '+', 12, 43, 22, 65, 87, 98, 23, 105, 1];

// function maxNumberArray(arr) {
//   let maxNumber = arr[0];
//   let minNumber = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNumber) {
//       maxNumber = arr[i]
//     } if (arr[i] < minNumber) {
//       minNumber = arr[i]
//     }
//   }
//   return (arr[2] === '+') ? maxNumber : minNumber
// }

// console.log(maxNumberArray(myArray));


// 13.
// Написать функцию, на вход которой подаётся массив с числами и строками
// Функция возвращает сумму всех чисел

// ================ for ======================= //
// const myArray = [77, 'fly', 12, 'board', 22, 'airlines', 98, 'airbus', 105, 45];

// function sumAllNumbers(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number') {
//       sum += arr[i]
//     }
//   }
//   return sum
// }
// console.log(sumAllNumbers(myArray));
// console.log(typeof myArray[0]);


// ================ for of ===================== //

// const myArray = [77, 'say', 12, 22, 65, 98, 105, 45];

// function sumAllNumbers(arr) {
//   let sum = 0;
//   for (const el of arr) {
//     if (typeof el === 'number') {
//       sum += el
//     }
//   }
//   return sum
// }
// console.log(sumAllNumbers(myArray));



// ==================== object =============== //

// const user = {
//   name: 'leon',
//   height: 180,
//   age: 22,
//   nationality: 'Spanish',
//   isAdmin: true,
//   'likes bird': true
// }
// console.log(user);

// // Для обращения к свойствам:===============================
// console.log(user.name); // leon

// // Добавление свойства:====================================
// user.job = 'Manager';
// // Удаление свойства:
// delete user.height;

// // Обращение к ключу с составным названием:================
// user['likes bird'] = false
// // Удалние к ключу с составным названием:==================
// delete user['likes bird']


// для обращение через переменную:=========================
// let color = 'red';
// user[color] = true


// let examp = prompt('Write your name')
// console.log(user[examp]);

// Вычисляемые свойства:===================================
// let fruit = prompt('Введите apple')
// let bag = {
//   [fruit]: 5,
// }

// console.log(bag.apple);

// Проверка существования свойства, опреатор in:============
// console.log(user.abdc === undefined); // true означает "свойства abcd -- нет"

// Также существует специальный оператор "in" для проверки существования свойства в объекте.
// console.log('name' in user); // true, user.name -- существует.
// console.log('blabla' in user); // false, user.blabla -- не существует.


// Цикл for in:============================================

// for (key in user) {
//   // console.log(key);
//   console.log(user[key]);
// }



// const menu = {
//   john: 200,
//   Ann: 200,
//   title: 'My menu',
// };


// function multiplyNumberic(obj) {
//   for (const key in obj) {
//     if (typeof obj[key] === 'number') {
//       obj[key] *= 2
//     }
//   }
// }

// multiplyNumberic(menu);
// console.log(menu);


// 1. Написать функцию, которая добавляет в конец массива переданный элемент

// 1. Написать функцию ()
// function pushEndArrayEl(arr, el) {
//   arr.push(el)
// }

// Проверка
// const list = [564, 654, 645, 634, 5]
// pushEndArrayEl(list, 10);
// console.log(list);


// 2. Написать функцию, которая измнеяет строчку, добавляя к ней восклицательный знак

// function addExclToEnd(str) {
//   // console.log(str + '!');
//   return str + '!'
// }

// const res = addExclToEnd('cake');
// console.log(res);
// document.body.innerHTML += res

// console.log(addExclToEnd('fdsfsd'));




// 3. Написать функцию, которая проверят является ли переданный параметр массивом


// function checkArray(param) {
//   return Array.isArray(param)
// }


// // Либо сразу до написания функции, либо после того, как написал полностью всю функцию с решениями
// console.log(checkArray('string')); // false
// console.log(checkArray(543));     // false
// console.log(checkArray(true));    // false
// console.log(checkArray([4, 4]));  // true
// console.log(checkArray([]));      // true
// console.log(checkArray({}));      // false
// console.log(checkArray(null));    // false
// console.log(checkArray());        // false





// 4. let index = <string>.indexOf(value, index = 0) // Вовзращает индекс первого встречного value, начиная с index (по умолчани поиск с начала строки index = 0)
// ! Возвращает -1, если ничего не нашёл
// Реализовать функция, как indexOf

function indexOf1(string, subStr, index = 0) {
  for (let i = index; i < string.length; i++) {
    if (string[i] === subStr) {
      return i
    }
  }
  return -1
}

// indexOf1('string', 'r');
console.log(indexOf1('string', 'r'));
console.log(indexOf1('string', 't'));
console.log(indexOf1('string', 'i', 5));


// 5. let hasIndex = <string>.includes(value, index = 0) // Вовзращает true если value найден в строке, иначе false
// index по умолчанию равен 0

// 6. let newString = <string>.trim() // Удаляет все пробелы слева и справа от строки

// 7. let newString = <string>.slice(start, end = <string>.length); // Возвращает строку, копируя в неё все символы с позиции start до позиции end !!!НЕ ВКЛ!!!



// Если устал от задач выше:
// 8. Написать функцию, которая принимает 2 или 3 параметра и создаёт массив с этими параметрами

// 9. Написать функцию, которая проверят являются ли все переданные параметры массивами

// 10. Написать функцию, которая возвращает новый массив из тех параметров, которые передали на вход















// Выводы:
// ! 1
// 1. Мутировать
// 2. Возвращать
// 3. Вызвать другую функцию, которая делает 1, 2, 3


// ! 2
// Что значит функция проверяет? Функция должна вернуть true/false
// Что значит функция изменяет строчку? Функция должна вернуть новую строчку (строка имутабельна)

// Что значит изменить массив? (Мутировать)
// Что значит изменить объект? (Мутировать)

// Что значит создать объект? (Вернуть новый объект)
// Что значит создать массив? (Вернуть новый массив)


// ! 3 Разобрать методы/функции, которые мы знаем
// 1) Что на вход (какой тип, сколько, в каком порядке)
// 2) Что на выход (какой тип, что возвращает)
// 3) Суть - что делает функция


// const array = [653, 32, 'dfs', 'gfdy', 546, true]
// // length - длина - количество элементов в массиве
// console.log(array.push(null, 'ttt'));
// console.log(array.pop());



// =================================================================== //
// arguments //

// function myFunc(x) {
//   // console.log(arguments);
//   return arguments;
// }

// let myVar = myFunc(10, 'string', [1, 2, 3]);

// console.log(myVar);