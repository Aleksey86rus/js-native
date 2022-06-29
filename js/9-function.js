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






