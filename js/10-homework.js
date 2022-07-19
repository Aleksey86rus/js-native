
//Задачи по теме 10. Object
//Дан объект user, выполнить задачи 1-6:

const user = {
  name: "Peter",
  age: 33,
  job: "Developer",

  "my address": {
    city: "Moscow",
    country: "Russia",
    abroad: ["Vienna", "Paris", "London", "Miami"]
  },
  item: ["bag", "book", "pencil"],
  more: null,
  key: 'Aha-ha-ha'
};

// =========================================================================

// 1. Задача (READ)
// Вывести в консоль свойство name;

// const user = {
//   name: 'Peter'
// }
// console.log(user.name);
// =========================================================================

// 2. Задача (UPDATE)
// Изменить возраст на 4 года меньше;

// user.age -= 4;
// console.log(user.age);

// =========================================================================

// 3. Задача
// Вывести в консоль c помощью цикла  все свойства объекта "my address";
// const myAddress = user['my address'];
// for (const key in myAddress) {
//   console.log(`${key}: ${myAddress[key]}`);
// }

// console.log(user['my address']);

// =========================================================================

// 4. Задача
// Вывести в консоль все свойства объекта user, кроме тех свойства, тип которых равен object;

// for (const key in user) {
//   if (typeof user[key] !== 'object' || user[key] === null) {
//     console.log(`${key}: ${user[key]}`);
//   }
// }



//user[key] === null
// -10 до 0 && от 1 до 10



// =========================================================================

// 5. Задача
// Вывести в консоль последний город из заграничного массива в объекте "my address";
// =========================================================================

// 6. Задача
// Вывести в консоль в столбик все города из заграничного массива;
// =========================================================================

// 7. Задача
// Дан объект person, выполнить копирование объекта:

// const person = {
//     name: "Bob",
//     age: 25,
//     job: "Developer",
//     "like language": "Java Script"
// };
// =========================================================================

// 8. Задача
// Дан объект user, добавить объекту свойство с ключом, который находится в переменной prop со значением Manager.

// const prop = 'job';

// const user = {
//     name: "Lucas",
//     age: 29,
// };
// =========================================================================

// 9. Задача
// Дан объект user, добавить объекту свойство с ключом, который находится в переменной prop со значением Manager.
// =========================================================================

// 10. Задача
// Написать функцию, на вход которой подаётся объект и ключ, функция возвращает значение из этого объекта с переданным ключом. Если такого ключа нет, то функция возвращает undefined.
// =========================================================================

// 11. Задача
// Написать функция, которая удаляет свойство из объекта, если оно есть.
// =========================================================================

// 12. Задача
// Написать функцию, на вход которой подаётся 2 параметра. Функция вычисляет произведение двух чисел. Функция возвращает объект, в котором хранится 2 параметра и результат умножения.
// =========================================================================

// 13. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает число - количество свйоств в объекте.
// =========================================================================

// 14. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает массив, состоящий из ключей переданного объекта
// =========================================================================

// 15. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает количество объектов внутри переданного объекта.
// =========================================================================

// 16. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает количество массивов внутри переданного объекта.
// =========================================================================

// 17. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает массив, состоящий из значений переданного объекта.
// =========================================================================

// 18. Задача
// Написать функци, на вход которой подаётся массив. Функция возвращает объект с ключами типа данных и количеством, которые находятся в массиве.

// Например в массиве testArray:
// const testArray = ['headline', 7, 5, null, ['array'], true, null, -3, 4 'false', 7, 8, 'link', 1, false, 0, -3 'button', undefined, {name: 'Pavel'}];

// После вызова функции вернётся объект:
// {
//     string: 4,
//     number: 9,
//     null: 2,
//     undefined: 1,
//     boolean: 2,
//     object: 2
// };
// =========================================================================

// 19. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// const user1 = { isAdmin: false };
// const user2 = { isAdmin: false };
// console.log(user1 === user2); // ?

// const copyUser1 = user1;
// console.log(copyUser1 === user1); // ?
// =========================================================================

// 20. Задача
// Написать функци, на вход которой подаётся объект. Функция возвращает объект с ключами типа данных и количеством, которые находятся в объекте.

// Например в объекте person;
// const person = {
//     name: "Bob",
//     age: 25,
//     job: "Developer",
//     "like language": "Java Script"
//     test: undefined,
//     nuller: null,
//     isHuman: true,
//     item: ['bag', 'pen']
// };

// После вызова функции вернётся объект:
// {
//     string: 3,
//     number: 1,
//     null: 1,
//     undefined: 1,
//     boolean: 1,
//     object: 1
// };
// =========================================================================

// 21. Задача
// Дан объект bob, удалить у него свойства со знаечниями undefind и null.

// const bob = {
//     name: "Bob",
//     age: 25,
//     job: "Developer",
//     "like language": "Java Script"
//     test: undefined,
//     nuller: null,
//     isHuman: true,
//     item: ['bag', 'pen']
// };
// =========================================================================

// 22. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// const user = {
//     name: "Mark",
//     age: 35,
//     isAdmin: false
// };

// const copyUser = user;
// copyUser.name = "Lawlet";

// console.log(copyUser.name); // ?
// console.log(user.name); // ?
// =========================================================================

// 23. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// const user = {
//     name: "Roger",
//     job: "Workman"
//     age: 33,
// };

// console.log(createCopy(user, "Ben")); // ?

// function createCopy(obj, newName) {
//     obj.name = newName;
//     return obj;
// }
// =========================================================================

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
// =========================================================================

// 25. Задача
// Написать функцию, на вход которой подаётся объект. Функция возвращает новый объект, состоящий только из текстовых свойств переданного объекта.
// =========================================================================

// 26. Задача
// Создать объект и заполнить выдуманными данными, используя где нужно, вложенный массив или объект:
// Объект автомобиль:

// Серийный номер;
// Марка машины;
// Год выпуска;
// Завод (адрес у завода, название);
// Владелец (имя, фамилия, дата рождения, пол);
// Вывести каждое свойство по отдельности через console.log()
// =========================================================================

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
// =========================================================================

// 28. Задача
// Создать объект и заполнить выдуманными данными, используя где нужно, вложенный массив или объект:
// Объект магазин:

// Имя ученика;
// id ученика;
// Возраст;
// Активный ли ученик;
// Адрес (название улицы и город (название города и название страны, где город));
// Список технологий, который знает ученик (id технологии и название технологии);
// =========================================================================

// 29. Задача
// Придумайте на подобии 26-28 задачи похожие объекты и опишите их и выведите каждое свойство в консоль
// =========================================================================

// 30. Задача
// Написать функцию, которая проверяет, является ли переданный параметр примитивом
// =========================================================================

// ★ Задачи повышенной сложности ★
// ★ 31. Задача ★
// Написать функцию, на вход которой подаётся массив объектов с сотрудниками, каждый сотрудник имеет имя и возраст [{name: 'Иван', age: 23}, {name: 'Илья', age: 27}, ..., {name: 'Ольга', age: 22}]). Фукция возвращает массив, где каждый элемент представляет из себя строку "Имя: Иван, возвраст: 23".
// =========================================================================

// ★ 32. Задача ★
// Напишите функцию isEmpty, которая проверяет есть ли у объекта свойства или нет.
