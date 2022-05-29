// * ===== Condition (условие) ===== * //

// Оператор if
// Оператор else

// * Пример

// let answer = Number(prompt('Сколько будет 20 + 5?'));

// let isCondition = answer === 25;

// if (isCondition) {
//   console.log('Верно');
// }
// console.log('The end');


// let anotherAnswer = prompt('Чему равен интеграл по dx?');

// if (anotherAnswer === 'x') {
//   console.log(true);
// } else {
//   console.log('адреналин раш!');
// }


// let anotherAnswer = prompt('Чему равен интеграл по dx?');
// console.log(anotherAnswer);

// if (anotherAnswer === 'x') {
//   console.log(true);
// } else if (anotherAnswer === null) {
//   console.log('Отмена');
// } else {
//   console.log('адреналин раш!');
// }


// * Промежутки
// Пользователь должен попасть в какой-то промежуток
// От 1 до 10 вкл [1; 10]

let numUser = 0;
if (numUser >= 1 && numUser <= 10) {
  console.log('Win!');
}




// Пользователь должен попасть в какой-то промежуток
// От 1 до 7 не вкл [-5; 7)


// let numUser2 = 7;
// if (numUser2 >= -5 && numUser2 < 7) {
//   console.log('Win!');
// }

// Надо не попасть в промежуток от 5 до 15 вкл
let luck = 10;
if (luck < 5 || luck > 15) {
  console.log('luck');
}

// let luck = 10;
// if (!(luck >= 5 && luck <= 15)) {
//   console.log('luck');
// }

// * Проверка на чётность (делимость)
let testNum = 22;
if (testNum % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
}

// * Проверка делится ли число на 177?

let testNumber = 355;
if (testNumber % 177 === 0) {
  console.log('Делится без остатка');
} else {
  console.log('Не делится без остатка');
}


// * Проверка на нечётность (делимость)
let testNum2 = 22;
if (testNum2 % 2 !== 0) {
  console.log('odd');
}
// !(20-22)
// 1-19 вкл
// 18
// 19

// * Проверки на типы
// * switch case
// * Тернарный оператор




