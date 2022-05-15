// * ===== string ===== * //

// * Esc-последовательности (экранирование)

// \n - enter
// \t - tab
// \' - single quote
// \" - double quote
// \\ - backslash

console.log('\'Name\':\nAlex');

console.log("'Name':\nAlex");



// * Количество символов в строке (свойство .length)

let userRandomText = 'bLa-bLa-bLa';

console.log(userRandomText.length); // 11


// * Получить строку из строчных/заглавных букв
// (.toLowerCase() - метод)
// (.toUpperCase() - метод)

console.log(userRandomText.toLowerCase());
console.log(userRandomText.toUpperCase());


// * Преобразовать к типу String

// console.log(String(24));



// * 3 способа вывести в консоль

let userName = 'Pavel';

console.log('My name is ' + userName);
console.log('My name is', userName);

// !  Шаблонные литералы
console.log(`My name is ${userName}`);



