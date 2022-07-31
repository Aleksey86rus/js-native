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
//   key: "Aha-ha-ha-ha",
// };

// 1. Задача
// Вывести в консоль свойство name.

// console.log(user.name);
// =============================================================== //
// 2. Задача
// Изменить возраст на 4 года меньше.
// user.age = user.age -= 4;
// console.log(user.age);
// =============================================================== //

// 3. Задача
// Вывести в консоль последний город из заграничного массива в объекте "my address".

// console.log(user['my address'].abroad[3]);
// =============================================================== //

// 4. Задача
// Вывести в консоль в столбик все города из заграничного массива.
// const cityAbroad = user['my address'].abroad
// for (const key in cityAbroad) {
//   console.log(`${cityAbroad[key]}`);
// }
// =============================================================== //

// 5. Задача
// Удалить свойство more из объекта user
// delete user.more;
// console.log(user);
// =============================================================== //

// 6. Задача
// Переименуйте Питера на Паркера.

// user.name = 'Parker';
// console.log(user);
// =============================================================== //

// 7. Задача
// Поменйяте место жительство("my address")
// user['my address'].city = 'Saint-Petersburg'
// console.log(user);
// =============================================================== //

// 8. Задача
// Вывести в консоль с помощью цикла все свойства объекта "my address".
// for (const key in user['my address']) {
//   console.log(`${key}: ${user['my address'][key]}`);
// }
// =============================================================== //

// 9. Задача
// Вывести в консоль все свойства объекта user, кроме тех свойства, тип которых равен object.

// for (const key in user) {
//   if (typeof user[key] !== 'object' || typeof user[key] === null) {
//     console.log(`${key}: ${user[key]}`);
//   }
// }
// =============================================================== //

// 10. Задача
// Дан объект user, добавить объекту свойство с ключом, который находится в переменной prop со значением Manager.

// const prop = 'job';

// const user = {
//   name: "Lucas",
//   age: 29,
// };

// user[prop] = 'Manager';
// console.log(user);

// =============================================================== //

// 11. Задача
// Дан объект user, выполнить удаление свойств, которые содержут слово delete в ключе.

// Циклом пользоваться не нужно, просто удалить.
// const user = {
//   name: "Lucas",
//   age: 29,
//   "delete me": 'text',
//   delete: 105,
//   deleteProp: false
// };

// delete user['delete me'];
// delete user.delete;
// delete user.deleteProp;
// console.log(user);

// =============================================================== //

// 12. Задача
// Дан объект car.

// Вывести в консоль серийный номер автомобиля(id)
// Поменять цвет автомобиля на белый.
// Вывести в консоль имена всех пассжиров.
// Добавить ещё одного пассажира 'Roman' к нам.
// Автомобиль сломан, удалить свойство cabin.
// Изменить мощность на 0, но не удалять

// const car = {
//   id: 88005553535,
//   power: 150,
//   color: '#000',
//   cabin: 'sidan',
//   people: ['Alex', 'Aleksey', 'Mark']
// }

// console.log(car.id);
// car.color = '#fff';
// console.log(car);
// console.log(car.people);
// car.people.push('Роман');
// console.log(car);
// delete car.cabin;
// console.log(car);
// car.power = 0;
// console.log(car);

// =============================================================== //

// 13. Задача
//?? Написать функцию, на вход которой подаётся объект и ключ, функция возвращает значение из этого объекта с переданным ключом. Если такого ключа нет, то функция возвращает undefined.

// const modelPhone = {
//   Samsung: 'Galaxy',
//   Nokia: ''
// }

// function getkValueObj(value) {
//   for (const key in value) {
//     if (value.Samsung === value.Samsung) {
//       return (`${key}: ${value[key]}`);
//     } else {
//       return undefined
//     }
//   }
// }

// console.log(getkValueObj(modelPhone));
// =============================================================== //

// 14. Задача
// Написать функция, которая удаляет свойство из объекта, если оно есть.

// const season = {
//   winter: 'snow',
//   spring: 'thaw',
//   summer: 'hot',
//   autum: 'rain'
// };

// function delPropObject(timeOfYear, prop) {
//   delete timeOfYear[prop]
// }

// delPropObject(season, 'autum');
// console.log(season);
// =============================================================== //

// 15. Задача
// Дан объект person, выполнить копирование объекта:

// const copyPerson = {};
// const person = {
//   name: "Bob",
//   age: 25,
//   job: "Developer",
//   "like language": "Java Script"
// };

// for (const key in person) {
//   copyPerson[key] = person[key]
// }
// console.log(copyPerson);
// console.log(copyPerson === person);

// =============================================================== //

// 16. Задача
// Написать функцию, на вход которой подаётся 2 параметра. Функция вычисляет произведение двух чисел. Функция возвращает объект, в котором хранится 2 параметра и результат умножения.

// function calcCompositionTwoNumb(num1, num2) {
//   return {
//     num1,
//     num2,
//     multi: num1 * num2
//   }
// }

// console.log(calcCompositionTwoNumb(30, 10));
// =============================================================== //

// 17. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает число - количество свойств в объекте.

// const colors = {
//   white: '#fff',
//   black: '#000',
//   red: '#f00',
//   green: '#0f0',
//   yellow: 'ff0'
// }

// function countPropToObj(countColors) {
//   let count = 0;
//   for (const key in countColors) {
//     count++
//   }
//   return count
// }
// console.log(countPropToObj(colors));
// =============================================================== //

// 18. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает массив, состоящий из ключей переданного объекта

// const colors = {
//   white: '#fff',
//   black: '#000',
//   red: '#f00',
//   green: '#0f0',
//   yellow: 'ff0'
// }

// function checkArray(arrKeys) {
//   let myArr = [];
//   for (const key in arrKeys) {
//     myArr.push(key)
//   }
//   return myArr
// }
// console.log(checkArray(colors));
// =============================================================== //

// 19. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает количество объектов внутри переданного объекта. В подсчёт идут только следующие структуры данных: массивы, объекты, функции

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
//   let countObj = 0;
//   for (const key in quantity) {
//     if (typeof quantity[key] === 'object' || quantity[key] === null || typeof quantity[key] === 'function') {
//       countObj++
//     }

//   }
//   return countObj
// }

// console.log(countObjInsideObj(testObject));
// =============================================================== //

// 20. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает количество массивов внутри переданного объекта.

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
// }

// function countArrays(arrays) {
//   let countArr = 0;
//   for (const key in arrays) {
//     if (Array.isArray(arrays[key])) {
//       countArr++
//     }
//   }
//   return countArr
// }

// console.log(countArrays(testObject));

// =============================================================== //

// 21. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает массив, состоящий из значений переданного объекта.

// const countries = {
//   England: 'London',
//   Australia: 'Sindey',
//   Russia: 'Moscow',
//   USA: 'Washington',
//   Spain: 'Barselona',
//   Italy: 'Rome'
// }

// function backCountArray(array) {
//   let myArr = [];
//   for (const key in array) {
//     myArr.push(array[key])
//   }
//   return myArr
// }

// console.log(backCountArray(countries));
// =============================================================== //

// 22. Задача
// Написать функци, на вход которой подаётся массив. Функция возвращает объект с ключами типа данных и количеством, которые находятся в массиве.

// Например в массиве testArray:
// const testArray = ['headline', 7, 5, null, ['array'], true, null, -3, 4, 'false', 7, 8, 'link', 1, false, 0, -3, 'button', undefined, { name: 'Pavel' }];

// После вызова функции вернётся объект:
// const result = {
//   string: 4,
//   number: 9,
//   null: 2,
//   undefined: 1,
//   boolean: 2,
//   object: 2
// };

//-------------------------------------------------------------- //

// const testArray = ['headline', 7, 5, null, ['array'], true, null, null, -3, 4, 'false', 7, 8, 'link', 1, false, 0, -3, 'button', undefined, { name: 'Pavel' }];

// function backObject(obj) {
//   let countObjectKeys = {
//     stringCount: 'stringCount',
//     // number: 0,
//     // boolean: 0,
//     // object: 0,
//     // undefined: 0,
//     // null: 0,
//   };
//   let stringCount = 0;
//   let numberCount = 0;
//   let booleanCount = 0;
//   let objectCount = 0;
//   let undefinedCount = 0;
//   let nullCount = 0;

//   // Переписать на for-of
//   for (const el of obj) {
//     if (typeof el === 'string') {
//       stringCount++
//     } if (typeof el === 'number') {
//       numberCount++
//     } if (typeof el === 'boolean') {
//       booleanCount++
//     } if (typeof el === 'object') {
//       objectCount++
//     } if (typeof el === 'undefined') {
//       undefinedCount++
//     } if (el === null) {
//       nullCount++
//     }
//   }
//   return countObjectKeys = { stringCount, numberCount, nullCount, undefinedCount, booleanCount, objectCount }

// }
// console.log(backObject(testArray));

// =============================================================== //

// 23. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль ? Ответ записать в комментарий.

// const user1 = { isAdmin: false };
// const user2 = { isAdmin: false };
// console.log(user1 === user2); // ? false. Так как разные ссылки.

// const copyUser1 = user1;
// console.log(copyUser1 === user1); // ? true. Так как copyUser и user имеют одинаковые ссылки.
// =============================================================== //

// 24. Задача
// Написать функци, на вход которой подаётся объект. Функция возвращает объект с ключами типа данных и количеством, которые находятся в объекте.

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
// string: 3,
// number: 1,
// null: 1,
// undefined: 1,
// boolean: 1,
// object: 1
// };
// --------------------------------------------------------------- //

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
//   const countObjectKeys = {
//     nullKeysCount: 0,
//     undefinedKeysCount: 0,
//     stringKeysCount: 0,
//     numberKeysCount: 0,
//     booleanKeysCount: 0,
//     objectKeysCount: 0
//   }
//   for (const key in obj) {
//     if (obj[key] === null) {
//       nullKeysCount++
//     } else if (obj[key] === undefined) {
//       undefinedKeysCount++
//     } else if (typeof obj[key] === 'string') {
//       stringKeysCount++
//     } else if (typeof obj[key] === 'number') {
//       numberKeysCount++
//     } else if (typeof obj[key] === 'boolean') {
//       booleanKeysCount++
//     } else if (typeof obj[key] === 'object') {
//       objectKeysCount++
//     }
//   }
//   return countObjectKeys
// }
// console.log(backObjectWithKeys(person));


// =============================================================== //

// 25. Задача
// Дан объект bob, удалить у него все свойства со знаечниями undefined и null, пользуясь циклом.

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

// for (const key in bob) {
//   if (bob[key] === undefined || bob[key] === null) {
//     delete bob[key]
//   }
// }
// console.log(bob);

// =============================================================== //

// 26. Задача
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
// =============================================================== //

// 27. Задача
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
// =============================================================== //

// 28. Задача
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

// =============================================================== //

// 29. Задача
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

// =============================================================== //

// 30. Задача
// Создать объект и заполнить выдуманными данными, используя где нужно, вложенный массив или объект:
// ! Не нужно использоваться циклы, просто в лоб console.log(); Объект автомобиль:

// Серийный номер;
// Марка машины;
// Год выпуска;
// Завод (адрес у завода, название);
// Владелец (имя, фамилия, дата рождения, пол);
// Вывести каждое значение всех свойств по отдельности через console.log().

// const car = {
//   'Serial number': 2548968,
//   'Car brand': 'Lamborghini',
//   'Year of release': 1963,
//   factory: ['Italy: Sant-agata bolognese'],
//   Owner: { name: 'Stefano', surname: 'Domenicali', 'date of birth': '11.05.1965', gender: 'male' }
// }

// console.log(car['Serial number']);
// console.log(car['Car brand']);
// console.log(car['Year of release']);
// console.log(car.factory);
// console.log(car.Owner);

// console.log(car.Owner.name);
// console.log(car.Owner.surname);
// console.log(car.Owner.gender);

// =============================================================== //

// 31. Задача
// Создать объект и заполнить выдуманными данными, используя где нужно, вложенный массив или объект:
// Объект магазин:

// Название магазина;
// Категории товаров (еда (список товаров 2-3), хозтовары (список товаров 2-3), косметика (список товаров 2-3));
// Есть ли зона для перекуса;
// Есть ли парковка;
// Количество этажей;
// Список партнёров (названия компаний, сайт партнёра);
// Вывести каждое значение всех свойств по отдельности через console.log().

// const shop = {
//   name: 'Elysian',
//   food: ['Prosciutto di Parma', 'Focaccia', 'Fiorentna'],
//   'household goods': ['Watering hose', 'Swing', 'Barbecue'],
//   cosmetic: ['Cartier', 'Hermes', 'Chanel'],
//   'food court': true,
//   parking: true,
//   'number of floors': 12,
//   partners: { 'Traiding house': 'Elysian', 'Perfume boutique': 'Paris', embassy: 'Russia in Paris' }
// }

// console.log(shop.name);
// console.log(shop.food);
// console.log(shop['household goods']);
// console.log(shop.cosmetic);
// console.log(shop['food court']);
// console.log(shop.parking);
// console.log(shop['number of floors']);
// console.log(shop.partners);
// console.log(shop.partners['Traiding house']);
// console.log(shop.partners['Perfume boutique']);
// console.log(shop.partners.embassy);
// =============================================================== //

// 32. Задача
// Создать объект и заполнить выдуманными данными, используя где нужно, вложенный массив или объект:
// Объект магазин:

// Имя ученика;
// id ученика;
// Возраст;
// Активный ли ученик;
// Адрес (название улицы и город (название города и название страны, где город));
// Список технологий, который знает ученик (id технологии и название технологии);
// Вывести каждое значение всех свойств по отдельности через console.log().

// const myShop = {
//   name: 'Aleksey',
//   'id student': 5552245,
//   age: 42,
//   isActive: true,
//   address: {
//     street: 'friendship of peoples',
//     city: { 'Nighnevartovsk': 'Russia' }
//   },
//   technologies: [
//     { id: 6598874 },
//     { 'name of the technology': 'JavaScript' }
//   ]
// }

// console.log(myShop.name);
// console.log(myShop['id student']);
// console.log(myShop.age);
// console.log(myShop.isActive);
// console.log(myShop.address.street);
// console.log(myShop.address.city);
// console.log(myShop.address.city['Nighnevartovsk']);
// console.log(myShop.technologies[0].id);
// console.log(myShop.technologies[1]['name of the technology']);


// =============================================================== //

// 33. Задача
// Придумайте на подобии 26-28 задачи похожие объекты и опишите их и выведите каждое свойство в консоль.

// const legendMusicGroup = {
//   name: 'Pink Floyd',
//   'year of education': 1965,
//   'place of creation': 'London, England',
//   genre: ['Progressive rock', 'Art rock', 'Psychedelic rock', 'Acid rock', 'Space rock'],
//   albums: [
//     { 'album title': 'The Piper at the Gates of Dawn', released: 1967 },
//     { 'album title': 'A Saucerful of Secrets', released: 1968 },
//     { 'album title': 'Music from the Film More', released: 1969 },
//   ],
//   'group composition': ['Syd Barret', 'Roger Waters', 'David Gilmore', 'Richard Wright', 'Nick Mason'],
//   awards: ['1994 - Grammy', '1996 - Rock and Roll Hall of Fame', '1998, 2007 - Grammy Hall of Fame']
// }

// console.log(legendMusicGroup);
// console.log(legendMusicGroup.name);
// console.log(legendMusicGroup['year of education']);
// console.log(legendMusicGroup['place of creation']);
// console.log(legendMusicGroup.genre);
// console.log(legendMusicGroup.albums);
// console.log(legendMusicGroup['group composition']);
// console.log(legendMusicGroup.awards);

// =============================================================== //

// 34. Задача
// Написать функцию, которая проверяет, является ли переданный параметр примитивом.
// function isPrimitive(check) {
//   return typeof check !== 'object' && check !== null && check !== 'function'
// }

// console.log(isPrimitive('summer'));
// console.log(isPrimitive(123));
// console.log(isPrimitive(true));
// console.log(isPrimitive(undefined));
// console.log(isPrimitive(null));
// console.log(isPrimitive([]));
// console.log(isPrimitive({}));
// console.log(isPrimitive('function'));
// =============================================================== //

// 35. Задача
// Выполнить рефакторинг кода.

// function changeTaskStatusAC(todolistId, taskId, newIsDone) {
//   const CHANGE_TASK_STATUS = 'CHANGE-TASK-STATUS';
//   return {
//     type: CHANGE_TASK_STATUS,
//     todolistId: todolistId,
//     taskId: taskId,
//     isDone: newIsDone
//   };
// }

// function changeTaskStatusAC(todolistId, taskId, isDone) {
//   return {
//     type: 'CHANGE-TASK-STATUS',
//     todolistId,
//     taskId,
//     isDone
//   };
// }
// console.log(changeTaskStatusAC('text', 20, true));

  // ★ Задачи повышенной сложности ★
// =============================================================== //

  // ★ 36. Задача ★
  // Вывести каждое значение всех свойств и подствойст по отдельности через console.log()

//   const man = {
//     name: 'John',
//   age: 28,
//   mother: {
//     name: "Kate",
//   age: 50,
//   work: {
//     position: "doctor",
//   experience: 15
//         },
//   parents: [
//   {
//     name: "Kevin",
//   age: 80,
//   favoriteDish: {
//     title: "borscht",
//   ingredients: [
//   {title: "beet", amount: 3 },
//   {title: "potatoes", amount: 5 },
//   {title: "carrot", amount: 1 },
//   ]
//                 }
//             },
//   {
//     name: "Jennifer",
//   age: 78,
//   favoriteDish: {
//     title: "sushi",
//   ingredients: [
//   {title: "fish", amount: 1 },
//   {title: "rise", amount: 0.5 }
//   ]
//                 }
//             },
//   ]
//     }
// };
// =============================================================== //

  // ★ 37. Задача ★
  // Написать функцию, на вход которой подаётся массив объектов с сотрудниками, каждый сотрудник имеет имя и возраст[{ name: 'Иван', age: 23 }, { name: 'Илья', age: 27 }, ..., { name: 'Ольга', age: 22 }]). Фукция возвращает массив, где каждый элемент представляет из себя строку "Имя: Иван, возвраст: 23".
// =============================================================== //

  // ★ 38. Задача ★
  // Напишите функцию isEmpty, которая проверяет есть ли у объекта свойства или нет.