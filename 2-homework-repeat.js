//Задачи по теме 2. Output & Input

// 1. Задача
// Создать 3 перемнных, все разного типа данных. Вывести в консоль в одну строчку через пробел.


// let string = 'строка';
// let number = 10;
// let boolean = true;
// console.log(string, '', number, '', boolean);


//----------------------------------------------------------------------------------------------


// 2. Задача
// Создать переменную, которая хранит имя. Вывести в консоль приветствие:
// Привет, <имя из переменной>!


// let world = 'мир!';
// console.log('Привет ' + world);


//----------------------------------------------------------------------------------------------


// 3. Задача
// Объяви переменные intValue, numericValue, size, number с типом number. Присвой им любые разные значения. Вывести в консоль переменные через пробел, в обратном порядке их создания.


// let intValue = 10;
// let numericValue = 20;
// let size = 30;
// let number = 40;
// console.log(number, size, numericValue, intValue);


//----------------------------------------------------------------------------------------------


// 4. Задача
// Создать 3 перемнных, все разного типа данных. Вывести их тип в консоль.


// let string = 'строка';
// let number = 10;
// let boolean = true;

// console.log(typeof (string));
// console.log(typeof (number));
// console.log(typeof (boolean));


//----------------------------------------------------------------------------------------------


// 5. Задача.
// Сделать рефакторинг кода:

// vozrastPolzovatela = 10
// boolian = false;
// user__text = 'Какой-то текст";
// console.log(chiclo boolian user__text)


// let userAge = 10;
// let isAdmin = false;
// let userText = 'Какой-то текст';
// console.log(userAge, isAdmin, userText)


//----------------------------------------------------------------------------------------------


// 6. Задача
// Сделать рефакторинг кода:

// uzerName = Валентин;
// user-money = 2000; /* Это монеты */
// areAccess = "true";

// console.log("У" + uzerName + "а" + " есть " + "user-money" + "монет")
// console.log(uzerName + "имеет" + "доступ:" + "true")


// let uzerName = 'Валентин';
// let userMoney = 2000; /* Это монеты */
// let hasareAccess = true;

// console.log("У " + uzerName + "а есть " + userMoney + " монет")
// console.log(uzerName + " имеет" + " доступ: " + true)


//----------------------------------------------------------------------------------------------



// 7. Задача
// Убери комментарии с части кода, чтобы в консоль вывелась фраза:
// Happy New Year

// let text = '';
// // text = text + "Merry";
// // text = text + "Christmas\n";
// // text = text + "Merry New\n";
// // text = text + "New";
// // text = text + "weekend\n";
// // text = text + "Happy New";
// // text = text + "Merry New!";
// // text = text + " ";
// // text = text + "Year";
// console.log(text);


// let text = '';
// // text = text + "Merry";
// // text = text + "Christmas\n";
// // text = text + "Merry New\n";
// // text = text + "New";
// // text = text + "weekend\n";
// text = text + "Happy New";
// // text = text + "Merry New!";
// text = text + " ";
// text = text + "Year";
// console.log(text);


//----------------------------------------------------------------------------------------------


// 8. Задача
// Раскомментируй одну строчку, чтобы программа вывела в консоль числа 12 и 2 (сначала 12, а затем 2).

// Нельзя изменять строки с объявлением переменных.
// Нельзя изменять строки отвечающие за вывод в консоль.
// Нужно раскомментировать одну строку и не менять остальные.
// let x = 2;
// let y = 12;
// // y = x * y;
// // y = x + y;
// x = y - x;
// y = y - x;
// console.log(x);
// console.log(y);


// let x = 2;
// let y = 12;
// // // y = x * y;
// y = x + y;
// x = y - x;
// y = y - x;
// console.log(x);
// console.log(y);


//----------------------------------------------------------------------------------------------



// 9. Задача
// Закомментируй ненужные строки кода, чтобы в консоль вывелась надпись: 2 плюс 3 равно 5 Примечание: комментировать строки с объявлением переменных let a и let b нельзя.

// Нельзя изменять строки с объявленными переменными let a и let b.
// Нужно закомментировать хотя бы одну строку.
// Нельзя изменять или добавлять команды, отвечающие за вывод, только комментировать.
let a = 3;
let b = 2;

// //console.log("два");
// console.log(b);
// console.log(" плюс ");
// //console.log(" минус ");
// console.log(a);
// //console.log("три");
// console.log(" равно ");
// //console.log(" будет ");
// console.log("пять");
// //console.log(a + b);



//----------------------------------------------------------------------------------------------


// 10. Задача
// Пользователь вводит с клавиатуры сначала любое число, а затем текст. Вывести в консоль в следующем виде:
// Вы ввели текст: <текст пользователя>, вы ввели число: <число пользователя>


// let userText = prompt('Вы ввели текст:');
// let userNumber = Number(prompt('Вы ввели число:'));
// console.log(userText);
// console.log(userNumber);


//----------------------------------------------------------------------------------------------


// 11. Задача
// Не выполняя код, дать ответ, что выведется в консоль: Результат записать в комментарий.

// console.log(typeof "text"); // string
// console.log(typeof "1010"); // string
// console.log(typeof false); // boolean
// console.log(typeof "Pavel"); // string
// console.log(typeof "undefined"); // string

// console.log(typeof -106.432); // number
// console.log(typeof "null"); // string
// console.log(typeof 111); // number
// console.log(typeof true); // boolean
// console.log(typeof " "); // string


//----------------------------------------------------------------------------------------------


// 12. Задача
// Не выполняя код, дать ответ, что выведется в консоль: Результат записать в комментарий.

// console.log(typeof Infinity); // number
// console.log(typeof 200); // number
// console.log(typeof ""); // string
// console.log(typeof "true"); // string
// console.log(typeof null); // object

// console.log(typeof "tester"); // string
// console.log(typeof NaN); // number
// console.log(typeof false); // boolean
// console.log(typeof -Infinity); //number
// console.log(typeof undefined); //undefined


//----------------------------------------------------------------------------------------------


// ★ Задачи повышенной сложности ★

// 13. ★ Задача ★
// Что выведется в консоли и почему:

// console.log(numTest); // undefined потому что, переменной еще не присвоино значение.
// var numTest = 7;
// console.log(numTest); // 7, так переменная уже содержит значение семь.

// console.log(numberTest); // Вызовет ReferenceError так как оператор let, уже присвоил значение а повторный вывод в консоль, вызовет ошибку.
// let numberTest = 12;
// console.log(numberTest); // Выведет 12.

// console.log(PI); // Мы здесь увидим такое же поведение, как и с операторм let.
// const PI = 3.1415;
// console.log(PI); // 3.1415