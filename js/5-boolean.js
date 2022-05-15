// * ===== boolean (логический тип) ===== * //

let isAdmin = true; //

let hasCompare = 8 > 5; // true
console.log(hasCompare);

// ? Оператор сравнения (приводит неявно к типу number)
// Больше                 >
// Больше или равно       >=
// Меньше                 <
// Меньше или равно       <=
// Равно                  == (Сравнивает значения, не смотря на тип)
// Не равно               != (Сравнивает значения, не смотря на тип)

// Строгое сравнение
// Равно                  ===  (Сравнивает значения, учитывая тип)
// Не равно               !==  (Сравнивает значения, учитывая тип)

console.log(10 == "10"); // true
console.log(10 >= "5"); // true
console.log(10 >= "15"); // false

console.log(10 === "10"); // false
console.log(10 === 10); // true

// ! Исключение
console.log(null == undefined); // true


console.log(null === undefined); // false




console.log("0" == false); // 0 == 0 = true
console.log("03" == 3); // 3 == 3 = true


// * Преобразование к типу boolean
// Boolean(3)

// * String
// "" -> false
// "0" -> true
// " " -> true
// "t" -> true
// "extt" -> true

// * Number
// NaN -> false
// 0 <-> false
// 1 <-> true
// 3 <-> true
// -3 <-> true

// * null & undefined
// null -> false
// undefined -> false


// 1 - 10 вкл 13

// * Логические операторы * //

// И - &&
// ИЛИ - ||
// НЕ - !






