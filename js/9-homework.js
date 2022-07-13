// Задачи по теме 9. Function

// 1. Задача
// Написать функцию, которая выводит сообщение Hello world! 5 раз.

// function outputsMessage(message) {
//   for (let i = 0; i < 5; i++) {
//     console.log(message);
//   }
// }
// userMessage('Hello World!')

// ----------------------------------------------------------------------------

// 2. Задача
// Написать функцию, на вход которой подаётся переменная, функция возвращает название типа данных.

// function userVariable(variable) {
//   return typeof variable;
// }

// console.log(userVariable('654'));

// ----------------------------------------------------------------------------

// 3. Задача
// Написать функцию, которая проверяет, является ли переменная типом string

// function chekString(string) {
//   return typeof string === 'string'
// }
// console.log(chekString(765));


// ----------------------------------------------------------------------------

// 4. Задача
// Написать функцию, которая проверяет, является ли переменная типом null

// function chekNull(variable) {
//   return variable === null
// }
// console.log(chekNull(null));

// ----------------------------------------------------------------------------

// 5. Задача
// Написать функцию, на вход которой подаётся 2 переменных, функция проверяет является ли первая переменная типом number, а вторая - string. (Т.е.функция возвращает true или false)

// function chekVariables(numb, str) {
//   return typeof numb === 'number' && typeof str === 'string';
//   // if (typeof numb === 'number') {
//   //   if (typeof str === 'string')
//   //     return true
//   // } else {
//   //   return false
//   // }
// }
// console.log(userVariables(25, 'summer'));
// console.log(userVariables('summer', 25));
// console.log(userVariables(25, null));
// console.log(userVariables(25, true));
// console.log(userVariables(false, 'text'));

// ----------------------------------------------------------------------------

// FIXME: 6. Задача
// Написать функцию, на вход которой подаётся 2 числа, если эти числа равны 15, то возвращается true иначе false.

// function compareNumbers(num1, num2) {
//   return num1 === 15 && num2 === 15
// }
// console.log(compareNumbers(15, 15));
// console.log(compareNumbers(25, 15));
// ----------------------------------------------------------------------------

// FIXME: 7. Задача
// Написать функцию, на вход которой подаётся 2 числа, если первое число равно 5, а второе 3, то возвращается true иначе false

// function compareNumbers(num1, num2) {
//   return num1 === 5 && num2 === 3
// }
// console.log(compareNumbers(5, 3));
// console.log(compareNumbers(55, 3));
// ----------------------------------------------------------------------------

// 8. FIXME: Задача
// Написать функцию, которое проверяет равно ли переданное число 10.

// function checkTenNumber(number) {
//   return number === 10
// }
// console.log(checkTenNumber(10));
// console.log(checkTenNumber(20));
// ----------------------------------------------------------------------------

// 9. FIXME: Задача
// Написать функцию, которая проверяет переданное число на чётность.

// function isEven(number) {
//   return number % 2 === 0
// }
// console.log(isEven(20));
// console.log(isEven(15));

// ----------------------------------------------------------------------------

// FIXME: 10. Задача
// Написать функцию, которая проверяет переданное число на то, делится ли оно на 10 или нет.

// function checkDevideTen(number) {
//   return (number % 10 === 0) ? 'Число делится' : 'Число не делится'
// }
// console.log(checkDevideTen(10));
// console.log(checkDevideTen(22));


// ----------------------------------------------------------------------------

// FIXME: 11. Задача
// Написать функцию, которая проверяет переданное число на крастность 17.

// function chekNumber(number) {
//   return number % 17 === 0
// }
// console.log(chekNumber(17));
// console.log(chekNumber(19));
// ----------------------------------------------------------------------------

// 12. Задача
// Написать функцию, на вход которой подаётся 2 числа, функция проверяет равны ли эти числа.

// function chekNumbers(num1, num2) {
//   return num1 === num2
// }
// console.log(chekNumbers(10, 10));
// console.log(chekNumbers(20, 10));
// ----------------------------------------------------------------------------

// *** 13. Задача
// Написать функцию, на вход которой подаётся 2 или 3 или 4 перемнных, функция возвращает true / false, в зависимости от того являются ли все переменные типом string.

// function chekAllVariablesString(let1, let2, let3 = '', let4 = '') {
//   typeof let1, typeof let2, typeof let3, typeof let4 === 'string'
//   return typeof let1 === 'string' &&
//     typeof let2 === 'string' &&
//     typeof let3 === 'string' &&
//     typeof let4 === 'string'

// }
// console.log(chekAllVariablesString('day', 'toy', 'rain', 'snow'));
// console.log(chekAllVariablesString('day', 'toy', 'rain', 867));
// console.log(chekAllVariablesString('day', 'toy', 'rain'));
// console.log(chekAllVariablesString('day', 'toy', false));
// console.log(chekAllVariablesString('day', 'toy'));
// console.log(chekAllVariablesString('day', 312));

// ----------------------------------------------------------------------------

// FIXME: 14. Задача
// Написать функцию, на вход которой подаётся число, функция возвращает текст: Делится на 5, если переданное число делится на 5. Иначе возвращает: Не делится.

// function toReturnText(number) {
//   return (number % 5 === 0) ? 'Делится на 5' : 'Не делится'
// }
// console.log(toReturnText(5));
// console.log(toReturnText(51));

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
// Написать функцию, которая складывает 2 или 3 числа, возвращает результат.Учесть, что пользователь может подать на вход не число. Вывести в этом случе: error.
// function sumThreenumbers(let1, let2, let3 = 0) {
//   if (typeof let1 === 'number' &&
//     typeof let2 === 'number' &&
//     typeof let3 === 'number') {
//     return let1 + let2 + let3
//   } else {
//     return 'error'
//   }
// }

// console.log(sumThreenumbers(1, 2, 3));
// ----------------------------------------------------------------------------

// 17. Задача
// Написать функцию, которая перемножает 2, 3 или 4 числа, возвращает результат.Учесть, что пользователь может подать на вход не число.Вывести в этом случе: error.
// ----------------------------------------------------------------------------

// 18. Задача
// Написать функцию, которая склеивает переданные 2 строки через пробел.
// function glueTogetherTwoStrings(string1, string2) {
//   // string1 = a; string2 = b
//   return string1 + ' ' + string2
// }


// console.log(glueTogetherTwoStrings('Java ' + 'Script'));



// let a = 'Java';
// let b = 'Script';
// console.log(glueTogetherTwoStrings(a, b));

// let test = 'tree';
// let word = 'sentence';
// console.log(glueTogetherTwoStrings(test, word));

// console.log(word, a, b);

// ----------------------------------------------------------------------------

// 19. Задача
// Написать функию, которая вычисляет площадь окружности. На вход одно число - радиус окружности.
// function calcSquareCircle(radius) {
//   return Math.PI * radius ** 2
// }
// console.log(calcSquareCircle(20));
// ----------------------------------------------------------------------------

// 20. Задача
// Написать функцию, которая выводит столбик(от 1 до 10 включительно) из таблицы умножения на то число, которое подали на вход в функцию.

// function multiplyNumber(number) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${i} x ${number} = ${i * number}`);
//   }
// }
// multiplyNumber(7);

// ----------------------------------------------------------------------------

// 21. Задача
// Напишите функцию, которая принимает 2 параметра: длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то функция вычисляет площадь квадрата.


// function calcSquareRectangle(length, width) {
//   let square = null;
//   if (square = length * width) {
//     return 'Площадь прямоугольника = ' + squareRectangle;
//   } else {
//     return 'Площадь квадрата = ' + length ** 2;
//   }
// }

// function calcSquareRectangle(length, width = length) {
//   return length * width
// }

// console.log(calcSquareRectangle(10, 20));
// console.log(calcSquareRectangle(10));


// ----------------------------------------------------------------------------

// 22. Задача
// Написать функцию, которой передаём, имя, фамилия и возраст. Функция выводит в консоль, например: Ты Иван Петров с возрастом 17 лет..

// function nameSurnameAge(name, surname, age) {
//   console.log(`Ты ${name} ${surname} с возрастом ${age} лет.`);
// }
// nameSurnameAge('Martin', 'Scorsese', 80);
// ----------------------------------------------------------------------------

// 23. Задача
// Написать функцию, которая принимает пол человека('M', 'F') в виде строки.

// Функции возвращает строку: Ваш пол мужской если ввели M.
// Функции возвращает строку: Ваш пол женский если ввели F.
// Если ничего не передано или передана любая другая строка, то вывести: Ваш пол не опеределен
// Функция должна работать с любым регистром.

// function checkGenderPerson(gender) {
//   if (gender.toLowerCase() === 'm') {
//     return 'Ваш пол мужской'
//   } else if (gender.toLowerCase() === 'f') {
//     return 'Ваш пол женский'
//   } else {
//     return 'Ваш пол не определен'
//   }
// }

// console.log(checkGenderPerson('M'));
// console.log(checkGenderPerson('m'));
// console.log(checkGenderPerson('f'));
// console.log(checkGenderPerson('F'));
// console.log(checkGenderPerson(''));
// console.log(checkGenderPerson('male'));
// console.log(checkGenderPerson('Male', 'Feminine'));

// Функции с массивами
// ----------------------------------------------------------------------------

// 24. Задача
// Написать функцию, на вход которой подаётся массив, функция возвращает среднее арифметическое чисел.

// function calcArifmeticMean(myArray) {
//   let sum = 0;
//   // for (let i = 0; i < myArray.length; i++) {
//   //   arifmeticMeanNumbers += arr[i]
//   // }
//   for (const el of myArray) {
//     // element = myArray[i] // Под капотом
//     // debugger
//     sum += el
//   }
//   return sum / myArray.length
// }

// for of
// arr[i] === element


// (10 + 10 + 10) / 3
// 10 / 3 + 10 / 3 + 10 / 3
// 10 / 0 + 10 / 1 + 10 / 2


// const arr = [10, 10, 10, 10, 10];
// console.log(calcArifmeticMean(arr));


// ----------------------------------------------------------------------------

// 25. Задача
// Написать функцию, которая принимает массив. Функция возвращает одно число – количество чётных чисел.

// const myArray = [10, 25, 33, 40, 60, 8, 12, 9, 45, 6];
// function countEvenNumbers(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       count++
//     }
//   }
//   return count
// }
// console.log(countEvenNumbers(myArray));

// ----------------------------------------------------------------------------

// 26. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция заменяет все чётные числа на строку even.

// const myArray = [10, 20, 55, 87, 88, 22, 15, 98, 99, 75, 63, 44];
// function changeEvenToString(arr) {
//   // let arr = myArray
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       arr[i] = 'even'
//     }
//   }
// }
// changeEvenToString(myArray);
// console.log(myArray);

// ----------------------------------------------------------------------------

// 27. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция заменяет все отрицательные числа на положительные.

// const myArray = [10, -20, 55, 87, -88, 22, 15, -98, 99, 75, -63, 44];

// function changeNegToPosNumbers(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       arr[i] = -arr[i]
//     }
//   }
// }

// changeNegToPosNumbers(myArray);
// console.log(myArray);
// ----------------------------------------------------------------------------

// 28. Задача
// Написать функцию, на вход которой подаётся массив из чисел, функция возвращает новый массив из чисел, которые делятся на 7.

// const myArray = [10, 28, 21, 87, -88, 22, 14, 98, 42, 75, -63, 35];

// function shareToSeven(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 7 === 0) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }

// console.log(shareToSeven(myArray));
// ----------------------------------------------------------------------------

// 29. Задача
// Написать функцию, на вход которой подаётся массив из строк, функция возвращает новый массив из строк, чья длина больше 3 символов.

// const myArray = ['hotel', 'to', 'pen', 'tv', 'city', 'windows', '', 'on'];

// function returnsMoreThreeSimbol(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > 3) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr
// }
// console.log(myArray);
// console.log(returnsMoreThreeSimbol(myArray));
// ----------------------------------------------------------------------------

// FIXME: 30. Задача
// Написать функцию, на вход которой подаётся массив из чисел, функция изменяет текущий массив, заменяя каждый второй элемент массива на строку = x2 =.

// const myArray = [10, 28, 21, 87, -88, 22, 14, 98, 42, 75, -63, 35];

// function changeEveryTwoElements(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if ((i + 1) % 2 === 0) {
//       arr[i] = '= x2 ='
//     }
//   }
//   return arr
// }
// console.log(changeEveryTwoElements(myArray));
// ----------------------------------------------------------------------------

// 31. Задача
// Написать функцию, на вход которой подаётся массив из строк, функция изменяет текущий массив, заменяя каждый третий элемент массива на строку число - количество символов в элементе.

// const myArray = ['day', 'car', 'note', 'cherry', 'juice', 'board', 'street', 'cake'];

// function changeArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     // if ((i + 1) % 3 === 0) {
//     //   arr[i] = `${(arr[i].length)}`
//     // }

//     (i + 1) % 3 === 0 && (arr[i] = `${(arr[i].length)}`)
//   }
// }
// changeArray(myArray);
// console.log(myArray);

// ----------------------------------------------------------------------------

// FIXME: 32. Задача
// Написать функцию, на вход которой подаётся массив, функция удаляет первый и последний элементы из массива.

// const myArray = [10, 28, 21, 87, 22, 14, 98, 42, 75, 35];

// function delFirstLastElements(arr) {
//   arr.shift();
//   arr.pop()
//   return arr
// }
// console.log(delFirstLastElements(myArray));
// ----------------------------------------------------------------------------

// FIXME: 33. Задача
// Написать функцию, на вход которой подаётся 2 массива, функция добавляет к первому массиву все значения из второго.

// const firstArray = [10, 28, 21, 87, 22, 14, 98, 42, 75, 35];
// const secondArray = [58, -12, 87, 22, 94, 108, -75, 'happy'];

// function addToFirstArrayValues(arr1, arr2) {
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] === arr2[i]) {
//       arr1.push(arr2[i])
//     }
//   }
//   return arr1
// }
// console.log(addToFirstArrayValues(firstArray, secondArray));
// ----------------------------------------------------------------------------

// 34. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// function test(x, y) {
//   return x + y;
// }

// console.log(test(3, 4, 5, 7));
// Программа сложит первый и второй параметры. Трей и четвертый, будут проигнорированы.
//


// 34.5
// Написать функцию, которая принимает на вход то ли 1, то ли 10, то ли 100 параметров (неизвестное количество параметров)
// Посчиатть сумму всех чисел

// function sum() {
//   // console.log(arguments);
//   // Его сейчас заменяет полностью Rest Operator

//   let sum = 0;
//   for (const el of arguments) {
//     sum += el;
//   }
//   return sum
// }

// console.log(sum(5, 6, 7, 2, 1));
// console.log(3, 4, 5, 6, 57, 58, 768, 67);

//----------------------------------------------------------------------------

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

// console.log(test('3', '7')); // 21
// console.log(test(false, 1)); // 0
// console.log(test('1', 0)); // 0
// console.log(test('1', 'true')); // NaN (Мы умножаем число на строку)
// ----------------------------------------------------------------------------

// 39. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// function test(x = 1, y = 1) {
//   return x * y;
// }

// console.log(test(4)); // 4 x 1 = 4
// console.log(test(null, 5)); // 0 x 5 = 0
// console.log(test(undefined, 5)); // 1 x 5 = 1
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

// const myArray = [10, 28, 221, 87, 22, 14, 98, 42, 75, 9];

// function returnsLargNumber(arr) {
//   let maxNumber = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNumber) {
//       maxNumber = arr[i]
//     }
//   }
//   return maxNumber
// }
// console.log(returnsLargNumber(myArray));
// ----------------------------------------------------------------------------


// ★ Задачи повышенной сложности ★

// ★ 43. Задача ★
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// Hoisting (всплытие)
// Область видимости let, const: блочная (от скобки фигурной до скобки)
// Область видимости var: функциональная (от скобки фигурной до скобки только внутри функции, в остальных случаях всегда доступны)

// console.log(test(5));
// function test(x) {
//   let multi1 = 10;
//   return multi1 * x;
// }
// console.log(multi1); // 50

// console.log(anotherTest(5));
// function anotherTest(x) {
//   var multi2 = 10;
//   return multi2 * x;
// }
// console.log(multi2); // 50

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

//★★ 45. Задача ★★
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

//★★★ 46. Задача ★★★
// Написать функцию, которая принимает на вход одно число.Функция выводит таблицу рамером NxN, заполненную числами от 1 до n ** 2 вкл.по спирали, выходящей из левого верхнего угла и закрученной по часовой стрелке:

// Например: spiral(5)

// 1 2 3 4 5
// 16 17 18 19 6
// 15 24 25 20 7
// 14 23 22 21 8
// 13 12 11 10 9
// P.S.Между числами только 1 пробел, красиво делать не обязательно