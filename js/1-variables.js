// * ===== Variables ===== * //

// Однострочный

/* 
  Многстрочный комментарий
  Много строк
*/

// Переменные - хранят данные
// lowerCamelCase - js
// kebab-case - html/folders/files
// Название должно отражать суть того, что в ней хранится

// "=" - присвоить (процесс присвоения - инициализация переменной)


// Можно переменную объявить (создать)
// Можно пермееную инициализировать
// Можно всё сразу

// let firstVariable; // undefined
// firstVariable = 10; // 10

let firstVariable = 10; // 10

// ? ЧТо может хранить перменная?
// 1. number (-2e53-1 до 2e53-1 вкл; NaN (Not a Number); Infinity / -Infinity)
// 9e12 = 9 * 10 ^ 12

// 2. string (символ / текст)
// 3. boolean (true / false) - 
// 4. null (null) - пустое значение
// 5. undefined (undefined) - переменая не определена (не присвоено значение)

// 6. object (array, function, object, ...)
// ================================== //
// 7. symbol
// 8. bigint (диапазон больще number)

let userAge = 19;
let userName = 'Pavel';
// let userName = "Pavel";
// let userName = `Pavel`; // Используется для шаблонных литералов

let hasUserAccess = true; // is - является / has - имеет
let isAdmin = false;

let testNull = null;
let testUndefined; // undefined
// let testUndefined = undefined; // undefind


// let / const / var
// var - устаревшее объявление (hoisting)


// ! Переменная let / const объявляется 1 раз
let numberTest = 108;
// let numberTest = 111; // Так с var работает

numberTest = 100; // переприсваивание (предыдущее значение затирается)

const PI = 3.1415;
// PI = 3; // переприсвоить нельзя!
const COLOR_BLUE = '#00f';

