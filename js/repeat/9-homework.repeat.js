// Задачи по теме 9. Function

// 1. Задача
// Написать функцию, которая выводит сообщение Hello world! 5 раз.

// function outputMessage(message) {
//   for (let i = 0; i < message; i++) {
//     console.log('Hello world');
//   }
// }

// outputMessage(5);
// ----------------------------------------------------------------------------

// 2. Задача
// Написать функцию, на вход которой подаётся переменная, функция возвращает название типа данных.

// function returnNamedataType(variable) {
//   return typeof variable;
// }
// console.log(returnNamedataType(isNaN(10)));
// console.log(returnNamedataType(toString(10)));
// console.log(returnNamedataType(10));
// console.log(returnNamedataType('abc'));
// console.log(returnNamedataType(''));
// console.log(returnNamedataType(null));
// console.log(returnNamedataType([]));
// console.log(returnNamedataType({}));
// console.log(returnNamedataType(undefined));
// console.log(returnNamedataType(false));


// ----------------------------------------------------------------------------

// 3. Задача
// Написать функцию, которая проверяет, является ли переменная типом string

// function chekIsString(variable) {
//   return typeof variable === 'string'
// }
// console.log(chekIsString('abc'));
// console.log(chekIsString(10));
// console.log(chekIsString(null));
// console.log(chekIsString(''));
// console.log(chekIsString(true));

// ----------------------------------------------------------------------------

// 4. Задача
// Написать функцию, которая проверяет, является ли переменная типом null

// function checkVariableNull(variable) {
//   return variable === null
// }

// console.log(checkVariableNull(null));
// console.log(checkVariableNull(true));
// console.log(checkVariableNull(10));
// console.log(checkVariableNull('abc'));
// console.log(checkVariableNull(''));
// console.log(checkVariableNull(undefined));
// console.log(checkVariableNull([]));
// console.log(checkVariableNull({}));

// ----------------------------------------------------------------------------

// 5. Задача
// Написать функцию, на вход которой подаётся 2 переменных, функция проверяет является ли первая переменная типом number, а вторая - string. (Т.е.функция возвращает true или false)

// function checkTypeNumberAndString(let1, let2) {
//   return typeof let1 === 'number' && typeof let2 === 'string'
// }
// console.log(checkTypeNumberAndString(10, 'abc'));
// console.log(checkTypeNumberAndString('abc', 10));
// console.log(checkTypeNumberAndString(false, 'text'));

// ----------------------------------------------------------------------------

// FIXME: 6. Задача
// Написать функцию, на вход которой подаётся 2 числа, если эти числа равны 15, то возвращается true иначе false.

// function checkNumbers(num1, num2) {
//   return num1 === 15 && num2 === 15
// }
// console.log(checkNumbers(15, 15));
// console.log(checkNumbers(20, 15));
// console.log(checkNumbers('abc', 15));
// ----------------------------------------------------------------------------

// FIXME: 7. Задача
// Написать функцию, на вход которой подаётся 2 числа, если первое число равно 5, а второе 3, то возвращается true иначе false

// function checkNumbers(num1, num2) {
//   return num1 === 5 && num2 === 3
// }
// console.log(checkNumbers(5, 3));
// console.log(checkNumbers(20, 15));
// console.log(checkNumbers('abc', 15));
// ----------------------------------------------------------------------------

// 8. FIXME: Задача
// Написать функцию, которое проверяет равно ли переданное число 10.

// function checkNumber(num) {
//   return num === 10
// }

// console.log(checkNumber(10));
// console.log(checkNumber(20));
// console.log(checkNumber('abc'));
// ----------------------------------------------------------------------------

// 9. FIXME: Задача
// Написать функцию, которая проверяет переданное число на чётность.

// function checkEvenNumber(num) {
//   return num % 2 === 0
// }

// console.log(checkEvenNumber(10));
// console.log(checkEvenNumber(15));
// ----------------------------------------------------------------------------

// FIXME: 10. Задача
// Написать функцию, которая проверяет переданное число на то, делится ли оно на 10 или нет.

// function checkShareNumber(num) {
//   return (num % 10 === 0)
// }

// console.log(checkShareNumber(20));
// console.log(checkShareNumber(22));

// ----------------------------------------------------------------------------

// FIXME: 11. Задача
// Написать функцию, которая проверяет переданное число на крастность 17.

// function checkShareNumber(num) {
//   return (num % 17 === 0)
// }

// console.log(checkShareNumber(17));
// console.log(checkShareNumber(19));

// ----------------------------------------------------------------------------

// 12. Задача
// Написать функцию, на вход которой подаётся 2 числа, функция проверяет равны ли эти числа.

// function checkEqualNumbers(num1, num2) {
//   return num1 === num2
// }
// console.log(checkEqualNumbers(10, 10));
// console.log(checkEqualNumbers(10, 20));

// ----------------------------------------------------------------------------

// *** 13. Задача
// Написать функцию, на вход которой подаётся 2 или 3 или 4 перемнных, функция возвращает true / false, в зависимости от того являются ли все переменные типом string.

// function isStringVariables(let1, let2, let3 = '', let4 = '') {
//   return typeof let1 === 'string' &&
//          typeof let2 === 'string' &&
//          typeof let3 === 'string' &&
//          typeof let4 === 'string'
// }

// console.log(isStringVariables('one', 'two'));
// console.log(isStringVariables('one', 'two', 'three'));
// console.log(isStringVariables('one', 'two', 'three', 'four'));
// console.log(isStringVariables('one', 'two', 'three', 10));
// ----------------------------------------------------------------------------

// FIXME: 14. Задача
// Написать функцию, на вход которой подаётся число, функция возвращает текст: Делится на 5, если переданное число делится на 5. Иначе возвращает: Не делится.

// function getText(num) {
//   return (num % 5 === 0) ? 'делится на 5' : 'Не делится'
// }

// console.log(getText(20));
// console.log(getText(22));
// TODO: if-> тернарным оператором

// ----------------------------------------------------------------------------

// FIXME: 15. Задача
// Сделать рефакторинг кода.

// function isTwenty(num) {
//   return num === 20
// }
// console.log(isTwenty(20));

// ----------------------------------------------------------------------------

// ??? 16. Задача
// Написать функцию, которая складывает 2 или 3 числа, возвращает результат. Учесть, что пользователь может подать на вход не число. Вывести в этом случе: error.

// function getResult(num1, num2, num3 = 0) {
//   return (typeof num1 === 'number' &&
//     typeof num2 === 'number' &&
//     typeof num3 === 'number') ? num1 + num2 + num3 : 'error'
// }

// console.log(getResult(10, 20, 30));
// console.log(getResult(10, 20, 'abc'));
// ----------------------------------------------------------------------------

// 17. Задача
// Написать функцию, которая перемножает 2, 3 или 4 числа, возвращает результат.Учесть, что пользователь может подать на вход не число. Вывести в этом случе: error.

// function getResult(num1, num2, num3 = 0, num4 = 0) {
//   if (typeof num1 === 'number' &&
//     typeof num2 === 'number' &&
//     typeof num3 === 'number' &&
//     typeof num4 === 'number') {
//     return num1 + num2 + num3 + num4
//   } else {
//     return 'error';
//   }
// }
// console.log(getResult(1, 2, 3, 4));
// console.log(getResult(1, 2, 3));
// console.log(getResult(1, 2));
// console.log(getResult(1, 2, 3, '4'));

// ----------------------------------------------------------------------------

// 18. Задача
// Написать функцию, которая склеивает переданные 2 строки через пробел.

// let strOne = 'Goog';
// let strTwo = 'evening';
// function glueTogetherStrings(str1, str2) {
//   return `${str1} ${str2}`
// }
// console.log(glueTogetherStrings(strOne, strTwo));
// ----------------------------------------------------------------------------

// 19. Задача
// Написать функию, которая вычисляет площадь окружности. На вход одно число - радиус окружности.

// function calcAreaCircle(num) {
//   return parseInt(Math.PI * num)
//   // return parseFloat(Math.PI * num)
// }
// console.log(calcAreaCircle(20));
// ----------------------------------------------------------------------------

// 20. Задача
// Написать функцию, которая выводит столбик(от 1 до 10 включительно) из таблицы умножения на то число, которое подали на вход в функцию.

// function getmultiplicationTable(num) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${i} x ${num} = ${i * num}`);
//   }
// }

// getmultiplicationTable(5);
// getmultiplicationTable(6);
// getmultiplicationTable(7);
// ----------------------------------------------------------------------------

// 21. Задача
// Напишите функцию, которая принимает 2 параметра: длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то функция вычисляет площадь квадрата.

// function calcSquare(length, width = length) {
//   return length * width
// }

// // console.log(calcSquare(10, 20));
// console.log(calcSquare(10));

// ----------------------------------------------------------------------------

// 22. Задача
// Написать функцию, которой передаём, имя, фамилия и возраст. Функция выводит в консоль, например: Ты Иван Петров с возрастом 17 лет..

// function showUserInfo(name, lastname, age) {
//   console.log(`Ты ${name} ${lastname} с возрастом ${age} лет.`);
// }
// showUserInfo('Elon', 'Musk', 55);

// ----------------------------------------------------------------------------

// 23. Задача
// Написать функцию, которая принимает пол человека('M', 'F') в виде строки.

// Функции возвращает строку: Ваш пол мужской если ввели M.
// Функции возвращает строку: Ваш пол женский если ввели F.
// Если ничего не передано или передана любая другая строка, то вывести: Ваш пол не опеределен
// Функция должна работать с любым регистром.

function getGenderPerson(gender) {
  if (gender.toLowerCase() === 'm') {
    return 'Ваш пол мужской'
  }
  if (gender.toLowerCase() === 'f') {
    return 'Ваш пол женский'
  }
  return 'Ваш пол не определен'
}


// ! TODO:
// function checkGenderPerson(params) {
//   switch
// }

// console.log(genderPerson('M'));
// console.log(genderPerson('F'));
// console.log(genderPerson(''));


// Функции с массивами
// ----------------------------------------------------------------------------

// 24. Задача
// Написать функцию, на вход которой подаётся массив, функция возвращает среднее арифметическое чисел.

// const myArray = [10, 20, 30, 40, 50, 60, 70];

// function arithmeticMean(newArr) {
//   let sum = 0;
//   for (const el of newArr) {
//     sum += el
//   }
//   return sum / newArr.length
// }

// console.log(arithmeticMean(myArray));

// ----------------------------------------------------------------------------

// 25. Задача
// Написать функцию, которая принимает массив. Функция возвращает одно число – количество чётных чисел.

// ---------- for ------------ //
// const myArray = [1, 12, 40, 55, 88, 62, 22, 100, 10]

// function quantityEvenNumbers(newArr) {
//   let count = 0;
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] % 2 === 0) {
//       count++
//     }
//   }
//   return count
// }
// quantityEvenNumbers(myArray);


// ---------- for of ------------ //
// const myArray = [1, 12, 40, 55, 88, 62, 22, 100, 10, 44]

// function quantityEvenNumbers(newArr) {
//   let count = 0;
//   for (const el of newArr) {
//     el % 2 === 0 && count++
//   }
//   return count
// }
// console.log(quantityEvenNumbers(myArray));

// ----------------------------------------------------------------------------

// 26. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция заменяет все чётные числа на строку even.

// -------------- for -------------- //
// const myArray2 = [1, 12, 40, 55, 88, 62, 22, 100, 10, 44]

// function changesNumbersEvenToOdd(newArr) {
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] % 2 === 0) {
//       newArr[i] = 'even'
//     }
//   }
// }
// changesNumbersEvenToOdd(myArray2)
// console.log(myArray2);


// -------------- for and Логическое && -------------- //

// const myArray = [1, 12, 40, 55, 88, 62, 22, 33, 100]
// function changesNumbersEvenToOdd(newArr) {
//   for (let i = 0; i < newArr.length; i++) {
//     newArr[i] % 2 === 0 && (newArr[i] = 'even')
//   }
// }
// changesNumbersEvenToOdd(myArray)
// console.log(myArray);
// ----------------------------------------------------------------------------

// 27. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция заменяет все отрицательные числа на положительные.

// -------------- for -------------- //

// const myArray = [-1, 12, -40, 55, 88, -62, 22, 33, -100]

// function checkNegativeToPositive(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       arr[i] = -arr[i]
//     }
//   }
// }
// checkNegativeToPositive(myArray)
// console.log(myArray);

// -------------- for and Логическое && -------------- //

// const myArray = [-1, 12, -40, 55, 88, -62, 22, 33, -100]

// function checkNegativeToPositive(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] < 0 && (arr[i] = -arr[i])
//   }
// }
// checkNegativeToPositive(myArray)
// console.log(myArray);
// ----------------------------------------------------------------------------

// 28. Задача
// Написать функцию, на вход которой подаётся массив из чисел, функция возвращает новый массив из чисел, которые делятся на 7.

// const myArray = [2, 4, 76, 98, 65, 55, 9, 21, 45, 70];

// function numbersShareOnSeven(arr) {
//   const newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 7 === 0) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }
// console.log(numbersShareOnSeven(myArray));


// ============= for of === && ======================== //
// const myArray = [2, 4, 76, 98, 65, 55, 9, 21, 45, 70, 49];

// function numbersShareOnSeven(arr) {
//   const newArr = [];
//   for (const el of arr) {
//     (el % 7 === 0) && newArr.push(el)
//   }
//   return newArr
// }
// console.log(numbersShareOnSeven(myArray));


// ----------------------------------------------------------------------------

// 29. Задача
// Написать функцию, на вход которой подаётся массив из строк, функция возвращает новый массив из строк, чья длина больше 3 символов.


// const myArray = ['airport', 'hall', 'on', 'transfer', 'in', 'landing', 'souvenir',];

// function checkStringMoreThreeSimbol(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > 3) {
//       newArr.push(arr[i].length)
//     }
//   }
//   return newArr
// }
// console.log(checkStringMoreThreeSimbol(myArray));


// TODO: for of
// const myArray = ['airport', 'hall', 'on', 'transfer', 'in', 'landing', 'souvenir',];

// function checkStringMoreThreeSimbol(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].length > 3 && newArr.push(arr[i].length)
//   }
//   return newArr
// }
// console.log(checkStringMoreThreeSimbol(myArray));

// ----------------------------------------------------------------------------

// 30. Задача
// Написать функцию, на вход которой подаётся массив из чисел, функция изменяет текущий массив, заменяя каждый второй элемент массива на строку = x2 =.

//               0    1   2   3   4   5   6   7   8   9
// const myArray = [23, 45, 74, 99, 73, 91, 44, 90, 65, 20];

// function changeEveryTwoElement(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if ((i + 1) % 2 === 0) {
//       arr[i] = '= x2 ='
//     }
//   }
// }
// changeEveryTwoElement(myArray);
// console.log(myArray);

// ================= && ============================== //

// const myArray = [23, 45, 74, 99, 73, 91, 44, 90, 65, 20];

// function changeEveryTwoElement(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     (i + 1) % 2 === 0 && (arr[i] = '= x2 =')
//   }
// }
// changeEveryTwoElement(myArray);
// console.log(myArray);

// ----------------------------------------------------------------------------

// 31. Задача
// Написать функцию, на вход которой подаётся массив из строк, функция изменяет текущий массив, заменяя каждый третий элемент массива на строку число - количество символов в элементе.

//                   0               1                2              3        4
// const cityList = ['Vladivostok', 'Novosibirsk', 'Nizhnevartovsk', 'London', 'Pekin', 'Sidney', 'Amsterdam']

// function changeEveryThirdElementToString(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if ((i + 1) % 3 === 0) {
//       arr[i] = String(arr[i].length)
//     }
//   }
// }
// changeEveryThirdElementToString(cityList)
// console.log(cityList);


// const cityList = ['Vladivostok', 'Novosibirsk', 'Nizhnevartovsk', 'London', 'Pekin', 'Sidney', 'Amsterdam']

// function changeEveryThirdElementToLength(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     (i + 1) % 3 === 0 && (arr[i] = `${arr[i].length}`)
//   }
// }
// changeEveryThirdElementToLength(cityList)
// console.log(cityList);

// ----------------------------------------------------------------------------

// 32. Задача
// Написать функцию, на вход которой подаётся массив, функция удаляет первый и последний элементы из массива.

// const myArray = [23, 45, 74, 99, 73, 91, 44, 90, 65, 20];

// function deleteFirstAndLastElement(arr) {
//   arr.pop();
//   arr.shift()
// }
// deleteFirstAndLastElement(myArray)
// console.log(myArray);


// ----------------------------------------------------------------------------

// 33. Задача
// Написать функцию, на вход которой подаётся 2 массива, функция добавляет к первому массиву все значения из второго.

// const myArray1 = [23, 45, 74, 99, 73, 91, 44];
// const myArray2 = [48, 99, 85, 22, 'mercedes'];

// function addElementsToFirstArray(arr1, arr2) {
//   for (const el of arr2) {
//     arr1.push(el)
//   }
// }

// addElementsToFirstArray(myArray1, myArray2)
// console.log(myArray1);
// ----------------------------------------------------------------------------

// 34. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// function test(x, y) {
//   return x + y;
// }

// console.log(test(3, 4, 5, 7));
// Программа сложит первый и второй параметры. Трей и четвертый, будут проигнорированы.
// ----------------------------------------------------------------------------

// 35. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// function test(x, y) {
//   return x + y;
// }

// console.log(test(3));
// NaN. Т.к параметра два а аргумент - один. y = undefined. undefined приводится к NaN. Соответственно в  console.log, мы увидим NaN.
// ----------------------------------------------------------------------------

// 36. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// function test(x, y) {
//   console.log(x + y);
// }

// console.log(test(3, 7)); // 10

// ----------------------------------------------------------------------------

// 37. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// console.log(test(3, 7)); // 10
// console.log(test(true, 1)); // 2
// console.log(test('1', 0)); // '10'

// function test(x, y) {
//   return x + y;
// }

// ----------------------------------------------------------------------------

// 38. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// function test(x, y) {
//   return x * y;
// }

// console.log(typeof test('3', '7')); // 21 10
// console.log(typeof test(false, 1)); // 0 2
// console.log(typeof test('1', 0)); // 0 10
// console.log(typeof test('1', 'true')); // NaN (Мы умножаем число на строку) NaN


// ----------------------------------------------------------------------------

// 39. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// function test(x = 1, y = 1) {
//   return x * y;
// }

// console.log(test(4)); // 4 x 1 = 4
// console.log(test(null, 5)); // 0 x 5 = 0
// console.log(test(undefined, 5)); // 1 x 5 = 5
// console.log(test(undefined, undefined)); // 1 x 1 = 1
// console.log(typeof test());

// function test(x = 1, y = 1) {
//   return x * y;
// }

// console.log(test(4)); // 4 x 1 = 4
// console.log(test(null, 5)); // 0 x 5 = 0
// console.log(test(undefined, 5)); // 1 x 5 = 5
// console.log(test(undefined, undefined)); // 1 x 1 = 1

// ----------------------------------------------------------------------------

// 40. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// console.log(test(3, 2, 1)); // 3 x 2 x 1 = 6
// console.log(test(null, null, 2)); // 0 x 0 x 2 = 0
// console.log(test(undefined, undefined, 5)); // NaN
// console.log(test(undefined, undefined, undefined)); // NaN
// console.log(test(3, 2, undefined));  // 3 x 2 x 1 = 6
// console.log(test(3, 2)); // 3 x 2 x 1 = 6

// function test(x, y, z = 1) {
//   return x * y * z;
// }
// ----------------------------------------------------------------------------

// 41. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// console.log(sum(3, sum(4, 5))); // 3 + (4 + 5) = 12
// console.log(sum(sum(3, -1), 7)); // (3 + -1) + 7 = 9
// console.log(sum(sum(0, -5), sum(3, 7))); // -5 + 10 = 5
// console.log(sum(sum(3, sum(12, 5)), sum(sum(4, 8), 13))); // (3 + 17) + (12 + 13) = 45
// console.log(sum(sum(sum(5, 3), sum(7, -15)), sum(sum(10, 10), sum(-15, -5)))); // (8 + -8) + (20 + -20) = 0

// function sum(x, y) {
//   return x + y;
// }
// ----------------------------------------------------------------------------

// 42. Задача
// Написать функцию, на вход которой подаётся массив чисел. Функция возвращает одно число - наибольшее из них.

// const myArray = [23, 45, 74, 99, 73, 91, 100];

// function checkMaxNumber(arr) {
//   let maxNumber = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNumber) {
//       maxNumber = arr[i]
//     }
//   }
//   return maxNumber
// }
// console.log(checkMaxNumber(myArray));


// ================ && ================ //
// const myArray = [23, 45, 74, 99, 73, 91, 100];

// function checkMaxNumber(arr) {
//   let maxNumber = arr[0];
//   for (const el of arr) {
//     el > maxNumber && (maxNumber = el)
//   }
//   return maxNumber
// }
// console.log(checkMaxNumber(myArray));
// ----------------------------------------------------------------------------


// ★ Задачи повышенной сложности ★

// ★ 43. Задача ★
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// console.log(test(5));
// function test(x) {
//   let multi1 = 10;
//   return multi1 * x;
// }
// // console.log(multi1); // 50

// console.log(anotherTest(5));
// function anotherTest(x) {
//   var multi2 = 10;
//   return multi2 * x;
// }
// // console.log(multi2); // 50

// console.log(otherTest(5));
// function otherTest(x) {
//   const multi3 = 10;
//   return multi3 * x;
// }
// console.log(multi3); // 50
// ----------------------------------------------------------------------------

// ★ 44. Задача ★
// Написать функцию, которая вычисляет факториал числа. На вход подаётся целое число. Функция возвращает - 1, если:

// На вход подали не число;
// На вход подали отрицательное число;
// На вход подали не целое число;
// Примеры:
// 1! = 1
// 2! = 1 x 2 = 2
// 3! = 1 x 2 x 3 = 6
// 7! = 1 х 2 х 3 х 4 х 5 х 6 х 7 = 5040
// 0! = 1(Искл)
// ----------------------------------------------------------------------------

// ★★ 45. Задача ★★
// Написать функцию, которая возвращает массив с частью последовательности: 1 2 2 3 3 3 4 4 4 4 5 5 ... (число повторяется столько раз, чему оно равно)
// На вход в функцию подаётся одно неотрицательное число(целое число n) - столько элементов последовательности должно быть в возвращаемом массиве.

// Например n = 7, то программа выведет массив с числами:
// 1 2 2 3 3 3 4(т.е. 7 элементов из последовательности)

// const myArray = [5];

// function returnArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (  )
//   }
//   return arr
// }
// console.log(returnArray(myArray));

// ----------------------------------------------------------------------------

// ★★★ 46. Задача ★★★
// Написать функцию, которая принимает на вход одно число.Функция выводит таблицу рамером NxN, заполненную числами от 1 до n ** 2 вкл.по спирали, выходящей из левого верхнего угла и закрученной по часовой стрелке:

// Например: spiral(5)


// P.S.Между числами только 1 пробел, красиво делать не обязательно