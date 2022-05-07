// 1. Задача
// Создать 3 перемнных, все разного типа данных. Вывести в консоль в одну строчку через пробел.

// let season = 'весна';
// let month = 5;
// let nullVar = null;

// console.log(season + " " + month + " " + nullVar);
// console.log(season, month, nullVar);


// console.log("На дворе " + season + " месяц " + month + " null");

//-------------------------------------------------------------------------------

// 2. Задача
//Создать переменную, которая хранит имя. Вывести в консоль приветствие:
//Привет, <имя из переменной>!
//  <имя из переменной>, привет!

// let userName = "Алексей";
// console.log(userName + ", Привет!");



//-------------------------------------------------------------------------------

//3. Задача
//Объяви переменные intValue, numericValue, size, number типа number. Присвой им любые разные значения. Вывести в консоль переменные через пробел, в обратном порядке их создания.

// let intValue = 20;
// let numbericValue = 100;
// let size = 50;
// let number = NaN;

// console.log(number + " " + size + " " + numbericValue + " " + intValue);

// console.log(typeof number);
// console.log(typeof size);
// console.log(typeof numbericValue);
// console.log(typeof intValue);

//-------------------------------------------------------------------------------

//4. Задача
//Создать 3 перемнных, все разного типа данных. Вывести их тип в консоль.

// let number = 20;
// let string = "JavaScript";
// let hasUserRight = true;

// console.log(typeof number); // "number"
// console.log(typeof string);
// console.log(typeof hasUserRight);

//-------------------------------------------------------------------------------

//5. Задача.
//Сделать рефакторинг кода:

//vozrastPolzovatela = 10
//boolian = false;
//user__text = 'Какой-то текст";
//console.log(chiclo boolian user__text)


// userAge = 10;
// isBoolean = false;
// userText = "Какой-то текст";
// console.log(userAge, isBoolean, userText);

//-------------------------------------------------------------------------------

//6. Задача
//Сделать рефакторинг кода:

//uzerName = Валентин;
//user-money = 2000; /* Это монеты */
//areAccess = "true";

//console.log("У" + uzerName + "а" + " есть " + "user-money" + "монет")
//console.log(uzerName + "имеет" + "доступ:" + "true")


// let userName = "Валентин";
// let userMoney = 2000;
// let hasAccess = true;

// console.log("У " + userName + "a есть " + userMoney + " монет");
// console.log(userName + " имеет доступ: " + hasAccess);

//-------------------------------------------------------------------------------

//7. Задача
//Убери комментарии с части кода, чтобы в консоль вывелась фраза:
//Happy New Year

//let text = '';
// text = text + "Merry";
// text = text + "Christmas\n";
// text = text + "Merry New\n";
// text = text + "New";
// text = text + "weekend\n";
// text = text + "Happy New";
// text = text + "Merry New!";
// text = text + " ";
// text = text + "Year";
//console.log(text);


// let text = '';
// // text = text + "Merry";
// // text = text + "Christmas\n";
// // text = text + "Merry New\n";
// // text = text + "New";
// // text = text + "weekend\n";
// text = text + "Happy New";
// // text = text + "Merry New!";
// // text = text + " ";
// text = text + " Year";
// console.log(text);

//-------------------------------------------------------------------------------

//8. Задача
//Раскомментируй одну строчку, чтобы программа вывела в консоль числа 12 и 2 (сначала 12, а затем 2).

//Нельзя изменять строки с объявлением переменных.
//Нельзя изменять строки отвечающие за вывод в консоль.
//Нужно раскомментировать одну строку и не менять остальные.
// let x = 2;
// let y = 12;

// //y = x * y;
// y = x + y;

// x = y - x;
// y = y - x;
// console.log(x);
// console.log(y);

//-------------------------------------------------------------------------------

//9. Задача
//Закомментируй ненужные строки кода, чтобы в консоль вывелась надпись: 2 плюс 3 равно 5 Примечание: комментировать строки с объявлением переменных let a и let b нельзя.

//Нельзя изменять строки с объявленными переменными let a и let b.
//Нужно закомментировать хотя бы одну строку.
//Нельзя изменять или добавлять команды, отвечающие за вывод, только комментировать.
/*let a = 3;
let b = 2;

console.log("два");
console.log(b);
console.log(" плюс ");
console.log(" минус ");
console.log(a);
console.log("три");
console.log(" равно ");
console.log(" будет ");
console.log("пять");
console.log(a + b);*/


// // 2 плюс 3 равно 5
// let a = 3;
// let b = 2;

// //console.log("два");
// console.log(b);
// console.log(" плюс ");
// //console.log(" минус ");
// console.log(a);
// //console.log("три");
// console.log(" равно ");
// //console.log(" будет ");
// //console.log("пять");
// console.log(a + b);

//-------------------------------------------------------------------------------

//10. Задача
//Пользователь вводит с клавиатуры любое сначала число, а затем текст. Вывести в консоль в следующем виде:
//Вы ввели текст: <текст пользователя>, вы ввели число: <число пользователя>

//let textUser = prompt('Введите текст');
//let numberUser = prompt('Введите число');
//console.log("Вы ввели текст: " + textUser + ", вы ввели число: " + numberUser);

//-------------------------------------------------------------------------------

//11. Задача
//Не выполняя код, дать ответ, что выведется в консоль: Результат записать в комментарий.

//console.log(typeof "text");//string
//console.log(typeof "1010");//string
//console.log(typeof false);//boolean
//console.log(typeof "Pavel");//string
//console.log(typeof "undefined");//string

//console.log(typeof -106.432);//number
//console.log(typeof "null");//string
//console.log(typeof 111);//number
//console.log(typeof true);//boolean
//console.log(typeof " ");//string

//-------------------------------------------------------------------------------

//12. Задача
//Не выполняя код, дать ответ, что выведется в консоль: Результат записать в комментарий.

//console.log(typeof Infinity);//number
//console.log(typeof 200);//number
//console.log(typeof "");//string
//console.log(typeof "true");//string
//console.log(typeof null);// object

//console.log(typeof "tester");//string
//console.log(typeof NaN);//number
//console.log(typeof false);//boolean
//console.log(typeof -Infinity);//number
//console.log(typeof undefined);//undefined

//-------------------------------------------------------------------------------

//13. ★ Задача ★
//Что выведется в консоли и почему:

//console.log(numTest); // В консоли мы увидим цифру 7 т.к переменной numTest присвоено значение - 7 ?
//var numTest = 7;
//console.log(numTest); // В консоли так же увидим значение -7 т.к оператор у нас "var" который позволяет нам использовать значение в переменно повторно?

//console.log(numberTest); //В консоли мы увидим ошибку т.к  допускается повторное объявление данной переменной?
//let numberTest = 12;
//console.log(numberTest); // Мы столкнемся с ошибкой.?

//console.log(PI); // В консоли мы увидим число 3.1415?
//const PI = 3.1415;
//console.log(PI); // А вот повторное использование const приведет нас к ошибке т.к значение можно присвоить лишь один раз?



// console.log(numTest); // undefined
// var numTest = 7;
// console.log(numTest); // 7

// console.log(numberTest); // ReferenceError
// let numberTest = 12;
// console.log(numberTest); // Код не дойдёт из-за ошибки на 237

// console.log(PI); // ReferenceError
// const PI = 3.1415;
// console.log(PI); // Код не дойдёт из-за ошибки на 241
