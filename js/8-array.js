// * ===== Немного теории * ===== //


// * Примитивы:
// null, undefined
// number, string, boolean

// * ссылочные типы [структуры данных]
// object -> [array]

// ! bigint, symbol

// * ===== Array (Массив) ===== * //

const array = []; // Пустой массив

console.log(typeof array); // object


// * Нумерация
//                      0        1       2        3
const userNameList = ['Maks', 'Alex', 'Alise', 'Pupa'];


// * === Вывод в консоль: ==== * //
console.log(userNameList);
console.log(userNameList.length); // Количество символов - 4


console.log(userNameList[0]); // 'Maks'
console.log(userNameList[1]); // 'Alex'
console.log(userNameList[4]); // undefined

// * Вывод последнего элемента
console.log(userNameList[3]); // 'Pupa'

console.log(userNameList[userNameList.length - 1]); // Последний элемент (Первый с конца)
console.log(userNameList[userNameList.length - 2]); // Предпоследний элемент

console.log('##########################');
// * === Методы массива === * //

const taskArray = [7, 12, 32, 44, 50];

// * 1) .push() - добавляет элемент(ы) в конец массива, изменяя сам массив 
// (функция возвращает длину обновлённого массива)

taskArray.push(10); // [7, 12, 32, 44, 50, 10]
taskArray.push(55, 76); // [7, 12, 32, 44, 50, 10, 55, 76]

console.log(taskArray);

// * 2) .unshift() - добавляет элемент(ы) в начало
// (функция возвращает длину обновлённого массива)

taskArray.unshift(0); // [0, 7, 12, 32, 44, 50, 10, 55, 76]
console.log(taskArray);

// * 3) .pop() - удаляет только последний элемент
// Возвращает удалённый элемент

console.log(taskArray.pop()); // 76 -тот элемент который удалили
console.log(taskArray); // [0, 7, 12, 32, 44, 50, 10, 55]


// * 4) .shift() - удаляет только первый элемент
// Возвращает удалённый элемент
taskArray.shift();  //[7, 12, 32, 44, 50, 10, 55]
console.log(taskArray);

// * 5) Array.isArray() - проверка на массив
console.log(typeof taskArray); // object
console.log(Array.isArray(taskArray)); // true
console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true


// ? 6) Array.from() - преобразует массиво-подобную структуру данных к Array
const newArr = Array.from('text user');
console.log(newArr);


console.log('##########################');
// * === Обратиться сразу ко всем элементам массива === * //
// * Перебор (перебрать массив) * //
const testList = [1, 3, -5, 9, 42];


// * 1 способ
let sum = 0
for (let i = 0; i < testList.length; i++) {
  // console.log(testList); // Просто вывел массив столько раз, сколько и элементов
  console.log(testList[i]);  // Чтение элемента
  sum += testList[i];
  // testList[i] = 'ha-ha'; // Замена значения эленмента
  console.log(i); // индекс текущего элемента

  if (i === testList.length - 1) {
    testList[i] = 'hi-hi';
  }
}
console.log(testList);
console.log(sum);


// * 2 способ (только для чтения, заменить значение не получится)
for (const element of testList) {
  // console.log(testList); // Просто вывел массив столько раз, сколько и элементов
  console.log(element); // Чтение элемента
}



// * Дополнительная информация:

// * Объект (массив) - ссылочный тип данных * //
let testNum = 10; // Хранит значение 10
let copyTestNum = testNum; // Копируем значение 10
copyTestNum = 20;
console.log(testNum); // 10
console.log(copyTestNum); // 20


const cityList = ['Moscow', 'London', 'Los Angeles']; // Хранит ссылку
const copyCityList = cityList; // Копируем ссылку
console.log(cityList);
console.log(copyCityList);

copyCityList[1] = 'Prontera';

console.log(cityList);
console.log(copyCityList);

// Проверка, что объекта равны (ключи от дома одинаковы)
console.log(cityList === copyCityList); // true


const anotherCityList = ['Moscow', 'Prontera', 'Los Angeles'];
console.log(cityList === anotherCityList); // false
console.log([] === []); // false






