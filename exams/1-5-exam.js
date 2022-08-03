// 1. Задача
// Создать переменную типа boolean
// Вывести её в консоль

// let isAdmin = true;
// console.log(isAdmin);

// hasAccess


// 2. Задача
// Создать переменную, присвоить ей пустой значение

// let num = null;

// 3. Сделать рефакторинг кода

// let testNum = 10;
// let text = "It's text";
// let title;

// title = "A string!";
// console.log(title, testNum, text);



// 4*. Создать 3 переменных, все разного типа.
// Вывести в консоль строку со значениями из переменных через пробел
// Вывести в консоль название типов переменных, в обратном порядке

// let userName = 'Aleksey';
// let userAge = 41;
// let isStudent = false;

// console.log(`${userName} ${userAge} ${isStudent}`);
// console.log(typeof (isStudent), typeof (userAge), typeof (userName));

// console.log(`${typeof (isStudent)} ${typeof (userAge)} ${typeof (userName)}`);

// 5.
// Пользователя просят ввести сначала число, затем текст
// Вывести в консоль:
// "Вы ввели текст: <значение>
//  Вы ввели число: <значение>"


// let numUser = Number(prompt('Введите число:'));
// let textUser = prompt('Введите текст:');

// console.log(`Вы ввели текст: ${textUser}\nВы ввели число: ${numUser}`);

// 6.

// Не выполняя код, дать ответ, что выведется в консоль:
// Результат записать в комментарий.

//
// console.log(typeof "text"); // "string"
// console.log(typeof "1010"); // "string"
// console.log(typeof false); // "boolean"
// console.log(typeof "Pavel"); // "string"
// console.log(typeof "undefined"); // "string"

// console.log(typeof -106.432); // "number"
// console.log(typeof "null"); // "string"
// console.log(typeof 111); // "number"
// console.log(typeof true); // "boolean"
// console.log(typeof " "); // "string"

// console.log(typeof (typeof 10)); // "string"

// console.log(typeof Infinity); // "number"
// console.log(typeof 200); // "number"
// console.log(typeof ""); // "string"
// console.log(typeof "true"); // "boolean"
// console.log(typeof null); // "object"

// console.log(typeof "tester"); // "string"
// console.log(typeof NaN); // "number"
// console.log(typeof false); // "boolean"
// console.log(typeof -Infinity); // "number"
// console.log(typeof undefined) // "undefined"


// 7.
// Запросить у пользователя 2 числа
// выполнить вычитание первого числа из второго
// В подробном и красивом виде вывести в консоль


// let num1 = Number(prompt('Write your number 1'));
// let num2 = Number(prompt('Write your number 2'));

// console.log(`${num1} - ${num2} = ${num1 - num2}`);

// 8.

// делать рефакторинг кода

// let sum = 10;
// sum += 25;

// let dev = 21;
// dev /= 3;

// let count = 5;
// count--;


// 9.
// Вывести в консоль с учётом переноса строки

// ```
// "First"
//   \Second/
// 'Third'
// ```

// let textUser1 = 'First';
// let textUser2 = 'Second';
// let textUser3 = 'Third';

// console.log(`${"First"}\n\t${\Second /}\n${ 'Third'}`);

// console.log('/'');
// console.log('\'');

// console.log('"First"\n\t\\Second/\n\'Third\'');


// 17 и 21 - 4 тема


// =========== string-ext.js ======== //

1.// userStr = 'My first day';
// console.log(userStr.length);
//===============================================//

2.// console.log(userStr.toUpperCase());
2.// console.log(userStr.toLowerCase());
//===============================================//

3.// console.log('   My Text   '.trim());
//===============================================//

4.// let userStr = 'Extention'
// console.log(userStr.indexOf('o'));
//===============================================//

// let userStr1 = 'Hello';
// let userStr2 = 'world';
// let userStr3 = 'Planet';
5.// console.log(userStr3.concat(userStr2));
//===============================================//

// let userStr = 'Hello';
6.// console.log(userStr.split('', 3));
//===============================================//

// let userStr = ' Hello';
7.// console.log(userStr.repeat(3));
//===============================================//

// let userStr = 'Hello';
8.// console.log(userStr.charAt(1));
//===============================================//

// let userStr = 'Hello world';
9.// console.log(userStr.includes('Hello'));
//===============================================//

// let userStr = 'Hello world';
10.// console.log(userStr.indexOf('l'));
//===============================================//

// let userStr = 'Hello world';
11.// console.log(userStr.startsWith('Hello'));
//===============================================//

// let userStr = 'Hello world';
12.// console.log(userStr.endsWith('world'));
//===============================================//

// let userStr = 'Hello world';
13.// console.log(userStr.search('world'));
//===============================================//

// let userStr = 'Hello world';
14.// console.log(userStr.slice(5));
15.// console.log(userStr.slice(5, 9));
16.// console.log(userStr.slice(-6));
17.// console.log(userStr.slice(-6, -2));
//===============================================//

// let userStr = 'Hello world';
18.// console.log(userStr.substring(1, 5));
//===============================================//

// let userStr = 'Hello world';
19.// console.log(userStr.substr(1, 3));
//===============================================//

// let userStr = 'Hello world';
20.// console.log(userStr.replace('Hello', 'Allo'));
//===============================================//

// let userStr = 'Hello world';
21.// console.log(userStr.padStart(20, '*'));
//===============================================//

// let userStr = 'Hello world';
22.// console.log(userStr.padEnd(20, '*'));
//===============================================//

// let userStr = '  Hello world   ';
23.// console.log(userStr.trim());
//===============================================//

// let userStr = '  Hello world   ';
24.// console.log(userStr.trimEnd());
//===============================================//

//let userStr = '  Hello world   ';
25.//console.log(userStr.trimStart());
//===============================================//



