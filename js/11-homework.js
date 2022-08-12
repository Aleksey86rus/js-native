// 1. Задача
// Создать любую переменную типа string. Вывести посимвольно в консоль двумя способами:

// for;
// for of;

// let userStr = 'Lesson'
// // for (let i = 0; i <a userStr.length; i++) {
// //   console.log(userStr[i]);
// // }

// for (const symbol of userStr) {
//   console.log(symbol);
// }

// =========================================================================== //

// 2. Задача
// Написать функцию, на вход которой подаётся строка, функция возвращает индекс последнего элемента не зависимо от количества символов.

// let strUser = 'Computer';

// console.log(checkIndexLastElem(strUser));

// function checkIndexLastElem(string) {
//   return string.length - 1;
// }

// =========================================================================== //

// 3. Задача
// Написать функцию, на вход которого подаётся строка. Функция должна вернуть первый символ, предпоследний и последний.

// let strUser = 'Computer';

// const symbols = checkFirstSymbolPenultimateLast(strUser);
// console.log(symbols);

// function checkFirstSymbolPenultimateLast(str) {
//   return {
//     first: str[0],
//     penult: str[str.length - 1],
//     last: str[str.length - 2]
//   }
// }





// function checkFirstSymbolPenultimateLast(str) {
//   return [
//     str[0],
//     str[str.length - 1],
//     str[str.length - 2]
//   ]
// }




// =========================================================================== //

// 4. Задача
// Написать функцию, на вход которой подаётся две строки. Если первая строка длинее второй, то к первой доклеивается вторая, иначе - наоборот. Функция возвращает результирующую строку.


// let strUser1 = 'Computing';
// let strUser2 = 'machine';

// // let strUser1 = 'machine';
// // let strUser2 = 'Computing';

// console.log(chercResultString(strUser1, strUser2));

// function chercResultString(str1, str2) {
//   return str1.length > str2.length ? `${str1} ${str2}` : `${str2} ${str1}`
// }

// =========================================================================== //

// 5. Задача
// Написать функцию, на вход которой подаётся строка, функция возвращает количество, встречающихся букв a незасивимо от того какой язык: русский или английский.

// // let userStr = 'Параллелограмм';
// let userStr = 'parallelogram';
// let text = 'ааааа -рус aaaaa - en'

// console.log(quantityLetters(text));

// function quantityLetters(letters) {
//   let count = 0;
//   for (const symbol of letters) {
//     (symbol === 'a' || symbol === 'а') && count++
//   }
//   return count;
// }

// =========================================================================== //

// 6. Задача
// ??Написать функцию, на вход которой подаётся 2 параметра(1 параметр - строка, 2 параметр - символ). Функция возвращает число - количество встречающихся символов в строке.

// function checkQuantitySymbol(str, symb) {
//   let countSymbols = 0;
//   for (const el of str) {
//     if (el === symb) {
//       countSymbols++
//     }
//   }
//   return countSymbols
// }

// let userStr = 'streetsss';
// let userSymb = 'z';

// console.log(checkQuantitySymbol(userStr, userSymb));


// * Написать функцию, на вход которой подаётся 2 параметра(1 параметр - массив, 2 параметр - число). Функция возвращает другое число - количество встречающихся чисел (переданный втором параметром) в массиве


// function getCountNumb(array, num) {
//   let count = 0;
//   for (const el of array) {
//     if (el === num) {
//       count++
//     }
//   }
//   return count
// }

// console.log(getCountNumb([1, 2, 3, 4, 5, 11], 10)); // 0
// console.log(getCountNumb([1, 2, 3, 4, 5, 11], 6)); // 0
// console.log(getCountNumb([1, 2, 3, 4, 5, 11], 1)); // 1
// console.log(getCountNumb([1, 2, 3, 4, 5, 1], 1)); // 2



// * Написать функцю, на вход которой подаётся массив чисел
// Функция возвращает количество чётных чисел

// function getEvenCount(array) {
//   let count = 0;
//   for (const el of array) {
//     if (el % 2 === 0) {
//       count++
//     }
//   }
//   return count
// }

// console.log(getEvenCount([2, 8, 7, 91, 25, 36]));


// =========================================================================== //

// 7. Задача
// Написать функцию, на вход которой подаётся 2 строки. Функция проверяет содержится ли вторая строка в первой.

// let testStr = 'Hello world2';
// let queryStr = 'world2';

// console.log(checkSecondStr(testStr, queryStr));

// function checkSecondStr(str, query) {
//   // str = 'Hello world'; query = 'world'
//   return str.includes(query)
// }

// =========================================================================== //

// FIXME: 8. Задача
// Написать функцию, на вход которой подаётся 2 строки. Функция проверяет равны ли эти строки независимо от регистра.

// let userStr1 = 'HELLO WORLD';
// let userStr2 = 'hello world';

// console.log(checkSecondStr(userStr1, userStr2));

// function checkSecondStr(str1, str2) {
//   return str1.toLowerCase() === str2.toLowerCase();
// }

// =========================================================================== //

// 9. Задача
// ? Написать функцию, на вход которой подаётся 3 строки, которая проверяет есть вторая или третья строка в первой. Функция может работать как с двумя переменными, так и стремя.

// =========================================================================== //

// 10. Задача
// Написать функцию, на вход которой подаётся строка. Функция возвращает строку в нижнем регистре и убирает лишние пробелы по бокам.

// let userStr = '   I\'m learning JavaScript   ';

// console.log(stringToLowerCase(userStr));

// function stringToLowerCase(str) {
//   return str.trim().toLowerCase()
// }

// =========================================================================== //

// FIXME: 11. Задача
// Написать функцию, на вход которой подаётся 2 строки. Функция проверяет начинается ли первая строка со второй строки или заканчивается ей ?



// function checkStartString(str1, str2) {
//   return str1.startsWith(str2) || str1.endsWith(str2)
// }

// let userStr1 = 'summer sunshaine';
// let userStr2 = 'summer';

// console.log(checkStartString(userStr1, userStr2));
// =========================================================================== //

// 12. Задача
// Написать функцию, на вход которой подаётся строка. Функция возвращает массив, состоящий из символов этой строки. Решить задачу двумя способами.

// let userStr = 'Mercedes';

// console.log(backArrayToSymbol(userStr));

// function backArrayToSymbol(str) {
//   // return str.split('')
//   return Array.from(str)
// }


// =========================================================================== //

// TODO: think about it
// Методы строк не решают всех возможных задач, возможно стоит решать и без них, но это не всегда

// 13. Задача
// ?Написать функцию, на вход которой подаётся 2 параметра(1 параметр - строка, 2 параметр - символ). Функция возвращает строку, состоящая без символа.



// function getStringNotSymbol(str, symbol) {
//   let newStr = ''
//   for (const sym of str) {
//     if (sym !== symbol) {
//       newStr += sym
//     }
//   }
//   return newStr
// }

// console.log(getStringNotSymbol('4375893469854708693945', "4"));


// Написать функцию, на вход которой подаётся массив чисел и одно число
// Функция возвращает новый массив со всеми числами, кроме того, который был передан вторым

// [4, 6, 54, 5, 5, 8, 6, 8, 7, 6, 4], 5
// [4, 6, 54, 8, 6, 8, 7, 6, 4]

// function getNewArray(array, num) {
//   const newArr = [];
//   for (const el of array) {
//     if (el !== num) {
//       newArr.push(el) // [[4, 6, 54, 5, 5, 8, 6, 8, 7, 6, 4]]
//     }
//   }
//   return newArr
// }

// console.log(getNewArray([4, 6, 54, 5, 5, 8, 6, 8, 7, 6, 4], 5));


// =========================================================================== //

// 14. Задача
// Написать функцию функцию, которая обрезает переданное слово со второго символа до предпоследнего включительно.

// let userStr = '_breakfast';
// console.log(sliceToTwoSymbol(userStr));

// function sliceToTwoSymbol(string) {
//   return string.slice(1, string.length - 1)
// }

// =========================================================================== //

// 15. Задача
// FIXME: подумать, куда пропала буква
// Написать функцию cropString, на вход которой подаётся 3 параметра(1 параметр - строка, 2 - число(начало обрезки), 3 - число(конец обрезки)). Функция возвращает строку, состощая из символов, начиная от 2 параметра, заканчивая 3 вкл.

// Например:
// console.log(cropString("tester", 2, 4)); // "ste"

// let string = 'tester';

// function cropString(str, start, end) {
//   return str.slice(start, end + 1)
// }

// console.log(cropString(string, 2, 4));




// =========================================================================== //

// FIXME: 16. Задача
// Написать функцию generateLink, на вход которой подаётся 3 параметра: адрес, текст, класс для тега a. Функция возвращает строку вида:
// <a href="ссылка" class="класс">текст</a>.

// Например:
// generateLink('https://vk.com', 'vk.com', 'start__link');
// <a href="https://vk.com" class="start__link">vk.com</a>.


// console.log(generateLink('<a https://developer.mozilla.org/ru/', 'class="start__link">', 'Ресурсы для разработчиков от разработчиков.</a>'));


// function generateLink(link, className = 'link', text = link, bemBlock = 'start') {
//   return `<a href="https://${link}" class="${bemBlock}__${className}">${text}</a>`
// }

// function name(foo) {
//   // foo = generateLink
//   const test = 10;

//   document.body.innerHTML += foo('youtube.com') + test;
// }

// name(generateLink);



// console.log(generateLink('vk.com', 'link', 'ВКонтакте', 'start'));
// console.log(generateLink('yandex.ru', 'ref', 'Яндекс', 'begin'));
// console.log(generateLink('yandex.ru', 'social-link'));





// * Дополнительно
// Если класс не передаём, то ссылка создаётся без атрибута class

// =========================================================================== //

// FIXME: 17. Задача
// Написать функцию, на вход которой подаётся строка из функции generateLink 16 задачи. Функция возвращает объект, состоящий из свойств:

// link: адрес ссылки;
// content: содержимое тега a;
// className: имя класс;

// function BackObjConsisOfProp(link, clasName, text) {
//   return object = {
//     link: link,
//     content: text,
//     class: clasName
//   }
// }

// console.log(BackObjConsisOfProp('https://developer.mozilla.org/ru/', 'start__link', 'Ресурсы для разработчиков от разработчиков.'));



// =========================================================================== //

// 18. Задача
// Написать функцию, на вход которой подаётся путь к файлу, например: C:\Program Files\project\test.js. Функция возвращает объект с двумя данными:

// Диск на котором лежит файл;
// Расширение файла;


// function cetObjTwoData(pathToFile) {
//   const indexDisk = pathToFile.indexOf(':')
//   const disk = pathToFile.slice(0, indexDisk)

//   const indexPointExt = pathToFile.lastIndexOf('.')
//   const ext = pathToFile.slice(indexPointExt + 1)


//   return {
//     disk,
//     ext
//   }
// }


// const result = {
//   disk: 'E',
//   ext: 'js'
// }

// console.log(cetObjTwoData('E:\Front.end\js-native\js\11-home.work.js'));
// console.log(cetObjTwoData('C:\Program Files\project\test.txt'));

//=========================================================================== //

// 19. Задача
// Написать функцию, на вход которой подаётся строка в kebab -case, функция возращает эту же строку в lowerCamelCase cssToJs("background-color") == 'backgroundColor'; cssToJs("list-style-image") == 'listStyleImage'; cssToJs("-webkit-transition") == 'webkitTransition';

// function cetStrLowerCamelCase(cssToJs) {

//   let background = cssToJs.split('-');

//   for (let i = 0; i < background.length; i++) {
//     background[i] = background[i][0].toUpperCase() + background[i].substr(1);
//   }
//   return background.join('')
// }

// console.log(cetStrLowerCamelCase('bacground-color'));
// console.log(cetStrLowerCamelCase('list-style-image'));
// console.log(cetStrLowerCamelCase('bacground-color'));


// function getStrLowerCamelCase(cssProperty) {
//   if (cssProperty[0] === '-') {
//     cssProperty = cssProperty.slice(1)
//   }

//   const wordList = cssProperty.split('-')

//   for (let i = 1; i < wordList.length; i++) {
//     wordList[i] = `${wordList[i][0].toUpperCase()}${wordList[i].slice(1)}`
//   }

//   return wordList.join('');
// }


// function getStrLowerCamelCase(cssProperty) {
//   let result = ''
//   let nextSymbolUpper = false


//   // let startIndex = 0
//   // if (cssProperty[0] === '-') {
//   //   startIndex = 1
//   // }
//   // for (let i = startIndex; i < cssProperty.length; i++) {

//   if (cssProperty[0] === '-') {
//     cssProperty = cssProperty.slice(1)
//   }
//   for (const symbol of cssProperty) {
//     if (symbol === '-') {
//       nextSymbolUpper = true
//     } else {
//       if (nextSymbolUpper) {
//         result += symbol.toUpperCase()
//         nextSymbolUpper = false
//       } else {
//         result += symbol
//       }
//     }
//   }
//   return result
// }

// console.log(getStrLowerCamelCase('background-color'));
// console.log(getStrLowerCamelCase('list-style-image'));
// console.log(getStrLowerCamelCase("-webkit-transition"));


// console.log('ggfdgfdg-fdg-fd-gfd-gfd-g-fdg-df'.split('fd'));
// console.log('atatatatat - tatat - yattfdas- - tat'.split('- '));

// // ['atatatatat ', 'tatat ', 'yattfdas', '', 'tat'],

// // const nameString = 'Alex, Pavel, Nick, Paul, David'
// // console.log(nameString.split(', '));


// const foodString = 'carot: unknown, potato: unknown, cabage'
// console.log(foodString.split(': unknown, '));



// // Написать функцию, на вход которой подаётся строка вида priceString
// // Функция возвращает массив чисел


// const priceString = '300 price: 500 price: 700 price: 1000';


// function getArrNumbers(array) {
//   const newPriceList = array.split(' price: ')

//   for (let i = 0; i < newPriceList.length; i++) {
//     newPriceList[i] = Number(newPriceList[i])
//   }

//   return newPriceList
// }

// console.log(getArrNumbers(priceString));


// console.log(priceString.split(' price: '));








// =========================================================================== //

// 20. Задача
// Написать функцию, на вход которой подаётся строка, содержащая класс по БЭМ, вида: class = "about__btn about__btn_disabled" В функцию подаётся строка только вида, описанного сверху. Вывести в консоль:

// Название блока;
// Название элемента;
// Название модифитора;


// function GetBemClass(block, element, modifier) {

//   console.log(
//     `Название блока: ${block}
//   Название элемента: ${element}
//   Название модификатора:${modifier}`);

//   // console.log({
//   //   'Название блока': block,
//   //   'Название элемента': element,
//   //   'Название модификатора': modifier,
//   // });

// }

// console.log(GetBemClass('div class=\"about\"', 'about__btn', '_disabled'));


// =========================================================================== //

// 21. Задача
// Создать переменную: stringTask = "aaaccaaaccaacacaacc".Написать функцию, которая возвращает объект со следующими данными:

// Сколько % в строке символов "a" и "c";
// Программа должна работать с любым(в пределах разумного) количеством символов "a" и "с";

// let stringTask = 'aaaccaaaccaacacaacc';
// let stringLength = 0;
// let countLetterA = 0;
// let countLetterC = 0;
// let percentLetterA = 0;
// let percentLetterC = 0;

// function getObj(str) {
//   stringLength = stringTask.length
//   for (const el of str) {
//     if (el === 'a') {
//       countLetterA++
//     } else if (el === 'c') {
//       countLetterC++
//     }
//     percentLetterA = (countLetterA / stringLength) * 100;
//     percentLetterC = (countLetterC / stringLength) * 100
//   }
//   return {
//     'Количество символов \'а\'': String(Math.floor(percentLetterA) + ' %'),
//     'Количество символов \'с\'': String(Math.floor(percentLetterC) + ' %')
//   };
// }
// console.log(getObj(stringTask));
// =========================================================================== //

// 22. Задача
// Создать функцию, которая удаляет первый и последний символы строки, которая подаётся на вход в функцию.Функция возвращает новую строку.Если в строке меньше двух символов, то возвращать пустую строку.


// function cetNewStr(string) {
//   if (string.length < 2) {
//     console.log('');
//   } else {
//     return string.slice(1, string.length - 1)
//   }
// }

// console.log(cetNewStr('cinema'));
// =========================================================================== //

// 23. Задача
// Написать функцию, которая возвращает перевёрнутую строку строку.

// 'world'  => 'dlrow'
// 'word'   => 'drow'


// function reverseStr(str) {
//   return str.split('').reverse().join('')
// }

// console.log(reverseStr('World'));
// =========================================================================== //

// 24. Задача
// Написать функцию, которая удаляет все пробелы из строки. Функция возвращает новую строку.

// function newStr(string) {
//   return string.replace(/\s/g, '')
// }

// console.log(newStr(' Сегодня, такой замечательный день!   '));

// let str = 'Любо, братцы, любо!';
// console.log(str.match(/любо/gi));
// =========================================================================== //

// 25. Задача
// Написать функцию, на вход которой подаётся 2 строки: имя и фамилия.Функция возвращает одну строку - инициалы через точки.

// Alexander Volkov-- > A.V.

// function getOneStr(name, surname) {
//   return name.slice(0, 1).padEnd(2, '.').concat(surname.slice(0, 1)).padEnd(4, '.')
// }

// console.log(getOneStr('Aleksandr', 'Volkov'));
// =========================================================================== //

// 26. Задача
// Написать функцию, на вход которой подаётся строка с текстом.Функция переворачивает все символы в слове наоборот, оставляя порядок слов тем же самым.

// Example:
// "The greatest victory is that which requires no battle" -- >
//   "ehT testaerg yrotciv si taht hcihw seriuqer on elttab"

// function fripsAllSymbol(str) {
//   return str.split(' ')

// }
// // str.split(' ');
// console.log(fripsAllSymbol('The greatest victory is that which requires no battle'));


// =========================================================================== //

// 27. Задача
// Написать функцию, которая преобразует массив строк в массив чисел, где каждое число - количество символов в строке. Функция возвращает новый массив.

// Example: ['a', 'as', 'red', 'test']-- > [1, 2, 3, 4]

// myArr = ['a', 'as', 'red', 'test'];


// function newArray(arrString) {
//   const arrLength = []

//   for (const el of arrString) {
//     arrLength.push(el.length)
//   }

//   return arrLength
// }

// console.log(newArray(myArr));


// =========================================================================== //

// 28. Задача
// Написать функцию, на вход которой подаётся массив с словами.Функция мутирует массив, переворачия все слова в массиве наоборот.


// const myArr = ['table', 'book', 'pen', 'lamp'];
// const myArr2 = [];


// function getMutatesArray(arr) {

//   for (let i = 0; i < arr.length; i++) {
//     myArr2.push(arr[i])

//   }
//   return myArr2
//   // return myArr2.join(arr[4]).split('').reverse(arr).join(arr).split(',')
// }
// console.log(getMutatesArray(myArr));
// // console.log(myArr === myArr2);

// =========================================================================== //

// 29. Задача
// Написать функцию, на вход которой подаётся строка.Функция возвращает объект, в котором есть 3 свойства:

// Количество заглавных букв;
// Количество строчных букв;
// Количество чисел;
// =========================================================================== //

// 30. Задача
// Написать функцию, на вход которой подаётся строка.Функция возвращает строку, удаляя оттуда все цифры

// Examples:
// '! !' -> '! !'
// '123456789' -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// =========================================================================== //

// 31. Задача
// Написать функцию, на вход которой подаётся строка.Функция возвращает строку, удаляя оттуда все сивмолы пробела

// '8 j 8   mBliB8g  imjB8B8  jl  B'               -- > '8j8mBliB8gimjB8B8jlB'
// '8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'   -- > '88Bifk8hB8BB8BBBB888chl8BhBfd'
// '8aaaaa dddd r     '                            -- > '8aaaaaddddr'
// =========================================================================== //

// ★ Задачи повышенной сложности ★
// ★ 32. Задача(Продолжение 18 задачи)★
// Написать функцию, на вход которой подаётся путь к файлу, например: C: \Program Files\project\test.js.Функция возвращает объект с двумя данными:

// Диск на котором лежит файл;
// Папка, в которой лежит файл;
// Расширение файла;
// =========================================================================== //

// ★ 33. Задача ★
// Дан объект user, выполнить удаление свойств с помощью цикла, которые содержут слово delete в ключе.

// const user = {
//   name: "Lucas",
//   age: 29,
//   "delete me": 'text',
//   delete: 105,
//   'deleteProp': false
// };
// =========================================================================== //

// ★ 34. Задача ★
// Написать функцию stringClean, которая удаляет из строки все цифры.

// '8j8mBliB8gimjB8B8jlB' -- > 'jmBliBgimjBBjlB'
// '97Bifk8hB65BB3BBBB8451chl0BhBfd' -- > 'BifkhBBBBBBBchlBhBfd'
// '8aaaaa dd5dd 7r0' -- > 'aaaaa dd5dd r'
// =========================================================================== //

// ★ 35. Задача ★
// Написать функцию lettersCount, которая принимает строку в качестве аргумента и возвращает объект, в котором ключами являются все буквы, которые есть в строке, а значениями - их количество в строке.Большая буква и маленькая должны считаться одинаковой буквой.Если строка пустая, то вернуть пустой объект.

// Пример:
// console.log(lettersCount('aAAbbccde'));

// output:
// {
// a: 3,
// b: 2,
// c: 2,
//  d: 1,
// e: 1,
// }
// =========================================================================== //

// ★ 36. Задача ★
// Написать функцию, на вход которой подаётся строка с простым матемтическим выражением: 11 + 3, или 7 * 9. Функция возвращает результат сложения / умножения / деления и т.п.Примечание: функцию eval() не использовать!
// =========================================================================== //

// ★ 37. Задача ★
// Даны переменные типа string.Написать функцию, которая преобразует эти переменные к типу number, убрав лишние знаки.

// const a = "1_234_567_890"; // 1234567890
// const b = "4_5435_6548_9430"; // 4543565489430
// const c = "1_"; // 1
// const d = "_2"; // 2
// =========================================================================== //

// ★ 38. Задача ★
// Написать функцию, на вход которой в функцию подаётся строка дата в формате: "ДД.ММ.ГГГГ" Функция возвращает true, если такая дата существует, иначе false.

// Необходимо учесть високосные года;
// Функция работает только с положительными годами(наша эра);
// Выполнить программу без использования Date();
// =========================================================================== //

// ★ 39. Задача ★
// Написать программу - кодировщик: s = 'aabbbсaaaa' преобразуется в 'a2b3с1a4', то есть группы одинаковых символов исходной строки заменяются на этот символ и количество его повторений в этой позиции строки.Кодировщик должен учитывать регистр:

// "aBc" -> "a1B1c1"