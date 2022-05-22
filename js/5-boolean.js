// * ===== boolean (логический тип) ===== * //

let isAdmin = true; //

let hasCompare = 8 > 5; // true
console.log(hasCompare);

// ? Оператор сравнения (приводит неявно к типу number) (сравнение возвращает булевый результат)
// Больше                 >
// Больше или равно       >=
// Меньше                 <
// Меньше или равно       <=
// Равно                  == (Сравнивает значения, не смотря на тип)
// Не равно               != (Сравнивает значения, не смотря на тип)

// Строгое сравнение
// Равно                  ===  (Сравнивает значения, учитывая тип)
// Не равно               !==  (Сравнивает значения, учитывая тип)

// console.log(10 == "10"); // true
// console.log(10 >= "5"); // true
// console.log(10 >= "15"); // false

// console.log(10 === "10"); // false
// console.log(10 === 10); // true

// // ! Исключение
// console.log(null == undefined); // true


// console.log(null === undefined); // false




// console.log("0" == false); // 0 == 0 = true
// console.log("03" == 3); // 3 == 3 = true



// * Преобразование к типу Number (Number(), == != > >= < <=)
// * String
// "" -> 0
// " " -> 0
// "    " -> 0
// "0" -> 0
// "000" -> 0

// "007" -> 7
// "7.5" -> 7.5

// "7px" -> NaN
// "text" -> NaN
// "!&,." -> NaN

// * Boolean
// false -> 0
// true -> 1

// * null & undefined
// null -> 0
// undefined -> NaN



// * Преобразование к типу boolean (Boolean(), && || !)
// Boolean(3)

// * String
// "" -> false
// "0" -> true
// " " -> true
// "t" -> true
// "extt" -> true

// * Number <-> boolean
// NaN -> false
// 0 -> false

// 1 -> true
// 3 -> true
// -3 -> true

// Infinity -> true
// -Infinity -> true

// * null & undefined
// null -> false
// undefined -> false



// * Операторы сравнения * //
// > < >= <= == !=
// Если сравниваем разные типы данных, то они приводятся неявно к типу number
// Если сравниваем одинаковые типы, то сравниваются по значению (не приводятся к Number)

// !искл. Помнить: null == undefined (true)
// === !==
// Сравниваются значения и типы
console.log(10 === '10'); // (10 == 10) && ("number" == "string")
console.log('string' === 'String'); // false
console.log('string' == 'String'); // false


// * Логические операторы (возвращают тот тип и значение с которым работали изначально) * //

// И - &&
// ИЛИ - ||
// НЕ - ! (Неявно преобразует к булевому типу и меняет значение на противоположное)


// * Логическое И
console.log(5 > 3 && 6 > 2);
// true && true -> true
console.log(true && true); // true


console.log(7 && 4); // 4 // - возвращает последнюю истину
// true && true -> true

console.log(0 && 4); // false -> 0 - возвращает первую ложь
console.log(3 && null && 4); // false -> null - возвращает первую ложь
console.log(3 && 7 && 9); // true -> 9 - возвращает последнюю истину
console.log(5 && "" && null && false); // false -> ""

// * Логическое ИЛИ
console.log(5 < 3 || 6 > 2); // true
console.log(false || true); // true - возаращает первую истину
console.log(false || true || false || true); // true
console.log(0 || 't' || null || 5); // true -> 't'
console.log(0 || '' || null || undefined); // false -> undefined - возвращает последнюю ложь

console.log(0 && null); // 0
console.log(!0 && null); // null
console.log(!0 && !null); // true
console.log(true && true); // true







// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log(0);
console.log(Boolean(0)); // false
console.log(!!0); // false

console.log('9');
console.log(Number('9')); // 9
console.log(+'9'); // 9 // Унарный плюс
console.log(-'9'); // 9 // Унарный минус



