// Задачи по теме 6. Condition

// 1. Задача
// Запросить у пользователя число. Если оно равно 108, то вывести в консоль: "Ом".

// let userNumber = Number(prompt('Write your number:'));

// if (userNumber === 108) {
//   console.log('Oм');
// }


// -----------------------------------------------------------------------------------

// 2. Задача
// Запросить у пользователя 2 числа. Вывести в консоль наименьшее число. Если числа одинаковые, то вывести любое из этих чисел.

// let num1 = Number(prompt('Write your number 1'));
// let num2 = Number(prompt('Write your number 2'));

// if (num1 <= num2) {
//   console.log(num1);
// } else {
//   console.log(num2);
// }

// -----------------------------------------------------------------------------------

// 3. Задача
// Запросить одно число, проверить на чётность. Если число чётное, то вывести true, иначе false.

// let isuserNumber = Number(prompt('Write your number:'));
// if (isuserNumber % 2 === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// -----------------------------------------------------------------------------------

// 4. Задача
// Запросить у пользователя число. Если оно чётное или делится на 7, то вывести в терминал: okey, иначе: error.

// let userNumber = Number(prompt('Write your number'));
// if (userNumber % 2 === 0 || userNumber % 7 === 0) {
//   console.log('okey');
// } else {
//   console.log('error');
// }

// -----------------------------------------------------------------------------------

// 5. Задача
// Запросить 1 число и 1 строку. Если число чётное, то к строке добавить =even=. Иначе добавить к строке =odd=.

// let userNumber = Number(prompt('Write your number'));
// let userText = prompt('Write your text');


// if (userNumber % 2 === 0) {
//   console.log(userText + '=even=');
// } else {
//   console.log(userText + '=odd=');
// }
// -----------------------------------------------------------------------------------

//? 6. Задача
// Запросить 2 числа, проверить на чётность первое число, а второе - делится ли на 3.

// Если оба числа удовлетворяют условиям, то вывести: plus plus.
// Если хотя бы одно число удовлетворяет условиям, то: plus.
// Если ни одно не удовлетворяет, то: minus.


// let num1 = Number(prompt('Write your number 1'));
// let num2 = Number(prompt('Write your number 2'));

// let num1 = 10;
// let num2 = 9;
// if (num1 % 2 === 0 && num2 % 3 === 0) {
//   console.log('plus plus');
// } else if (num1 % 2 === 0 || num2 % 3 === 0) {
//   console.log('plus');
// } else {
//   console.log('minus');
// }





// -----------------------------------------------------------------------------------

// 7. Задача
// Запросить имя и возраст. Если возраст больше 18, то вывести: Добро пожаловать, <имя>!. Иначе вывести: <имя>, ваш возраст - <возраст>, вам доступ запрещён!.

// let userName = (prompt('Write your name'));
// let userAge = Number(prompt('Write your age'));

// if (userAge > 18) {
//   console.log(`Добро пожаловать, ${userName}!`);
// } else {
//   console.log(`${userName}, ваш возраст - ${userAge}, вам доступ запрещен!`)
// };

// -----------------------------------------------------------------------------------

/* 8. Задача
Создать 2 переменные, присвоить им значения: на улице холодно и на улице тепло соответственно. Запросить у пользователя с клавиатуры температуру на улице. Если температура выше 0, вывести надпись: на улице тепло, в противном случае вывести надпись: на улице холодно. */

// let streetWarm = 'На улице тепло';
// let streetCool = 'На улице холодно';

// let temperatureNow = Number(prompt('Какая сейчас температура на улице?'));
// if (temperatureNow > 0) {
//   console.log(streetWarm);
// } else {
//   console.log(streetCool);
// }

// -----------------------------------------------------------------------------------

// 9. Задача
// Пользователя просят ввести число.

// Если это число от 0 до 10, то выводим: thin;
// Если же это число от 10 до 20 вкл, то выводим: medium;
// Если же это число от 21 до 50 не вкл, то выводим: extra; В противном случае ничего не делаем.

// let userNumber = Number(prompt('Write your number'));
// if (userNumber > 0 && userNumber < 10) {
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
// if (userNum < 10 || userNum > 21) {
//   console.log('Luck');
// }
// if (!(userNum >= 10 && userNum <= 21))

// -----------------------------------------------------------------------------------

// 11. Задача
// Ввести с клавиатуры имя и возраст. Если возраст в пределах 18-27 включительно, то вывести надпись: ИМЯ, явитесь в военкомат, где ИМЯ - это имя, введенное ранее с клавиатуры. Если возраст не находится в указанных пределах, то ничего выводить не нужно.

// let userName = prompt('Write your name');
// let userAge = Number(prompt('Write your age'));

// if (userAge >= 18 && userAge <= 27) {
//   console.log(`${userName}, явитесь в военкомат`);
// }

// -----------------------------------------------------------------------------------

// 12. Задача
// Исправьте ошибки, чтобы код выполнял следующую задачу: Пользователя запрашивают возраст и программа определяет, нужно ему в школу или уже пора в институт. Но она работает неправильно. Например, пятилетнего ребенка отправляют в институт!

// let age = Number(prompt());
// // if (age < 18)
// if (age >= 6 && age < 18) {
//   console.log("нужно ходить в школу");
// } else {
//   console.log("пора в институт");
// };

// let age = Number(prompt());
// if (age < 18) {
//   if (age >= 6) {
//     console.log("нужно ходить в школу");
//   } else {
//     console.log('Играй в LEGO');
//   }
// } else {
//   console.log("пора в институт");
// }



// -----------------------------------------------------------------------------------

// 13. Задача
// Исправьте ошибки, чтобы код выполнял следующую задачу: Пользователя запрашивают ввести любой текст. Если количество символов в введённом слове больше 7, то в консоль выводится текст в верхнем регистре, иначе - в нижнем регистре.

// let textUser = prompt();
// if (textUser.length > 7) {
//   console.log(textUser.toUpperCase());
// } else {
//   console.log(textUser.toLowerCase());
// };


// -----------------------------------------------------------------------------------

// 14. Задача
// Сделать рефакторинг кода и исправьте ошибки. Пользователя просят ввести 1 число с клавиатуры.

// Если это число чётное, то вывести только: even;
// Если это число делится на 7, то вывести только: multiple;
// Но если это число и чётное, и делится на 7, то вывести только: even & multiple;

// let number = Number(prompt('Write your number'));
// if (number % 7 === 0 && number % 2 === 0) {
//   console.log("even & multiple");
// } else if (number % 2 === 0) {
//   console.log("even");
// } else if (number % 7 === 0) {
//   console.log("multiple");
// }

// if (number % 2 === 0 && number % 7 !== 0) {
//   console.log("even");
// } else if (number % 7 === 0 && number % 2 !== 0) {
//   console.log("multiple");
// } else if (number % 7 === 0 && number % 2 === 0) {
//   console.log("even & multiple");
// }



// -----------------------------------------------------------------------------------

// 15. Задача
// Напиши программу, которая считывает с клавиатуры две строки и выдает сообщение о том, одинаковые ли эти строки.

// Если строки одинаковые, то программа должна вывести сообщение строки одинаковые;
// Если строки разные, то программа должна вывести сообщение строки разные;

// let userText1 = prompt('Write your message');
// let userText2 = prompt('Write your message');

// if (userText1 === userText2) {
//   console.log('Сроки одинаковые');
// } else {
//   console.log('Cтроки разные');
// }----------------------------------------------------------------------------------

// 16. Задача
// Напиши программу, которая считывает с клавиатуры две строки и выдает сообщение о том, одинаковое ли количество символов.

// Если строки одинаковые имееют одинаковое количество символов, то вывести сообщение Количество совпадает;
// Если строки имеют разное количество символов, то программа должна вывести сообщение Не совпадает;

// let userText1 = prompt('Write your text');
// let userText2 = prompt('Write your text');

// if (userText1.length === userText2.length) {
//   console.log('Количество совпадает');
// } else {
//   console.log('Не совпадает');
// }
// -----------------------------------------------------------------------------------

//? 17. Задача
// Есть секретное слово для доступа к закрытой информации, но у пользователя сломалась клавиатура, и теперь невозможно набирать буквы в верхнем регистре. Напиши программу, которая будет сравнивать введенную строку со строкой из переменной secret, не учитывая регистр.
// Если введенная строка равна строке из переменной secret, программа выводит на экран сообщение доступ разрешен. В ином случае - доступ запрещен.

// let secret = "AmIGo";
// let pass = prompt('msg');

// // (secret[0].toUpperCase() + secret[1].toLowerCase() + secret[2].toUpperCase() + secret[3].toUpperCase() + secret[4].toLowerCase())

// if (secret.toLowerCase() === pass) {
//   console.log('доступ разрешен');
// } else {
//   console.log('доступ запрещен');
// }


// -------------------------------------------------------------------------------------

/* ★ Задачи повышенной сложности ★ */

/* ★ 18. Задача ★
Запросить у пользователя 3 числа. Найти наибольшее число. Если числа одинаковые, то вывести любое число. */

// let userNum1 = Number(prompt('Write your number 1'));
// let userNum2 = Number(prompt('Write your number 2'));
// let userNum3 = Number(prompt('Write your number 3'));

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

// let userNumber = prompt('Write your number');

// if (userNumber === null) {
//   console.log('Нажата отмена');
// } else if (userNumber === "") {
//   console.log('Пользователь ничего не ввел');
// } else if (isNaN(userNumber)) {
//   console.log('Это не число');
// } else {
//   console.log(Number(userNumber));
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


// let userSimbol = prompt('Write your simbol');
// switch (userSimbol) {
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
//     console.log("4");
//     break;
//   case '2':
//     console.log("8");
//     break;
//   case '3':
//     console.log("15");
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

// userNumber === 108 ? console.log('Ом') : null;
// userNumber === 108 && console.log('Ом')

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