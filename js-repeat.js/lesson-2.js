// 1. Задача
// Создать 3 перемнных, все разного типа данных. Вывести в консоль в одну строчку через пробел.

// let userText = 'JavaScript';
// let userNum = 20;
// let isAdmin = true;

// console.log(userText + ' ' + userNum + ' ' + isAdmin);

//-------------------------------------------------------------------------------

// 2. Задача
//Создать переменную, которая хранит имя. Вывести в консоль приветствие:
//Привет, <имя из переменной>!
//<имя из переменной>, привет!

// let userName = 'Karlos';

// console.log('Привет, ' + userName);
// console.log(userName + ',' + ' Привет');

//-------------------------------------------------------------------------------

//3. Задача
//Объяви переменные intValue, numericValue, size, number типа number. Присвой им любые разные значения. Вывести в консоль переменные через пробел, в обратном порядке их создания.


// let intValue = 'Value';
// let numbericValue = 55;
// let size = 'Large';
// let number = 100;

// console.log(number, size, numbericValue, intValue);

//-------------------------------------------------------------------------------

//4. Задача
//Создать 3 перемнных, все разного типа данных. Вывести их тип в консоль.

// let userStr = 'Winter';
// let userNum = 12;
// let hasAdmin = false;

// console.log(typeof userStr);
// console.log(typeof userNum);
// console.log(typeof hasAdmin);

//-------------------------------------------------------------------------------

//5. Задача.
//Сделать рефакторинг кода:

//vozrastPolzovatela = 10
//boolian = false;
//user__text = 'Какой-то текст";
//console.log(chiclo boolian user__text)

// let userAge = 10;
// let isAdmin = false;
// let userText = 'Какой-то текст';
// console.log(userAge, isAdmin, userText);

//-------------------------------------------------------------------------------

//6. Задача
//Сделать рефакторинг кода:

//uzerName = Валентин;
//user-money = 2000; /* Это монеты */
//areAccess = "true";

//console.log("У" + uzerName + "а" + " есть " + "user-money" + "монет")
//console.log(uzerName + "имеет" + "доступ:" + "true")


// let userName = 'Валентин';
// let userMoney = 2000;
// let hasAccess = true;


// console.log('У ' + userName + 'a есть ' + userMoney + ' монет');
// console.log(userName + ' имеет доступ: ' + true);

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


let text = '';
// text = text + "Merry";
// text = text + "Christmas\n";
// text = text + "Merry New\n";
// text = text + "New";
// text = text + "weekend\n";
debugger
text = "Happy New";
// text = text + "Merry New!";
text = text + " ";
text = text + "Year";
console.log(text);


//-------------------------------------------------------------------------------

//8. Задача
//Раскомментируй одну строчку, чтобы программа вывела в консоль числа 12 и 2 (сначала 12, а затем 2).

//Нельзя изменять строки с объявлением переменных.
//Нельзя изменять строки отвечающие за вывод в консоль.
//Нужно раскомментировать одну строку и не менять остальные.
// let x = 2;
// let y = 12;



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


//-------------------------------------------------------------------------------

//10. Задача
//Пользователь вводит с клавиатуры любое сначала число, а затем текст. Вывести в консоль в следующем виде:
//Вы ввели текст: <текст пользователя>, вы ввели число: <число пользователя>


//-------------------------------------------------------------------------------

//11. Задача
//Не выполняя код, дать ответ, что выведется в консоль: Результат записать в комментарий.

//console.log(typeof "text");//string
//console.log(typeof "1010");//string
//console.log(typeof false);//boolean
//console.log(typeof "Pavel");//string
//console.log(typeof "undefined");//string


//-------------------------------------------------------------------------------

//12. Задача
//Не выполняя код, дать ответ, что выведется в консоль: Результат записать в комментарий.

//console.log(typeof Infinity);//number
//console.log(typeof 200);//number
//console.log(typeof "");//string
//console.log(typeof "true");//string
//console.log(typeof null);// object


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
