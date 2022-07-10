// * ===== Function (Функции) ===== * //

// Функция - набор команд, которая решает конкретную задачу

// Примеры функций:
// parseInt()
// String()
// Number()


// Создадим функцию, на вход которой подаём имя, а функция выводит в консоль приветствие

// Имя функции - глагол
// Остальные требования, как к перменной

function welcomeName(name) {
  console.log('Hello ' + name);
}

// Использование своей функции
welcomeName('Pavel')
welcomeName('Misha')




function checkLada(carName) {
  return carName === '6'
}

console.log(checkLada('6'));
console.log(checkLada('BMW'));




function sum(a, b, c) {
  console.log(a);
  return a + b + c
}

console.log(sum(77, 7, 5));

// Примыре частых название (приставок)
// * show / log
// * calc / get

// create / generate
// change / set
// check / is / has -- boolean


// ? == Как писать функции? == //
// 1. Имя функции (что она делает?)
// 2. Сколько пармаетров на вход? (От условия задачи)
// 3. Есть ли параметры по умолчанию?
// 4. Что функция возвращает? (return)
// =================================================
// 5. Проверка (тесты)
// 6. Попробовать упростить код (рефакторинг)


// Написать функцию, которая принимает на вход 2 или 3 числа
// Функция возвращает сумму чисел


function sumThreeNum(num1, num2, num3 = 0) {
  // Неявно: let num1 = 3; let num2 = 500; let num3;
  return num1 + num2 + num3;
}

console.log(sumThreeNum(3, 7, 5));
console.log(sumThreeNum(3, 500, 100));
console.log(sumThreeNum(3, 500)); //*
// console.log(sumThreeNum(3)); // NaN


// ! return - завершает работу функции, за ним код не выполняется



// * === Функции и массивы(объект)

// * 1. Функция может возвращать новый массив(объект)
// * 2. Функция может мутировать переданный массив(объект)


const testArray = [-41, 32, -45, 432, 87, 54, 24, -13];
// Написать функцию, на вход которой подаётся массив
// Функция создаёт новый массив, заменяя отрицательные на полодительные числа


// * == 1. Функция может возвращать новый массив(объект)
function changeNegToPos(arr) {

  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      newArr.push(-arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(changeNegToPos(testArray)); // Неявно arr = testArry
console.log(testArray);


// * 2. Функция может мутировать переданный массив(объект)

function mutateNegToPos(arr) {
  for (let i = 0; i < arr.length; i++) {
    // if ( arr[i]< 0) {
    //   arr[i] = -arr[i]
    // } 
    arr[i] < 0 && (arr[i] = -arr[i]);
  }
}

console.log(mutateNegToPos(testArray));
console.log(testArray);



// * Рефакторинг

// Только с простыми if
// if -> тернарный оператор (if-else) / логическое И (if без else)
// if -> return <boolean expression>

// for -> for of (если arr[i] только для чтения (не мутируем массив))
