// Задачи по теме 10. Object

// Дан объект user, выполнить задачи 1 - 6:

// const user = {
//   name: "Peter",
//   age: 33,
//   job: "Developer",

//   "my address": {
//     city: "Moscow",
//     country: "Russia",
//     abroad: ["Vienna", "Paris", "London", "Miami"]
//   },
//   item: ["bag", "book", "pencil"],
//   more: null,
//   key: 'Aha-ha-ha'
// };

// 1. Задача
// Вывести в консоль свойство name;
// console.log(user.name);
// ========================================================================= //

// 2. Задача
// Изменить возраст на 4 года меньше;
// user.age = user.age -= 4;
// console.log(user.age);
// ========================================================================= //

// 3. Задача
// Вывести в консоль все свойства объекта "my address";
// for (const key in user['my address']) {
//   console.log(`${key}: ${user['my address'][key]}`);
// }


// const myAddress = user['my address'];
// for (const key in user['my address']) {
//   console.log(`${key}: ${myAddress[key]}`);
// }
// ========================================================================= //

// 4. Задача
// Вывести в консоль все свойства объекта user, кроме тех свойства, тип которых равен object;
// for (const key in user) {
//   if (typeof user[key] !== 'object' || user[key] === null) {
//     console.log(`${key}: ${user[key]}`);
//   }
// }
// ========================================================================= //

// 5. Задача
// Вывести в консоль последний город из заграничного массива в объекте "my address";
// console.log(user['my address'].abroad[3]);
// ========================================================================= //

// 6. Задача
// Вывести в консоль в столбик все города из заграничного массива;

// const userTest = {
//   name: "Peter",
//   age: 33,
//   job: "Developer",

//   "my address": {
//     city: "Moscow",
//     country: "Russia",
//     abroad: ["Vienna", "Paris", "London", "Miami"]
//   },
//   item: ["bag", "book", "pencil"],
//   more: null,
//   key: 'Aha-ha-ha'
// };

// const users = [
//   { id: 1000, name: 'Alex', age: 121 },
//   { id: 1001, name: 'Aleksey', age: 135 }
// ]


// const cityAbroad = user['my address'].abroad
// for (const key in cityAbroad) {
//   console.log(`${cityAbroad[key]}`);
// }

// for (const key in userTest) {
//   // const key = 'name' // Неявно

//   // console.log(key); // key
//   // console.log(userTest[key]); // value

//   console.log(`${key}: ${userTest[key]}`); // properties
// }


// ========================================================================= //

// 7. Задача
// Дан объект user, добавить объекту свойство с ключом, который находится в переменной prop со значением Manager.

// const prop = 'job';

// const user = {
//   name: "Lucas",
//   age: 29,
// };

// console.log(user.name); // READ
// // const name1 = user.name;


// user.name = 'Helen'

// user.address = 'Moscow' // CREATE
// delete user.address // DELETE
// user.age = 28 // UPDATE

// user[prop] = 'Manager'

// console.log(user);
// CRUD - Create  Update



// const car = {
//   id: 56473564,
//   power: 100,
//   color: '#000',
//   cabin: 'sidan',
//   people: ['Alex', 'Aleksey', 'Mark']
// }

// // 1. Вывести в консоль серийный номер (id)

// console.log(car.id);

// // 2. Поменять цвет автомобиля на белый

// car.color = '#fff';

// console.log(car);

// // 3. Вывести в консоль имена  всех пассажиров

// // for (const key in car) {
// //   console.log(`${car.people}`);
// // }

// for (const person of car.people) {
//   console.log(person);
// }


// Задача 12













// ========================================================================= //

// 8. Задача
// Дан объект user, выполнить удаление свойств, которые содержут слово delete в ключе.

// Циклом пользоваться не нужно, просто удалить.
// const user = {
//   name: "Lucas",
//   age: 29,
//   "delete me": 'text',
//   delete: 105,
//   'deleteProp': false
// };


// const props = 'age'

// delete user['delete me']
// delete user[props]
// delete user.delete
// delete user.deleteProp

// console.log(user);
// ========================================================================= //

// 9. Задача
// Написать функцию, на вход которой подаётся объект и ключ, функция возвращает значение из этого объекта с переданным ключом. Если такого ключа нет, то функция возвращает undefined.

//?




// ========================================================================= //

// 10. Задача
// Написать функцию, которая удаляет свойство из объекта, если оно есть.


// const season = {
//   winter: 'snow',
//   spring: 'thaw',
//   summer: 'hot',
//   autum: 'rain'
// };


// function delPropObject(timeOfYear, prop) {
//   delete timeOfYear[prop]
// }

// delPropObject(season, 'winter');
// console.log(season);


// const user = {
//   age: 1,
//   name: 'male',
//   koliki: true
// }

// delPropObject(user, 'koliki')
// console.log(user);


// const delPropObject = 10;



// ========================================================================= //

// FIXME: 11. Задача
// Дан объект person, выполнить копирование объекта:

// const person = {
//   name: "Bob",
//   age: 25,
//   job: "Developer",
//   "like language": "Java Script"
// };

// const person2 = person // КОпирование не объекта, а ссылки на объект

// person2.name = 'Gale'

// console.log(person === person2); // true - Если ссылки одинаковы
// console.log(person2);
// console.log(person);


// ========================================================================= //

// 12. Задача
// Написать функцию, на вход которой подаётся 2 параметра. Функция вычисляет произведение двух чисел. Функция возвращает объект, в котором хранится 2 параметра и результат умножения.



// function calcCompositionTwoNumb(num1, num2) {
//   return {
//     num1,
//     num2,
//     multi: num1 * num2
//   }
// }

// console.log(calcCompositionTwoNumb(30, 10));

// ========================================================================= //

// 13. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает число - количество свйоств в объекте.

// const aleksey = {
//   gender: 'male',
//   age: 42,
//   citizenship: 'Russian',
//   'place of residence': 'Nizhnevartosk',
// }

// function countPropertysToObject(description) {
//   let count = 0;
//   for (const key in description) {
//     // if (description.hasOwnProperty(key)) count++
//     count++
//   }
//   return count
// }

// console.log(countPropertysToObject(aleksey));
// // countPropertysToObject(aleksey);



// ========================================================================= //

// 14. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает массив, состоящий из ключей переданного объекта

// const countries = {
//   England: 'London',
//   Australia: 'Sindey',
//   Russia: 'Moscow',
//   USA: 'Washington',
//   Spain: 'Barselona',
//   Italy: 'Rome'
// }

// function backArray(arrKeys) {
//   const myArr = [];
//   for (const key in arrKeys) {
//     myArr.push(key)
//   }
//   return myArr


//   // return Object.keys(quantity).length
// }

// console.log(backArray(countries));
// ========================================================================= //

// FIXME: 15. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает количество объектов(массивы, объекты, функции) внутри переданного объекта.

// const testObject = {
//   buyList: {
//     'milk': false,
//     'meat': true,
//     'bread': true
//   },
//   countries: ['England', 'Australia', 'Russia'],
//   greed: null,
//   money: 1000000000,
//   friends: [100, 100, 100],
//   isHappy: true,
//   foo: function () {
//     console.log('I\'m foo!');
//   }
// }


// function countObjInsideObj(quantity) {

// }


// console.log(countObjInsideObj(countries));
// ========================================================================= //

// 16. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает количество массивов внутри переданного объекта.

// const countries = {
//   England: 'London',
//   Australia: 'Sindey',
//   'More countries': ['Moscow', 'Washington', 'Barselona', 'Rome'],
//   car: ['uaz', 'volvo', 'ferrari', 'vaz', 'opel',],
// }

// function backCountArray(obj) {
//   let count = 0;
//   for (const key in obj) {
//     if (Array.isArray(obj[key])) {
//       count++
//     }
//   }
//   return count
// }

// console.log(backCountArray(countries));


// ========================================================================= //

// 17. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает массив, состоящий из значений переданного объекта.

// const countries = {
//   England: 'London',
//   Australia: 'Sindey',
//   Russia: 'Moscow',
//   USA: 'Washington',
//   Spain: 'Barselona',
//   Italy: 'Rome'
// }


// function backArray(array) {
//   const myArr = [];
//   for (const key in array) {
//     myArr.push(array[key])
//   }
//   return myArr
// }

// console.log(backArray(countries));

// ========================================================================= //

// 18. Задача
// Написать функцию, на вход которой подаётся массив. Функция возвращает объект с ключами типа данных и количеством, которые находятся в массиве.

// Например в массиве testArray:
// const testArray = ['headline', 7, 5, null, ['array'], true, null, -3, 4 'false', 7, 8, 'link', 1, false, 0, -3 'button', undefined, { name: 'Pavel' }];

// После вызова функции вернётся объект:
// {
//   string: 4,
//   number: 9,
//   null: 2,
//   undefined: 1,
//   boolean: 2,
//   object: 2
// };


// FIXME:

// const testArray = ['headline', 7, 5, null, ['array'], true, null, null, -3, 4, 'false', 7, 8, 'link', 1, false, 0, -3, 'button', undefined, { name: 'Pavel' }];

// function backObject(obj) {
//   let stringCount = 0;
//   let numberCount = 0;
//   let nullCount = 0;
//   let undefinedCount = 0;
//   let booleanCount = 0;
//   let objectCount = 0;

//   // Переписать на for-of
//   for (let i = 0; i < obj.length; i++) {
//     if (typeof obj[i] === 'string') {
//       stringCount++
//     } else if (tpyeof obj[i] === 'number') {
//       numberCount++
//     } else if (typeof obj[i] === 'boolean') {
//       booleanCount++
//     } else if (obj[i] === null) {
//       nullCount++
//     } else if (obj[i] === undefined) {
//       undefinedCount++
//     } else {
//       objectCount++
//     }
//   }

//   // Не тот тип данных вернул
//   return (`String: ${stringCount},
//   Number: ${numberCount},
//   null: ${nullCount},
//   undefined: ${undefinedCount},
//   boolean: ${booleanCount},
//   object: ${objectCount}`);
// }

// console.log(backObject(testArray));

//------------------------------------------------ //

// const testArray = ['headline', 7, 5, null, ['array'], true, null, -3, 4, 'false', 7, 8, 'link', 1, false, 0, -3, 'button', undefined, { name: 'Pavel' }];

// function backObject(obj) {
//   let stringCount = 0;
//   let numberCount = 0;
//   let nullCount = 0;
//   let undefinedCount = 0;
//   let booleanCount = 0;
//   let objectCount = 0;

//   for (const el of obj) {
//     if (typeof el === 'string') {
//       stringCount++
//     } if (typeof el === 'number') {
//       numberCount++
//     } if (el === null) {
//       nullCount++
//     } if (typeof el === 'undefined') {
//       undefinedCount++
//     } if (typeof el === 'boolean') {
//       booleanCount++
//     } if (typeof el === 'object' && el !== null) {
//       objectCount++
//     }
//   }

//   return (`String: ${stringCount},
//   Number: ${numberCount},
//   null: ${nullCount},
//   undefined: ${undefinedCount},
//   boolean: ${booleanCount},
//   object: ${objectCount}`);
// }

// console.log(backObject(testArray));



// ========================================================================= //

// 19. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// const user1 = { isAdmin: false };
// const user2 = { isAdmin: false };
// console.log(user1 === user2); // ? false. Так как разные ссылки.

// const copyUser1 = user1;
// console.log(copyUser1 === user1); // ? true. Так как copyUser и user имеют одинаковые ссылки.
// ========================================================================= //

// FIXME:
// 20. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает объект с ключами типа данных и количеством, которые находятся в объекте.

// Например в объекте person;
// const person = {
//   name: "Bob",
//   age: 25,
//   job: "Developer",
//   "like language": "Java Script"
//     test: undefined,
//   nuller: null,
//   isHuman: true,
//   item: ['bag', 'pen']
// };

// После вызова функции вернётся объект:
// {
//   string: 3,
//   number: 1,
//   null: 1,
//   undefined: 1,
//   boolean: 1,
//   object: 1
// };

// ========================================================================= //

// const person = {
//   name: "Bob",
//   age: 25,
//   job: "Developer",
//   "like language": "Java Script",
//   test: undefined,
//   nuller: null,
//   isHuman: true,
//   item: ['bag', 'pen'],
// };



// function backObjectWithKeys(obj) {
//   let stringKeysCount = 0;
//   let numberKeysCount = 0;
//   let nullKeysCount = 0;
//   let undefinedKeysCount = 0;
//   let booleanKeysCount = 0;
//   let objectKeysCount = 0;
//   for (const key in obj) {
//     if (typeof obj[key] === 'string') {
//       stringKeysCount++
//     } if (typeof obj[key] === 'number') {
//       numberKeysCount++
//     } if (obj[key] === null) {
//       nullKeysCount++
//     } if (obj[key] === undefined) {
//       undefinedKeysCount++
//     } if (typeof obj[key] === 'boolean') {
//       booleanKeysCount++
//     } if (typeof obj[key] === 'object' && obj[key] !== null) {
//       objectKeysCount++
//     }
//   }
//   return (`String: ${stringKeysCount},
//   number: ${numberKeysCount},
//   null: ${nullKeysCount},
//   undefined: ${undefinedKeysCount},
//   boolean: ${booleanKeysCount},
//   object: ${objectKeysCount}`)
// }

// console.log(backObjectWithKeys(person));


// ========================================================================= //

// 21. Задача
// Дан объект bob, удалить у него свойства со знаечниями undefined и null.

// const bob = {
//   name: "Bob",
//   age: 25,
//   job: "Developer",
//   "like language": "Java Script",
//   test: undefined,
//   nuller: null,
//   isHuman: true,
//   item: ['bag', 'pen']
// };

// delete bob.test,
// delete bob.nuller;

// console.log(bob);

// ========================================================================= //

// 22. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// const user = {
//   name: "Mark",
//   age: 35,
//   isAdmin: false
// };

// const copyUser = user; // Присваиваем copyUser объект - user. User и copyUser, теперь имеют одинаковые ссылки.
// copyUser.name = "Lawlet"; // Меняем значение у ключа name на "Lawlet".

// console.log(copyUser.name); // ? Так как ссылки одинаковые, то мы увидим "Lawlet".
// console.log(user.name); // ? Так же увидим "Lawlet".
// ========================================================================= //

// 23. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// const user = {
//   name: "Roger",
//   job: "Workman",
//   age: 33,
// };

// console.log(rename(user, "Ben")); // ?

// function rename(obj, newName) {
//   obj.name = newName;
//   return obj;
// }
// ========================================================================= //

// 24. Задача
// Создать объект player со следующими полями:
// name = Vita;
// money = 1000;
// level = 1;

// К созданному объекту добавить следующие поля:
// friendList = пустой массив;
// likes fly = false;

// Создать переменную: propText и присвоить значение isBetaTester.
// Добавить в объект ключ, название которого лежит в переменной propText, со значением true.

// Добавить в массив friendList имя: Alph и Rich.
// Вывести все свойства в консоль в виде: <ключ>: <значение>;.

// const propText = 'isBetaTester'
// const player = {
//   name: 'Vita',
//   money: 1000,
//   level: 1,
// }

// player.friendList = [];
// player['likes fly'] = false;
// // player.propText = 'isBetaTester';
// player[propText] = true;
// player.friendList.push('Alph', 'Rich');


// for (const key in player) {
//   console.log(`${key}: ${player[key]}`);
// }

// ========================================================================= //

// 25. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает новый объект, состоящий только из текстовых свойств переданного объекта.

// const user = {
//   name: "Roger",
//   job: "Workman",
//   age: 33,
// };


// function newObject(obj) {
//   const myObj = {};
//   for (const key in obj) {
//     if (typeof obj[key] === 'string') {
//       myObj[key] = obj[key]
//     }
//   }
//   return myObj
// }

// console.log(newObject(user));

// ========================================================================= //

// 26. Задача
// Создать объект и заполнить выдуманными данными, используя где нужно, вложенный массив или объект:
// Объект автомобиль:

// Серийный номер;
// Марка машины;
// Год выпуска;
// Завод (адрес у завода, название);
// Владелец (имя, фамилия, дата рождения, пол);
// Вывести каждое свойство по отдельности через console.log()


// const car = {
//   'Serial number': 2548968,
//   'Car brand': 'Lamborghini',
//   'Year of release': 1963,
//   factory: ['Italy: Sant-agata bolognese'],
//   Owner: { name: 'Stefano', surname: 'Domenicali', 'date of birth': '11.05.1965', gender: 'male' }
// }

// for (const key in car) {
//   // console.log(`${key}: ${car[key]}`);
// }

// console.log(car['Serial number']);
// console.log(car['Car brand']);
// console.log(car['Year of release']);
// console.log(car.factory);
// console.log(car.Owner);

// console.log(car.Owner.name);
// console.log(car.Owner.surname);
// console.log(car.Owner.gender);


// ========================================================================= //
// TODO:
// 27. Задача
// Создать объект и заполнить выдуманными данными, используя где нужно, вложенный массив или объект:
// Объект магазин:
// Название магазина;
// Категории товаров (еда (список товаров 2-3), хозтовары (список товаров 2-3), косметика (список товаров 2-3));
// Есть ли зона для перекуса;
// Есть ли парковка;
// Количество этажей;
// Список партнёров (названия компаний, сайт партнёра);
// Вывести каждое свойство по отдельности через console.log()


const shop = {
  name: 'Elysian',
  food: ['Prosciutto di Parma', 'Focaccia', 'Fiorentna'],
  'household goods': ['Watering hose', 'Swing', 'Barbecue'],
  cosmetic: ['Cartier', 'Hermes', 'Chanel'],
  'food court': true,
  parking: true,
  'number of floors': 12,
  partners: { 'Traiding house': 'Elysian', 'Perfume boutique': 'Paris', embassy: 'Russia in Paris' }
}

// for (const key in shop) {
//   // console.log(`${key}: ${shop[key]}`);
// }
// console.log(Object.keys(shop));

// console.log(shop.name);
// console.log(shop.food);
// console.log(shop['household goods']);
// console.log(shop.cosmetic);
// console.log(shop['food court']);
// console.log(shop.parking);
// console.log(shop['number of floors']);
// console.log(shop.partners);


// ========================================================================= //

// FIXME:
// 28. Задача
// Создать объект и заполнить выдуманными данными, используя где нужно, вложенный массив или объект:
// Объект магазин:
// Имя ученика;
// id ученика;
// Возраст;
// Активный ли ученик;
// Адрес (название улицы и город (название города и название страны, где город));
// Список технологий, который знает ученик (id технологии и название технологии);


// const myShop = {
//   name: 'Aleksey',
//   'id student': 5552245,
//   age: 42,
//   isActive: true,
//   address: { street: 'friendship of peoples', city: { 'Nighnevartovsk': 'Russia' } }, technologies: [{ id: 6598874 }, { 'name of the technology': 'JavaScript' }]
// }

// console.log(myShop);

// ========================================================================= //


// FIXME:
// 29. Задача
// Придумайте на подобии 26-28 задачи похожие объекты и опишите их и выведите каждое свойство в консоль


// const legendMusicGroup = {
//   name: 'Pink Floyd',
//   'year of education': 1965,
//   'place of creation': 'London, England',
//   genre: ['Progressive rock', 'Art rock', 'Psychedelic rock', 'Acid rock', 'Space rock'],
//   albums: [
//     { 'album title': 'The Piper at the Gates of Dawn', released: 1967 },
//     { 'album title': 'A Saucerful of Secrets', released: 1968 },
//     { 'album title': 'Music from the Film More', released: 1969 },
//     { 'album title': 'Ummagumma', released: 1969 },
//     { 'album title': 'Atom Heart Mother', released: 1970 },
//     { 'album title': 'Meddie', released: 1971 },
//     { 'album title': 'Obscured by Clouds', released: 1972 },
//     { 'album title': 'The Dark Side of the Moon', released: 1973 },
//     { 'album title': 'Wish You Were Here', released: 1975 },
//     { 'album title': 'Animals', released: 1977 },
//     { 'album title': 'The Wall', released: 1979 },
//     { 'album title': 'The Final Cut', released: 1983 },
//     { 'album title': 'A Momentary Lapse of Reason', released: 1987 },
//     { 'album title': 'The Division Bell', released: 1994 },
//     { 'album title': 'The Endless River', released: 2014 },
//   ],
// }

//   // ================================================================

//   // 1967: 'The Piper at the Gates of Dawn',
//   // 1968: 'A Saucerful of Secrets',
//   // 1969: 'Music from the Film More',
//   // //? 1969: 'Ummagumma',
//   // 1970: 'Atom Heart Mother',
//   // 1971: 'Meddie',
//   // 1972: 'Obscured by Clouds',
//   // 1973: 'The Dark Side of the Moon',
//   // 1975: 'Wish You Were Here',
//   // 1977: 'Animals',
//   // 1979: 'The Wall',
//   // 1983: 'The Final Cut',
//   // 1987: 'A Momentary Lapse of Reason',
//   // 1994: 'The Division Bell',
//   // 2014: 'The Endless River',

//   // ===================================================================

//   // 'album title': 'The Piper at the Gates of Dawn', released: 1967,
//   // 'album title': 'A Saucerful of Secrets', released: 1968,
//   // 'album title': 'Music from the Film More', released: 1969,
//   // 'album title': 'Ummagumma', released: 1969,
//   // 'album title': 'Atom Heart Mother', released: 1970,
//   // 'album title': 'Meddie', released: 1971,
//   // 'album title': 'Obscured by Clouds', released: 1972,
//   // 'album title': 'The Dark Side of the Moon', released: 1973,
//   // 'album title': 'Wish You Were Here', released: 1975,
//   // 'album title': 'Animals', released: 1977,
//   // 'album title': 'The Wall', released: 1979,
//   // 'album title': 'The Final Cut', released: 1983,
//   // 'album title': 'A Momentary Lapse of Reason', released: 1987,
//   // 'album title': 'The Division Bell', released: 1994,
//   // 'album title': 'The Endless River', released: 2014,
//   'group composition': ['Syd Barret', 'Roger Waters', 'David Gilmore', 'Richard Wright', 'Nick Mason'],
//   awards: ['1994 - Grammy', '1996 - Rock and Roll Hall of Fame', '1998, 2007 - Grammy Hall of Fame']
// }

// console.log(legendMusicGroup);
// ========================================================================= //

// 30. Задача
// Написать функцию, которая проверяет, является ли переданный параметр примитивом
// FIXME:
//! Проверить на функцию забыл
// function isPrimitive(check) {
//   return typeof check !== 'object' && check !== null
// }

// console.log(isPrimitive('summer'));
// console.log(isPrimitive(123));
// console.log(isPrimitive(true));
// console.log(isPrimitive(undefined));
// console.log(isPrimitive(null));
// console.log(isPrimitive([]));
// console.log(isPrimitive({}));

// ========================================================================= //

// ★ Задачи повышенной сложности ★
// ★ 31. Задача ★
// Написать функцию, на вход которой подаётся массив объектов с сотрудниками, каждый сотрудник имеет имя и возраст [{name: 'Иван', age: 23}, {name: 'Илья', age: 27}, ..., {name: 'Ольга', age: 22}]). Функция возвращает массив, где каждый элемент представляет из себя строку "Имя: Иван, возвраст: 23".


// const personal = [
//   { name: 'Иван', age: 23 },
//   { name: 'Илья', age: 27 },
//   { name: 'Ольга', age: 22 },
//   { name: 'Михаил', age: 30 },
//   { name: 'Никита', age: 25 },
//   { name: 'Елена', age: 24 },
//   { name: 'Thomas', age: 32 }
// ]




// function checkArray(arr) {
//   for (const key in arr) {
//     return arr[key]
//   }
// }

// console.log(checkArray(personal));


// ========================================================================= //

// ★ 32. Задача ★
// Напишите функцию isEmpty, которая проверяет есть ли у объекта свойства или нет.