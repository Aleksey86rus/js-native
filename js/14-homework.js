// Задачи по теме 14. Array methods.Part 1
// 1. Задача
// Написать функцию, которая проверяет является ли переданная переменная массивом.

// const myArray = [1, 2, 3, 4, 5];
// const checkArray = myArray => Array.isArray(myArray);
// console.log(checkArray(myArray));

// ===================================================================== //

// 2. Задача
// Написать функцию, которая проверяет является ли переданная перемнная объектом.

const capitalsOfCountries = {
  'Great Britain': 'London',
  'Russia': 'Moscow',
};
const checkObj = myArray => typeof myArray === 'object' && myArray !== null;
console.log(checkObj(capitalsOfCountries));
console.log(checkObj({}));
console.log(checkObj(null)); // false


typeof null === 'object' || null !== null;
true || false; // true

// ! Разоабраться раз и навсегда !

// ===================================================================== //

// ! FIXME: 3. Задача
// Написать функцию, на вход которй подаётся массив и любое количество переменных любого типа. Функция возвращает переданный массив, добавляя в него остальные переданные параметры.


// let userStr = 'String';
// let userNum = 50;
// let userBool = false;

// function getNewArray(array, ...params) {

//   for (const el of params) {
//     array.push(el)
//   }
//   return array
// }

// console.log(getNewArray([10, 'text', true, 20, null, undefined], userStr, userNum, userBool));

// ===================================================================== //

// 4. Задача
// Написать функцию, на вход которой подаётся любое количество переменных любого типа. Функция возвращает массив, неповторяющихся элементов. Значение элемента не должен встретиться более 1 раза в вернувшимся массиве.

// const myArray = [10, 'text', 10, true, 20, true, null, 'text'];

// let isOk = false


// TODO: ПРоработать
// function getArray(...params) {
//   const newArray = [];
//   for (const el of params) {
//     // А есть ли в массиве newArray params[i]
//     !newArray.includes(el) && newArray.push(el)
//   }
//   return newArray
// }

// console.log(getArray(10, 'text', 10, true, 20, true, null, 'text', 30));


// Напистаь функцию, на вход которой подаётся массив и число
// Фцункция возвращает истину, если это число присутствует в переданно массиве


// function getTrue(arr, num) {
//   for (const el of arr) {
//     if (el === num) {
//       return true
//     }
//   }
//   return false
// }
// console.log(getTrue([2, 58, 44, 12], 45));



// Как проверить наличие элемента в добавляемый массив? Сравнение с циклом
// Если нету, то добавлять

// ===================================================================== //

// 5. Задача
// Написать функцию, на вход которой подаётся 2 массива, функция возвращает новый массив, в котором все элементы двух других массивов.

// const firstArray = [0, 1, 2, 3, 4, 5];
// const secondArray = [6, 7, 8, 9, 10];

// const newArray = (arr1, arr2) => arr1.concat(arr2);

// console.log(newArray(firstArray, secondArray));

// ===================================================================== //

// ГРАБЛИ :)
// 6. Задача
// Написать функцию, на вход которой подаётся массив. В массиве могут быть любые типы данных. Функция возвращает число - количество ссылочных типов данных.

// const myArray = [{}, [], 55, 'String', [2, 3, 5, 6], {}, null]

// function getcountRefType(params) {
//   let countReferenceType = 0;
//   for (const el of params) {
//     if (typeof el === 'object' && el !== null) {
//       countReferenceType++
//     }
//   }
//   return countReferenceType
// }

// console.log(getcountRefType(myArray));

// ===================================================================== //

// 7. Задача
// Написать функцию, на вход которой подаётся массив. В массиве могут быть любые типы данных. Функция возвращает число - количество массивов.

// const myArray = [[], 20, 'text', null, []];

// function getCountArray(params) {
//   let countArrayInArray = 0;
//   for (const el of params) {
//     // if (Array.isArray(el) === true) {
//     //   countArrayInArray++
//     // }
//     if (Array.isArray(el)) {
//       countArrayInArray++
//     }
//   }
//   return countArrayInArray
// }

// console.log(getCountArray(myArray));
// ===================================================================== //

// * Проработать
// 8. Задача
// Написать функцию, на вход которой подаётся массив, функция удаляет средний / средние элементы. Например: [3, 4, 7] -> [3, 7] Например: [1, 4, 6, 5] -> [1, 5] Например: [1, 4, 7, 8, 8, 7, 6, 5] -> [1, 4, 7, 7, 6, 5] Например: [1, 4, 7, 8, 9, 8, 7, 6, 5] -> [1, 4, 7, 8, 8, 7, 6, 5]

// const userArr1 = [3, 4, 7]; // 3 - удаляем 1
// // 3 / 2 = 1.5
// const userArr2 = [1, 4, 6, 5]; // 4 - удаляем 2 // 4 / 2 = 2
// const userArr3 = [1, 4, 7, 8, 8, 7, 6, 5]; //  8 - удаляем 2 // 4
// const userArr4 = [1, 4, 7, 8, 9, 8, 7, 6, 5]; // 9 - удаляем 1 // 9 / 2 = 4.5
// // 3 9 - 1
// // 4 8 - 2



// function delAverageElem(array) {
//   const startIdx = array.length / 2
//   console.log(startIdx);
//   if (array.length % 2 === 0) {
//     // удаляеть 2
//     array.splice(startIdx - 1, 2)

//   } else {
//     // удаляеть 2
//     array.splice(Math.floor(startIdx), 1)
//   }
//   return array
// }

// console.log(delAverageElem(userArr1));
// console.log(delAverageElem(userArr2));
// console.log(delAverageElem(userArr3));
// console.log(delAverageElem(userArr4));

//

// ===================================================================== //

// 9. Задача
// Написать функцию, которая принимает на вход 2 параметра: массив чисел и 1 числовой пареметр. Если в массиве не содержится значение параметра, то проверка успешна.


// const myArr = [55, 17, 98, 10, 25, 35, 44];
// let userNum = 55;

// const checkItem = (par1, par2) => par1.includes(par2)

// console.log(checkItem(myArr, userNum));
// ===================================================================== //

// 10. Задача
// Написать функцию, которая принимает на вход 3 параметра.

// Первый параметр - искомый массив;
// Второй параметр значение, которое ищем;
// Третий - слово 'end' или 'start'; Функция возвращает индекс первого встречного значения.Если такого значения не нашлось, то функция возвращает null.


// function getFirstIndex(arr, value, find) {
//   const result = find === 'end' ? arr.lastIndexOf(value) : arr.indexOf(value)
//   return result === -1 ? null : result
// }

// console.log(getFirstIndex([10, 40, 20, 30, 40, 50], 43, 'start')); // null
// console.log(getFirstIndex([10, 40, 20, 30, 40, 50], 40, 'start')); // 1
// console.log(getFirstIndex([10, 40, 20, 30, 40, 50], 40, 'end')); // 4

// ===================================================================== //

// 11. Задача
// Написать функцию, которая принимает на вход параметр и массив. Функция удаляет элемент из массива под этим индексом. Функция мутирует переданный массив. Если такого индекса нет, то функция выводит в консоль: Undefined delete item.


// TODO: Проработать (3 === 3) + порядок условий
// function delElFromArray(index, arr) {
//   if (arr[index] === undefined) {
//     console.error('Undefined delete item');
//   } else {
//     arr.splice(index, 1);
//   }
// }
// const myArr = [2, 8, 10];
// delElFromArray(3, myArr);
// console.log(myArr);


// console.log(myArr[0] !== undefined);
// console.log(myArr[1] === undefined);
// console.log(myArr[3] === undefined);
// 

// ===================================================================== //

// 12. Задача
// Написать функцию, которая принимает на вход 2 параметра: 1 - массив. 2 - слово 'end' или 'start'. Функция мутирует исходный массив, удаляя либо первый элемент, либо последний.


// const myArr = ['text', 20, 'end', 50, 100];

// function delfirstOrLastEl(arr, param) {
//   if (param === 'start') {
//     arr.shift()
//   } else if (param === 'end') {
//     arr.pop()
//   }
//   return myArr
// }

// console.log(delfirstOrLastEl(myArr, 'start'));
// console.log(delfirstOrLastEl(myArr, 'end'));

// console.log(myArr === myArr);

// // TODO:
// // Решаить эту задачу вторым способом с использованием splice
// const myArr = ['text', 20, 'end', 50, 100, 543, 5, 435, 345, 43, 5, 435];


// function delfirstOrLastEl(arr, param) {
//   console.log(myArr === arr);
//   if (param === 'start') {
//     arr.splice(0, 1);
//   } else if (param === 'end') {
//     arr.splice(arr.length - 1, 1);
//   }

//   return arr
// }

// // console.log(delfirstOrLastEl(myArr, 'start'));
// console.log(delfirstOrLastEl(myArr, 'end'));

// ===================================================================== //

// 13. Задача
// Написать функцию, которая принимает на вход строку. Функция возвращает строку задом наперёд.

// Пример:
// Jack -> kcaJ
// Memory -> yromeM
// Snickers -> srekcins

// let userString = 'Lesson';

// const getReverseStr = string => string.split('').reverse().join('');

// console.log(getReverseStr(userString));

// ===================================================================== //

// 14. Задача
// Написать функцию, на вход которой подаётся строка. Функция возвращает ту же строчку, но удаляя оттуда все знаки восклицания.

// FIXME: (решён частный случай)
// let userStr = '!!At!e!!ntio!n!!!';


// 

// function getString(str, symb) {
//   let newStr = '';
//   for (const el of str) {
//     if (el !== symb) {
//       newStr += el
//     }
//   }
//   return newStr
// }

// function getString(str, symb) {
//   return str.split(symb).join('')
// }

// const getString = str => str.split('!').join('');
// console.log(getString(userStr));
// ===================================================================== //

// 15. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

const testStr = 'Test string😋 for 15 task!'

// console.log(Array.from(testStr)); // Будет создан массив из символов. По умолчанию у Array.from.
// console.log(testStr.split('')); // Будет также создан массив из символов.В данном случае, указан разделитель! "Пустая строка".

// ===================================================================== //

// 16. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// const testString = 'Nice... Hello world.'

// console.log(testString.split('.').join('!')); // Символ "точка", будет заменет на восклицательный знак.

// ===================================================================== //

// 17. Задача
// Написать функцию, на вход можно подать много параметров. Функция из всех этих параметров отбирает только массивы и склеивает их в один единый. Функция возвращает получившийся массив. Если нету в переданных параметрах массива, то вернуть null.

// function getNewArray(...params) {
// let isArray = false
//   for (const el of params) {
//     if (Array.isArray(el)) {
//       isArray = true
//       break;
//     }
//   }
//   let userArr = [];
//

//   if (isArray) {
//     for (const el of params) {
//       if (Array.isArray(el)) {
//         userArr = userArr.concat(el);
//       }
//     }
//     return userArr
//   } else {
//     return null
//   }

// }



// function getNewArray(...params) {
//   let userArr = [];
//   for (const el of params) {
//     if (Array.isArray(el)) {
//       userArr = userArr.concat(el);
//     }
//   }
//   // return userArr.length === 0 ? null : userArr
//   return userArr.length ? userArr : null
// }
// console.log(getNewArray([1, 2], 'string', [3, 4], 55, [5, 6], true));
// console.log(getNewArray('string', true, 20));


// if (условие) {
//   // если условие истинно
// } else {
//   // если условие  ложно
// }

// условие ? истинно : ложно



// Array.isArray()
// Array.from()
// concat()
// slice()
// indexOf()
// includes()
// join()


// HOF (Не используются для мутаций)
// map
// filter
// find
// findIndex
// some
// every
// reduce

// forEach (50/50)


// function getNewArray(...params) {
//   let userArr = [];
//   for (let i = 0; i < params.length; i++) {
//     if (Array.isArray(params[i])) {
//       userArr = userArr.concat(params[i])
//       //?userArr.concat(params[i]) Почему так, не работает?
//     }
//   }
//   return userArr
// }

// console.log(getNewArray([1, 2], 'string', [3, 4], 55, [5, 6], [7, 8], true));
// console.log(getNewArray('string', true));

// ===================================================================== //
// TODO:
// 18. Задача
// Написать функцию, на вход которой подаётся массив и число. Функция возвращает новый обрезанный массив, начиная с элемента под тем номером, который передали в функцию и заканчивая всегда последним элементом. Если указали некорректный номер элемента, то вернуть null.
//             0   1    2   3   4   5
// const myArr = [22, 55, 44, 33, 90, 50];

// function getModifiedArray(arr, index) {
//   return arr[index] === undefined ? null : arr.slice(index)
//   // if (arr[index] === undefined) {
//   //   return null
//   // } else {
//   //   return arr.slice(index)
//   // }
// }

// console.log(getModifiedArray(myArr, 2));

// ===================================================================== //

// ★ Задачи повышенной сложности ★
// ★ 19. Задача ★
// Написать функцию, которая принимает на вход параметры: массив чисел и числовые пареметры. Если в массиве не содержится значения параметров, то проверка успешна.

// function checkIsArrayValueParams(arr, ...params) {
//   // * includes()

//   for (const el of arr) {
//     if (params.includes(el)) {
//       return false
//     }
//   }
//   return true
// }


// Решить double cycle
// // * Решить через includes

// console.log(checkIsArrayValueParams([2, 5, 10, 15, 18, 25], 3, 6, 11, 16, 19, 26));

// console.log(checkIsArrayValueParams([3, 5, 10, 15, 18, 21], 8, 55, 10));

// ===================================================================== //

// ★ 20. Задача ★
// Написать функцию, на вход которой подаётся массив и много параметров. Функция возвращает новый массив, скопировав туда все параметры переданного, добавляя по очереди сначала в начало массива элемент, затем в конец, затем снова в начало и т.д.пока не закончатся перадаваемые параметры.Пример: ...

// ===================================================================== //

// ★ 21. Задача ★
// Написать функцию, на вход которой подаётся строка. Функция возвращает ту же строчку, но удаляя оттуда все перечисленные знаки: ., !?:;

// ===================================================================== //

// ★★ 22. Задача ★★
// Написать функцию, на вход которой подаётся массив и любое количество переменных любого типа.Функция возвращает переданный массив, удаляя из него остальные переданные параметры.




//     3
// от 0 до 9 вкл (4 итерации)


// 4
// 1
// 2

// 75%
// 3




// 1 ... 1000

// 500 (500 / 1000)

// 750 (250 / 1000)

// 500 до 750

// 625 (125 / 1000)

// 625 до 750

// 687 (62.5)

