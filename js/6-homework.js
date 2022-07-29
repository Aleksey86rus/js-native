// Задачи по теме 6. Condition

// 1. Задача
// Запросить у пользователя число. Если оно равно 108, то вывести в консоль: "Ом".

// let userNumber = Number(prompt('Write your number'));
// if (userNumber === 108) {
//   console.log('Ом');
// }
// console.log(userNumber);

// -----------------------------------------------------------------------------------

// 2. Задача
// Запросить у пользователя 2 числа. Вывести в консоль наименьшее число. Если числа одинаковые, то вывести любое из этих чисел.


// let userNum1 = Number(prompt('Write your Number 1'));
// let userNum2 = Number(prompt('Write your Number 2'));

// if (userNum1 <= userNum2) {
//   console.log(userNum1);
// } else {
//   console.log(userNum2);
// }

// -----------------------------------------------------------------------------------

// 3. Задача
// Запросить одно число, проверить на чётность. Если число чётное, то вывести true, иначе false.

// let userNum = Number(prompt('Write your number'));
// if (userNum % 2 === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// -----------------------------------------------------------------------------------

// 4. Задача
// Запросить у пользователя число. Если оно чётное или делится на 7, то вывести в терминал: okey, иначе: error.

// let userNum = Number(prompt('Write your number'));
// if (userNum % 2 === 0) {
//   console.log('okey');
// } else if (userNum % 7 === 0) {
//   console.log('okey');
// } else {
//   console.log('error');
// }

// if (userNum % 2 === 0 || userNum % 7 === 0) {
//   console.log('okey');
// } else {
//   console.log('error');
// }

// -----------------------------------------------------------------------------------

// 5. Задача
// Запросить 1 число и 1 строку. Если число чётное, то к строке добавить =even=. Иначе добавить к строке =odd=.

// let userNum = Number(prompt('Write your number'));
// let userText = (prompt('Write your text'));
// if (userNum % 2 === 0) {
//   console.log(userNum + ' ' + userText + ' =even=');
// } else {
//   console.log(`${userNum} ${userText} =odd=`);
// }
// -----------------------------------------------------------------------------------

//? 6. Задача
// Запросить 2 числа, проверить на чётность первое число, а второе - делится ли на 3.

// Если оба числа удовлетворяют условиям, то вывести: plus plus.
// Если хотя бы одно число удовлетворяет условиям, то: plus.
// Если ни одно не удовлетворяет, то: minus.

// let userNum1 = Number(prompt('Write your number 1'));
// let userNum2 = Number(prompt('Write your number 2'));
// if (userNum1 % 2 === 0 && userNum2 % 3 === 0) {
//   console.log('plus plus');
// } else if (userNum1 % 2 === 0 || userNum2 % 3 === 0) {
//   console.log('plus');
// } else {
//   console.log('minus');
// }

// -----------------------------------------------------------------------------------

// 7. Задача
// Запросить имя и возраст. Если возраст больше 18, то вывести: Добро пожаловать, <имя>!. Иначе вывести: <имя>, ваш возраст - <возраст>, вам доступ запрещён!.

// let userName = prompt('Write your name');
// let userAge = prompt('Write your age');

// if (userAge >= 18) {
//   // console.log('Добро пожаловать! ' + userName);
//   console.log(`Добро пожаловать, ${userName}`);
// } else if (userAge < 18) {
//   // console.log(userName + ' Ваш возраст ' + userAge + ', вам доступ запрещен!');
//   console.log(`${userName} Ваш возраст ${userAge}, вам доступ запрещен!`);
// }
// -----------------------------------------------------------------------------------

/* 8. Задача
Создать 2 переменные, присвоить им значения: на улице холодно и на улице тепло соответственно. Запросить у пользователя с клавиатуры температуру на улице. Если температура выше 0, вывести надпись: на улице тепло, в противном случае вывести надпись: на улице холодно. */

// let coldly = 'На улице холодно';
// let warm = 'На улице тепло';

// let userTemp = prompt('What temp now in street?');
// if (userTemp >= 0) {
//   console.log('На улице тепло');
// } else {
//   console.log('На улице холодно');
// }

// -----------------------------------------------------------------------------------

// 9. Задача
// Пользователя просят ввести число.

// Если это число от 0 до 10, то выводим: thin;
// Если же это число от 10 до 20 вкл, то выводим: medium;
// Если же это число от 21 до 50 не вкл, то выводим: extra; В противном случае ничего не делаем.

// let userNumber = Number(prompt('Write your number'));
// if (userNumber >= 0 && userNumber < 10) {
//   console.log('thin');
// } else if (userNumber >= 10 && userNumber <= 20) {
//   console.log('medium');
// } else if (userNumber >= 21 && userNumber < 50) {
//   console.log('extra');
// }
// -----------------------------------------------------------------------------------

// 10. Задача
// Пользователя просят ввести число. Если он не попал в промежуток от 10 до 21 вкл, то вывести в консоль: Luck.

// let userNum = Number(prompt('Write your number'));
// if (userNum < 10 || userNum >= 21) {
//   console.log('Luck');
// }
// -----------------------------------------------------------------------------------

// 11. Задача
// Ввести с клавиатуры имя и возраст. Если возраст в пределах 18-27 включительно, то вывести надпись: ИМЯ, явитесь в военкомат, где ИМЯ - это имя, введенное ранее с клавиатуры. Если возраст не находится в указанных пределах, то ничего выводить не нужно.

// let userName = prompt('Write your Name');
// let userAge = Number(prompt('Write your age'));

// if (userAge >= 18 && userAge <= 27) {
//   console.log(`${userName}, срочно явитесь в военкомат)!`);
// }
// -----------------------------------------------------------------------------------

// 12. Задача
// Исправьте ошибки, чтобы код выполнял следующую задачу: Пользователя запрашивают возраст и программа определяет, нужно ему в школу или уже пора в институт. Но она работает неправильно. Например, пятилетнего ребенка отправляют в институт!

// let userAge = Number(prompt('Write your age'));
// if (userAge >= 7 && userAge <= 16) {
//   console.log('Пора в школу!');
// } else if (userAge >= 16 && userAge <= 25) {
//   console.log('Пора в институт');
// } else {
//   console.log('Пора работать))!');
// }
// -----------------------------------------------------------------------------------

// 13. Задача
// Исправьте ошибки, чтобы код выполнял следующую задачу: Пользователя запрашивают ввести любой текст. Если количество символов в введённом слове больше 7, то в консоль выводится текст в верхнем регистре, иначе - в нижнем регистре.

// let userText = prompt('Write your text');
// if (userText.length > 7) {
//   console.log(userText.toUpperCase());
// } else {
//   console.log(userText.toLowerCase())
// }

// -----------------------------------------------------------------------------------

// 14. Задача
// Сделать рефакторинг кода и исправьте ошибки. Пользователя просят ввести 1 число с клавиатуры.

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
// -----------------------------------------------------------------------------------

// 15. Задача
// Напиши программу, которая считывает с клавиатуры две строки и выдает сообщение о том, одинаковые ли эти строки.

// Если строки одинаковые, то программа должна вывести сообщение строки одинаковые;
// Если строки разные, то программа должна вывести сообщение строки разные;

// let userText1 = prompt('Write your text 1');
// let userText2 = prompt('Write your text 2');

// if (userText1 === userText2) {
//   console.log('Строки одинаковые');
// } else {
//   console.log('Строки разные');
// }
// ----------------------------------------------------------------------------------

// 16. Задача
// Напиши программу, которая считывает с клавиатуры две строки и выдает сообщение о том, одинаковое ли количество символов.

// Если строки одинаковые имееют одинаковое количество символов, то вывести сообщение Количество совпадает;
// Если строки имеют разное количество символов, то программа должна вывести сообщение Не совпадает;

// let userText1 = prompt('Write your text 1');
// let userText2 = prompt('Write your text 2');
// if (userText1.length === userText2.length) {
//   console.log('Количество совпадает');
// } else if (userText1.length !== userText2.length) {
//   console.log('Не совпадает');
// }
// -----------------------------------------------------------------------------------

//? 17. Задача
// Есть секретное слово для доступа к закрытой информации, но у пользователя сломалась клавиатура, и теперь невозможно набирать буквы в верхнем регистре. Напиши программу, которая будет сравнивать введенную строку со строкой из переменной secret, не учитывая регистр.
// Если введенная строка равна строке из переменной secret, программа выводит на экран сообщение доступ разрешен. В ином случае - доступ запрещен.

// let userSecret = 'SumMer';
// let userText = prompt('Write your text');
// if (userText === userSecret.toLowerCase()) {
//   console.log('access is allowed');
// } else {
//   console.log('access denied');
// }
// -------------------------------------------------------------------------------------

/* ★ Задачи повышенной сложности ★ */

/* ★ 18. Задача ★
Запросить у пользователя 3 числа. Найти наибольшее число. Если числа одинаковые, то вывести любое число. */


// ------------------------------------------------------------------------
// let userNum1 = Number(prompt('Write your number 1'));
// let userNum2 = Number(prompt('Write your number 2'));
// let userNum3 = Number(prompt('Write your number 3'));

// if (userNum1 >= userNum2) { // 5 >= 10 -- false. Условие не выполнено.
//   console.log(userNum2);    // В консоль ничего не выведется т.к условие не выполнено!
// }

// if (userNum1 >= userNum2) { // 10 >= 5 -- true. Условие выполнено.
//   console.log(userNum2);    // В консоль выведется 5 т.к условие выполнено!
// }

// if (userNum1 >= userNum2) { // 10 >= 5 -- true. Условие выполнено.
//   console.log(userNum1);    // В консоль выведется 10 т.к условие выполнено!
// }

// if (userNum1 >= userNum2) { // 5 >= 10 -- false. Условие не выполнено.
//   console.log(userNum1);    // В консоль ничего не выведется т.к условие не выполнено!
// }

// if (userNum1 >= userNum2) {
//   if (userNum1 >= userNum3) {
//     console.log(userNum1);
//   } else {
//     console.log(userNum3);
//   }
// } else {
//   if (userNum2 > userNum3) {
//     console.log(userNum2);
//   } else {
//     console.log(userNum3);
//   }
// }


// let Num1 = Number(prompt('Write your number 1'));
// let Num2 = Number(prompt('Write your number 2'));
// let Num3 = Number(prompt('Write your number 3'));
// let Num4 = Number(prompt('Write your number 4'));

// -----------------------------------------------------------------------------------

//? ★ 19. Задача ★
//Запросить у пользователя с клавиатуры число.

// Если пользователь нажал отмену, то вывести в консоль: Нажата отмена;
// Если пользователь нажал ок и это было число, то вывести его;
// Если пользователь нажал ок и это было не число, то вывести в консоль: Это не число;
// Если пользователь нажал ок с пустым текстом, то вывести в консоль: Пользователь ничего не ввёл;

// let userNum = (prompt('Write your number'));
// if (userNum === null) {
//   console.log('cancel is pressed');
// } else if (userNum === '') {
//   console.log('the user did not enter anything');
// } else if (isNaN(userNum)) {
//   console.log('it\'s not a number');
// } else {
//   console.log(Number(userNum));
// }

// -----------------------------------------------------------------------------------

// ★ 20. Задача ★
// Не выполняя код, дать ответ, что выведется в консоль и почему.

// let isAccess = true;


// if (isAccess) {
//   var test = "mp4";
// }
// if (isAccess) {
//   let anotherTest = "mkv";
// }
// console.log(test); // "mp4"
// console.log(anotherTest); // ReferenceError


// let isAccess = true;
// if (isAccess) {
//   var test = "mp4";
// }
// if (isAccess) {
//   anotherTest = "mkv";
// }
// console.log(test);
// console.log(anotherTest);

// В первом случае, мы получим значение "mp4". Так же следует изменить var на let.
// Во вотром случае программа вернет "anoverTest is not defined" т.к нам, необходимо присвоить переменной "anoverTest", значение "isAccess". В таком случае в консоли, мы увидим переменную "test = mp4" and "anoverTest = mkv".
// -----------------------------------------------------------------------------------

/* ★ 21. Задача ★
Выполнить задачу, пользуясь оператором switch.
Пользователя просят ввести 1 символ:

Если это "a", то вывести в консоль "alpha";
Если это "b", то вывести в консоль "beta";
Если это "c", то вывести в консоль "gamma";
Если это "1", то вывести в консоль "4";
Если это "2", то вывести в консоль "8";
Если это "3", то вывести в консоль "15"; Во всех остальных случаях выводим: "error"; */

// let userSymbol = prompt('Write your symbol');
// switch (userSymbol) {
//   case 'a':
//     console.log('alpha');
//     break;
//   case 'b':
//     console.log('beta');
//     break;
//   case 'c':
//     console.log('gamma');
//     break;
//   case '1':
//     console.log(Number(4));
//     break;
//   case '2':
//     console.log(Number(8));
//     break;
//   case '3':
//     console.log(Number(15));
//     break;
//   default:
//     console.log('error');
// }

// -----------------------------------------------------------------------------------

/* ★ 22. Задача ★
Решить задачи: 1, 3, 5, 9, пользуясь тернарным оператором. */


// 1. Задача
// Запросить у пользователя число. Если оно равно 108, то вывести в консоль: Ом.

// let userNumber = Number(prompt('Write your number:'));

//userNumber === 108 ? console.log('Ом') : null;
// userNumber === 108 && console.log('Ом')


//let userText = (prompt('Write your text:'));

// let s = '';
// user = (userText === '') ? 'the line is empty' : 'the line is not empty'
// console.log(user);

// ----------------------------------------------------------------------------------

// 3. Задача
// Запросить одно число, проверить на чётность. Если число чётное, то вывести true, иначе false.

// let userNumber = Number(prompt('Write your number:'));

// console.log(userNumber % 2 === 0 ? true : false);
// console.log(userNumber % 2 === 0);

// ---------------------------------------------------------------------------------

// 5. Задача
// Запросить 1 число и 1 строку. Если число чётное, то к строке добавить =even=. Иначе добавить к строке =odd=.

// let userNumber = Number(prompt('Write your number'));
// let userText = String(prompt('Write your text'));

// let numberMessage = userNumber % 2 === 0 ? userText + '=even=' : userText + '=odd=';
// console.log(numberMessage);

// --------------------------------------------------------------------

// 9. Задача
// Пользователя просят ввести число.

// Если это число от 0 до 10, то выводим: thin;
// Если же это число от 10 до 20 вкл, то выводим: medium;
// Если же это число от 21 до 50 не вкл, то выводим: extra; В противном случае ничего не делаем.


// let userNumber = Number(prompt('Write your number'));

// let message = (userNumber >= 0 && userNumber < 10) ? 'thin' : (userNumber >= 10 && userNumber <= 20) ? 'medium' : (userNumber >= 21 && userNumber < 50) ? 'extra' : null;

// console.log(message);




/* ★★ 99. Задача ★★
Запросить у пользователя 4 числа. Найти наибольшее число. Если числа одинаковые, то вывести любое число. */

// let num1 = Number(prompt('Write your number 1'));
// let num2 = Number(prompt('Write your number 2'));
// let num3 = Number(prompt('Write your number 3'));
// let num4 = Number(prompt('Write your number 4'));

// const array = [num1, num2, num3, num4]

// // console.log(Math.max(num1, num2, num3, num4));


// if (num1 > num2 && num1 > num3 && num1 > num4) {
//   console.log(num1);
// } if (num2 > num1 && num2 > num3 && num2 > num4) {
//   console.log(num2);
// } if (num3 > num1 && num3 > num2 && num3 > num4) {
//   console.log(num3);
// } if (num4 > num1 && num4 > num2 && num4 > num3) {
//   console.log(num4);
// } else {
//   console.log(100);
// }
