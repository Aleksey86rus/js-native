function test() {
  return 1
}
console.log(typeof test); // 'function'
console.log(typeof null); // 'null'
console.log(typeof []); // 'object'

console.log(String([])); // ''
console.log(Number([])); // Object [] -> String '' -> Number 0

console.log(Number([10])); // 10
console.log(Number([10, 10])); // '10, 10' -> NaN
console.log(Number('10, 10')); // NaN
console.log(Number('10 + 10')); // NaN

// * ===== Object ===== * //

const objTest = {}
console.log(typeof objTest); // 'obejct'


const arr = [
  10,
  4
]
console.log(arr);


// * === Create (создание)
const user = {
  // Поля (Свойства) состоит из
  // key: value
  name: 'Bob',
  age: 33,
  isMonster: false,
  'test': 108,
  'likes cat': true

  // ключ имеет тип string, но когда мы создаём объект, мы можем не писать кавычки
}

console.log(user);

// * Действия над объектами
// CRUD - Create Read Update Delete

// * === Read (Прочитать значение)
console.log(user.age); // 33 +
console.log(user['age']); // 33

console.log(user.test); // 108 +
console.log(user['test']); // 108

// ? Вычисляемое свойство объекта
const query = 'isMonster';
console.log(user[query]); // false

console.log(user['likes cat']);

console.log(user.pupa); // undefined




// * === Update (мутирование)
user.name = 'Gale'
user['likes cat'] = false

// Если обращаемся к тому свйоству, которого нет и присваиваем значение, то мы создаём новое свойство
// * === Create (создание нового свойства)
user.isAdmin = true
user['likes catssss'] = true

console.log(user);


// * === delete (удаление)
delete user['likes catssss']
delete user.isAdmin

console.log(user);


// * === Как обратиться ко всем свойствам сразу? === * //

// for, for-of - массивы (forEach)
// for-in - для объектов


for (const el of arr) {
  console.log(arr); // array
  console.log(el); // value
  // ! Нету индекса, поэтому цикл только для чтения
}

for (const key in user) {
  // console.log(user); // object
  // console.log(key); // key
  // console.log(user.key); // ! Обращаемся к свойству ключ, которого не существует
  // console.log(user[key]); // value

  console.log(`${key}: ${user[key]}`);
  // В этому цикле можно мутировать и просто использовать для чтения
}


// =========================== EXAMPS ===================================== //
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


// -------------------------------------------------------------------- //

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




// * Благодаря объектам мы можем вернуть более одного параметра из функции
