// * ===== string - extanded ====== * //



let string = 'Dimple text!'
// ! Строка - как массив, состоящий из символов, но строка иммутабельна!
// ! Иммутабельность  - замена символа невозможна!
// Т.е. строка всегда только для чтения

console.log(string[3]);
string[0] = 'S' // Замена символа невозможна! 
console.log(string[0]);

string = 'Simple'
console.log(string);


// Посколько строка - это массив, то перебрать все символы можно через for
// А так как строка - иммутабельна, то можно сразу использоваться всегда for-of

for (const symbol of string) {
  console.log(symbol);
}
// * === Методы для строк

// 0. let count = <string>.length // свойство -  Длина строки

// 1. let newString = <string>.toLowerCase() // Возвращает строку в нижнем регистре
// 2. let newString = <string>.toUpperCase() // Возвращает строку в верхнем регистре

// 3. let newString = <string>.trim() // Удаляет все пробелы слева и справа от строки
// Внутренние пробелы не убирает

console.log('    Text   1 '.trim());

// **** 4. let index = <string>.indexOf(value, index = 0) // Вовзращает индекс первого встречного value, начиная с index (по умолчани поиск с начала строки index = 0)
// ! Возвращает -1, если ничего не нашёл

console.log('Ring RongRoRo'.indexOf('Ro'));

// * 5. let hasIndex = <string>.includes(value, index = 0) // Вовзращает true если value найден в строке, иначе false
// index по умолчанию равен 0

// ! Проверка в начале <string>.startsWith(value, index)
// ! Проверка в конце <string>.endsWith(value, index)

// ? Заменяет многие задачи, которые решаются с циклами
// **** 6. let newString = <string>.slice(start, end = <string>.length); // Возвращает строку, копируя в неё все символы с позиции start до позиции end !!!НЕ ВКЛ!!!

// По умолчанию end = <string>.length (т.е. до конца строки)
console.log('text header'.slice(0, 4)); // ! 4  не вкл

// Вырезать до первого встречного пробела:
console.log();

// const strUser = 'text header'
// const indexSpace = strUser.indexOf(' ')
// const firstWord = strUser.slice(0, indexSpace)
// console.log(firstWord);

// Рефакторинг:

const strUser = ' text header'

const clearStrUser = strUser.trim()

const firstWord = strUser.slice(0, strUser.indexOf(' '))
console.log(firstWord);



// * === Array/String (Методы массивов для строк) === * //

// * let array = <string>.split(value)  // Преобразует строку в массив по разделителю value
// Возвращает новый массив

console.log('te! xt! 1'.split()); // ['te xt!']
console.log('te! xt! 1'.split('')); // ['t', 'e', ' ', 'x', 't', '!'] - посимвольно
console.log('te! xt! 1'.split('!')); // ['te', ' xt', ' 1']
console.log('milk, bread, cheese, carrot'.split(', ')); // ['milk', 'bread', 'cheese', 'carrot']

// * let string = <array>.join(value) // Преобразует массив в строку, добавляя между элементами разделитель value


console.log(['milk', 'bread', 'cheese', 'carrot'].join(', '));


// * let array = <array>.reverse() // Изменяет порядок элементов в массиве (наоборот)
// !Мутирует и при этом же возвращает ссылку на этот же массив!

// ? Best Bractice
console.log('snikers'.split('').reverse().join(''));


// Просто дополнительная информация, скорее всего тебе нужен split('')
// * Array.from(<string>) // Посимвольно преобразует строку в массив
// У него всегда разделитель - пустая строка
// ! Хорошо работает смайликами

console.log('🙂'.split(''));
console.log(Array.from('🙂'));










