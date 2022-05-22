//Задачи по теме 5. Boolean

// 1. Задача
//Не выполняя код, дать ответ:
//Что выведется в консоль? Ответ записать в комментарий.

// console.log(100 > 59); // true. Так как, 100 больше 59.
// console.log(10 < 7); // false. так как, 7 меньше 10.


// --------------------------------------------------------------


// 2. Задача
//Не выполняя код, дать ответ:
//Что выведется в консоль? Ответ записать в комментарий.

// let num = "10"
// // // console.log(Boolean("10"));
// // console.log(typeof num === "number");///???
// console.log(typeof num == "number");


// console.log(67 == "67"); // true
// console.log(false == "0"); // true
// console.log(false === "0"); // false
// console.log('text' == 'text'); // true
// console.log('text' === 'text'); // true


// 3 == '3'

// 6 - "3" == '3'

// 6 + "3" => "63"
// 6 - "3" => 3

// 3 == '3'
// 3 == 3


// console.log(6 - "3" === '3');
// console.log(6 - "3" == '3');



// --------------------------------------------------------------


// 3. Задача
//Не выполняя код, дать ответ:
//Что выведется в консоль? Ответ записать в комментарий.

// let text = "Victor"
// console.log(typeof "Victor" === "string"); // true. Так как, строка строго равна строке.




// --------------------------------------------------------------

// 4. Задача
//Не выполняя код, дать ответ:
//Что выведется в консоль? Ответ записать в комментарий.

// let a = 20;
// let b = "20";
// console.log(a === b); // false. Так как, при строгом равенстве значения в переменных, не преобразуются как при нестрогом равенстве. То есть, а - это число, b - это срока.


// --------------------------------------------------------------

// 5. Задача
//Не выполняя код, дать ответ:
//Что выведется в консоль? Ответ записать в комментарий.

// let a = 10;
// let b = 20;
// console.log(a !== b); // true. Так как, обе переменные являются, числом и не равны по значению.


// --------------------------------------------------------------


// 6. Задача
//Не выполняя код, дать ответ:
//Что выведется в консоль? Ответ записать в комментарий.

// let c = 55;
// let b = "55";
// console.log(b == c); // true. Так как, оператор "равно" сравнивает значения не смотря, на тип.


// console.log(typeof null); // "object"
// console.log(null === undefined);


// null, undefined, string, number(NaN, Infinity, -Infinity), boolean,
// object (array, function ...) *** symbol, bigint

// --------------------------------------------------------------


// 7. Задача
//Не выполняя код, дать ответ:
//Что выведется в консоль? Ответ записать в комментарий.
// let testVar = NaN;
// console.log(isNaN(testVar)); // true


// console.log(isNaN('105px')); // true

// console.log(isNaN(Number('105'))); // Под капотом

// console.log(NaN == NaN); // false
// console.log(NaN === NaN); // false
// console.log(false == "false"); // 0 == NaN // false
// console.log(true == "true"); // 1 == NaN // false
// console.log(isNaN(10 + "5")); // '105'-> 105 -> false

// console.log(isNaN(10 - "5")); // 5 -> false
// console.log(isNaN(false)); // false
// console.log("" == false); // 0 == 0 // true
// console.log("0" == false); // 0 == 0 // true
// console.log(10 == true); // 10 == 1 // false


// --------------------------------------------------------

// 8. Задача
//Не выполняя код, дать ответ:
//Что выведется в консоль? Ответ записать в комментарий.

// console.log(Boolean("")); // false
// console.log(Boolean("false")); // true
// console.log(Boolean(NaN)); // false
// console.log(Boolean(100)); // true
// console.log(Boolean(null)); // false

// console.log(Boolean(-1)); // true
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean("0")); // true
// console.log(Boolean(" ")); // true

// console.log(Boolean(2 !== 2)); // false Почтому что, 2 равно двум! А у нас оператор "!==" строгого неравенства.


//-----------------------------------------------------------

// 9. Задача
//Не выполняя код, дать ответ:
//Что выведется в консоль? Ответ записать в комментарий.

// console.log(null == undefined); // true (exception)
// console.log('Кит' > 'Киндер'); // false (н п р с т)
// console.log(0 == ""); // true
// console.log('Я' > 'Ю'); // true
// console.log(null == false); // true

// console.log(isNaN(10 - "10") == 1); // false
// console.log("" == false); // true
// console.log(null === undefined); // false
// console.log(17 >= 17); // true
// console.log('U' > 'Z'); // false


//------------------------------------------------------------

// 10. Задача
//Не выполняя код, дать ответ:
//Что выведется в консоль? Ответ записать в комментарий.

// console.log(false == 0); // true
// console.log(15 + 5 === "20"); // false
// console.log(15 <= "15"); // true
// console.log("t" == 1); // false
// console.log('2' > 1); // true

// console.log(17 + 3 == 21 - "1"); // true
// console.log(" " == 0); // true
// console.log("05" > 4); // true
// console.log(100 - 47 == 40 + "13"); // false
// console.log(true == -1); // false


// -----------------------------------------------------------


// console.log(typeof ""); // "string"
// 11. Задача
//Не выполняя код, дать ответ:
//Что выведется в консоль? Ответ записать в комментарий.

// console.log(17 + 3 === 20 && 20 - 3 == "17"); // true
// console.log(50 + 50 == "100" || (!false && !NaN && !(27 + 3 === "30"))); // true
// console.log(Number("100") === 100); // true
// console.log(typeof "" === "String"); // false
// console.log(Number(String(10) + 0) === 100); // true

// console.log(typeof false === "Boolean"); // false
// console.log(50 + String(Number(Boolean(null))) == 500 || false); // true
// console.log(!"" && !null && !(2 + 2 * 2 === 8)); // true
// console.log(5 > 3 && 7 < 10 && 5 == "5"); // true
// console.log(typeof true == "boolean"); // true


// -------------------------------------------------------------


// 12. Задача
//Не выполняя код, дать ответ:
//Что выведется в консоль? Ответ записать в комментарий.

// console.log(true || false); // true
// console.log(false && true); // false
// console.log(false || true && true); // true
// console.log(false || true && false); // false
// console.log(false && true || true); // true
// console.log(false && true || true && (false || true)); // true

// console.log(6 > 3 || 4 < 1); // true
// console.log(6 >= 6 && 10 < 15); // true
// console.log(6 > 9 || 5 > 3 && 7 > 4); // true
// console.log(6 > 9 || 1 > 3 && 7 > 4); // false
// console.log(10 != 10 && 5 == 5 || -5 > -9); // true
// console.log(7 >= 9 && 5 == 5 || 7 > 3 && (14 < 10 || 10 > 9)); // true


// 13. Задача
//Измените приоритет действий, чтобы в консоль вывелась истина.

// console.log((72 / 12 + 6) * 4 === 48);
// console.log((72 / 12) + 6 * 4 === 30);
// console.log((72 / (12 + 6)) * 4 === 16);
// console.log(72 / (12 + 6 * 4) === 2);
// console.log((120 - (40 / 5)) * 2 === 224);

// console.log(120 - (40 / (5 * 2)) === 116);
// console.log(120 - ((40 / 5) * 2) === 104);
// console.log(((120 - 40) / 5) * 2 === 32);
// console.log((72000 / 800) / (5 + 40) === 2);
// console.log(false == null || true == (1 && 0) === "");