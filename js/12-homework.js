// Задачи по теме 12. Number - ext

// 1. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// console.log(Number("0"));  // Произоидет явное преобразование значения = "0"(тип String) в значение = 0(тип Number).
// console.log(Number("10")); // Произоидет явное преобразование значения = "10"(тип String) в значение = 10(тип Number).
// console.log(Number(""));   // Преобразование пустой строки в тип Number, даст нам на выходе значение = 0(тип Number).
// console.log(Number(null)); // Преобразование типа null в тип Number, даст нам на выходе значение = 0(тип Number).
// console.log(Number("  ")); // Преобразование не пустой строки в тип Number, даст нам на выходе значение = 0(тип Number).
// console.log(Number(true)); // Преобразование булевого значения true в тип Number, даст нам на выходе значение = 1(тип Number).
// console.log(Number("  10  ")); // Произоидет явное преобразование несмотря на пробелы, значения = "10"(тип String) в значение = 10 (тип Number).
// console.log(Number("+10")); // Произоидет явное преобразование несмотря на наличие операторов, значения = "10"(тип String) в значение = 10(тип Number).

// console.log(Number("20px")); // Наличие любого символа, всегда вернет значение NaN.
// console.log(Number(undefined)); // undefined всегда вернет NaN.
// console.log(Number(false)); // false будет явно преобраован в значение =0(тип Number)
// console.log(Number(" /10 ")); //? NaN
// console.log(Number("true")); // Строка не может быть преобразована к типу Number, поэтому вернет NaN.
// console.log(Number("00100")); // В данном преобразовании знаки расположенные в левой части значения, булут проигнориванны. Преобразуется только целое число. Получим 100(тип Number).
// console.log(Number(" ")); // Явное преобразоване пустой строки, вернет нам значение = 0(тип Number).
// console.log(Number(" -10 ")); // Преобразуется в значение = -10(тип Number) несмотря на наличие оператора "вычитание".



// =============================================================
// 2. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// console.log(parseInt("15.5px")); // 15
// console.log(parseFloat("15.5px")); // 15.5
// console.log(parseInt("")); // NaN
// console.log(parseFloat(false)); // NaN
// console.log(parseInt("true")); // NaN
// console.log(parseInt(null)); // NaN

// console.log(parseInt("0")); // 0
// console.log(parseFloat("10")); // 10
// console.log(parseInt(" ")); // NaN
// console.log(parseInt(undefined)); // NaN
// console.log(parseFloat("00200")); // 200
// console.log(parseFloat("  ")); // NaN
// =============================================================

// 3. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// console.log(isNaN("10")); // false
// console.log(isNaN("15.5px")); // true
// console.log(isNaN("15.5")); // false
// console.log(isNaN("")); // false
// console.log(isNaN(undefined)); // true
// console.log(isNaN(true)); // false
// console.log(isNaN('22px' - '1px')); // true

// console.log(isNaN(null)); // false
// console.log(isNaN(false)); // false
// console.log(isNaN(7)); // false
// console.log(isNaN(10 - '3')); // false
// console.log(isNaN("   ")); // false
// console.log(isNaN("030")); // false
// console.log(isNaN(94 + '6')); // false
// =============================================================

// 4. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// console.log(199..toFixed(2)); //? Error -> 199.00
// console.log((199).toFixed(2)); //? Error -> 199.00
// console.log(Math.floor(6.99999)); // 6
// console.log(Math.ceil(50.01)); // 51
// console.log(Math.round(99.9)); // 100
// console.log(Math.max(3, 67, -99, 30, 5)); // 67

// console.log(251.65474.toFixed(3)); // 251.655
// console.log(Math.floor(33.333)); // 33
// console.log(Math.ceil(5.5)); // 6
// console.log(Math.round(0.0000001)); //? 0

// 0.9 -> 1
// 0.5 -> 1
// 0.4 -> 0
// 0.0000005 -> 0
// 0.000001 -> 0

// console.log(Math.min(0, 437, -289, -421, 335)); // -421
// =============================================================

// 5. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// console.log((181.12534).toFixed(3)); // 181.125
// console.log(Math.floor(50.01)); // 50
// console.log(Math.ceil(0.0000001)); // 1
// console.log(Math.round(5.45)); // 6
// console.log(867.654745.toFixed(5)); // 867.65475
// console.log(Math.floor(99.9)); // 99
// console.log(Math.round(50.01)); // 50
// console.log(Math.ceil(251.45)); //? 252
// =============================================================

// 6. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// console.log(300..toFixed(2)); // 300.00
// console.log(Math.floor(251.655)); // 251
// console.log(Math.ceil(3.99999)); // 4
// console.log(Math.round(251.655)); // 252
// console.log(2351.65474.toFixed(2)); // 2351.65
// console.log(Math.ceil(99.9)); // 100
// console.log(Math.round(3.99999)); // 4
// console.log(Math.floor(0.0000001)); // 0
// =============================================================

// 7. Задача
// Написать функцию которая возвращает целое случаное число от 0 до 2 не вкл.

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min));
// }
// console.log(getRandomInt(0, 2));


// function getRandomInt() {
//   return Math.floor(Math.random() * 2);
// }
// console.log(getRandomInt());
// console.log(getRandomInt());
// console.log(getRandomInt());
// console.log(getRandomInt());
// console.log(getRandomInt());
// console.log(getRandomInt());
// console.log(getRandomInt());




// =============================================================

// FIXME: 8. Задача
// Написать функцию которая возвращает целое случаное число от 1 до 2 не вкл.
// от 2 до 3
//
// 

// function getRandomInt() {
//   return Math.floor(Math.random() * 2 + 1);
//   // [0, 1) * 3
//   // [0, 3) + 2
//   // [2, 5) -> [2, 4]
// }

// console.log(getRandomInt());
// =============================================================

// 9. Задача
// Написать функцию, на вход которой подаётся строка с размерностью(px, rem, em, cm, pt ...).Функция возвращает число, убирая размерность.


// function getOnlyInt(str) {
//   return parseInt(str)
// }
// console.log(getOnlyInt('10px'));
// console.log(getOnlyInt('10rem'));
// console.log(getOnlyInt('10em'));
// console.log(getOnlyInt('10cm'));
// console.log(getOnlyInt('10pt'));

// =============================================================

// FIXME: 10. Задача
// Написать функцию которая возвращает целое случаное число от 1 до 10 не вкл.


// function getRandomInt() {
//   return Math.floor(Math.random() * (10 - 1) + 1)
// }

// console.log(getRandomInt());


// =============================================================

// FIXME: 11. Задача
// Написать функцию которая возвращает целое случаное число от 1 до 10 вкл.

// function getRandomInt() {
//   return Math.floor(Math.random() * (10 + 1 - 1) + 1)
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(getRandomInt());
// }

// =============================================================

// 12. Задача
// Написать функцию, которая переводит метры с сантиметры. На вход в функцию подаётся строка с числом метров: 3.5m.Функция возвращает строку с количество сантиметров: 350cm.


// function getStrWithQuantityCent(str) {
//   return `${parseFloat(str) * 100}cm`
// }

// console.log(getStrWithQuantityCent('3.5m'));



// =============================================================

// 12. Задача
// Написать функцию которая возвращает целое случаное число в диапазоне от a, до b. Два числа подаются на вход в функцию.Где a < b. Если это условие не выполняется, то возвращается null.

// function getInt(numA, numB) {
//   if (numA < numB) {
//     return Math.floor(Math.random() * (numA + 1 - numB) + numB)
//   } else {
//     return null;
//   }
// }
// console.log(getInt(30, 20));


// getInt = (numA, numB) => {
//   return numA < numB ? Math.floor(Math.random()) * (numA + 1 - numB) + numB : null;
// }
// console.log(getInt(10, 20));
// console.log(getInt(30, 20));

// =============================================================

// ! FIXME: 13. Задача
// Написать функцию, на вход которой подаётся нецелое число и строка(режим округления):

// В большую сторону(more);
// В меньшую сторону(less);
// Как в математике(math); Функция возвращает округлённое число.


// function getInt(num, str) {
//   if (str === 'more') {
//     return Math.ceil(num)
//   }
//   if (str === 'less') {
//     return Math.floor(num)
//   }
//   if (str === 'Math') {
//     return (Math.round(num))
//   }
// }

// console.log(getInt(20.256, 'more'));
// console.log(getInt(20.256, 'less'));
// console.log(getInt(20.256, 'Math'));
// =============================================================

// 14. Задача
// Создать массив и заполнить его случайными числами(random) в диапазоне от 1 до 5 не вкл. Количество элементов в массиве - 10 шт. Далее выполнять задачи по очереди:

// Вывести массив в терминал в строчку;
// Посчитать количество троек и вывести в консоль;
// Затем заменить все единицы на тройки, а 4 - на единицы;
// Посчитать кол - во единиц и вывести в консоль;







console.log('``````````````');
// Вывести массив в терминал в строчку;
// Посчитать количество троек и вывести в консоль;
// Затем заменить все единицы на тройки, а 4 - на единицы;
// Посчитать кол - во единиц и вывести в консоль;
// ! TODO: + FIX random machine / not person
// const randomInt = [];
// let theNumberCounterIsThree = 0;
// let theNumberCounterIsOne = 0;
// for (let i = 0; i < 10; i++) {
//   randomInt[i] = Math.floor(Math.random() * (5 - 1) + 1);
//   if (randomInt[i] === 3) {
//     theNumberCounterIsThree++
//   }
//   if (randomInt[i] === 1) {
//     randomInt[i] = 3;
//   }
//   if (randomInt[i] === 4) {
//     randomInt[i] = 1
//     theNumberCounterIsOne++
//   }
// }
// console.log(randomInt);
// console.log(`Количество троек в массиве randomInt: ${theNumberCounterIsThree}`);
// console.log(`Количество единиц в массиве randoInt: ${theNumberCounterIsOne}`);


// =============================================================

//??? 15. Задача
// Написать функцию, которая создаёт массив из случайных чисел(random) в заданном(от a до b вкл) диапазоне и заданной длины(l) Если не передать ни один из трёх параметров, то создаётся массив из 10 элементов из случанйых чисел диапазона от 0 до 10 вкл.

// Example:
// const newRandArr = createRandomArray(5, 0, 1);
// console.log(newRandArr); // Создаёт массив из 5 элементов, заполненных только 0 и 1: [0, 1, 1, 0, 1]

// function createArray(length = 10, min = 0, max = 5) {
//   const createRandomArray = [];

//   for (let i = 0; i < length; i++) {
//     createRandomArray[i] = Math.floor(Math.random() * (max + 1 - min) + min)
//   }
//   console.log(createRandomArray);

// }
// createArray(5, 1, 5);
// createArray(5);

// let test1 = undefined;
// let test2;

// let test3 = {}
// console.dir(createArray);





// function createArrays() {
//   let newRandArr = [];
//   for (let i = 0; i < 10; i++) {
//     newRandArr[i] = Math.floor(Math.random() * 10)
//   }

//   console.log(newRandArr);
// }

// createArrays();
// =============================================================

// ★ Задачи повышенной сложности ★

// ★ 16. Задача ★
// Написать функцию: (консольная игра "угадай число"). На вход в функцию идёт несколько параметров:

// Диапазон загадываемого числа от до вкл;
// Кол - во попыток;
// Наличие подсказок: true или false;
// Перед тем, как игрок приступает к угадыванию ему сообщается в консоле:

// В каком диапазоне загадано число;
// Сколько есть попыток;
// Включены ли подсказки;
// Механика:

// Число генерируется с помощью метода Math.random();
// Пользователя запрашивают через числа prompt();
// Подсказки: Если мы не угадали число, то нам подсказывают - загаданное число больше или меньше того, что мы ввели;
// Кол - во оставшихся попыток выводить в консоль каждый раз, когда мы не угадываем число;
// После того, как мы угадали число, в консоль выводится: Победа, вы угадали число: <число> и функция прекращает работу;
// После того, как расходуются все попытки, в консоль выводится: Проигрыш, вы не угадали число: <число>;












// =========================================================================
// Заполнение пустого массива случайными числами.
// let arr = [];
// let min = 1;
// let max = 5;
// for (let i = 0; i < 10; i++) {
//   arr[i] = Math.floor(Math.random() * (max + 1 - min) + min);
// }
// console.log(arr);



// function getRandInt(min, max) {
//   let myArr = [];
//   for (let i = 0; i < 10; i++) {
//     myArr[i] = Math.floor(Math.random() * (max + 1 - min) + min);
//   }
//   return myArr;
// }
// console.log(getRandInt(1, 5));
