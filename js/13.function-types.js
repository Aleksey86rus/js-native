// * ===== Function types ===== * //

// * Function Declaration

console.log(sum1(3, 6));

function sum1(a, b) {
  return a + b
}

console.log(sum1(11, 6));



// * Function Expression

// console.log(sum2(3, 6)); // 

const sum2 = function (a, b) {
  return a + b
}

console.log(sum2(55, 45));


// * Arrow Function

const sum3 = (a, b) => {
  return a + b
}

console.log(sum3(55, 5));

// 1. Если входной параметр в стрелочной функции один, то круглые скобки можно не писать

// * 2. Если возвращаемое значение можно записать в одну строчку, то return и фигурные скобки можно не писать


const sum4 = (a, b) => a + b
console.log(sum3(60, 5));

// ! У стрелочной функции нету arguments


// Написать функцию, которая принимает на вход много параметров и возвращает сумму чисел (AF)
// * rest - оператор (есть у всех)
const summator = (...params) => {
  console.log(params); //  [3, 6543, 76546, 756, 867, 8978]

  let sum = 0
  for (const el of params) {
    sum += el
  }
  return sum
}

console.log(summator(3, 6543, 76546, 756, 867, 8978));

console.log(Math.max(3, 6543, 76546, 756, 867, 8978));
console.log(Math.max(...[3, 6543, 76546, 756, 867, 8978]));





const sum10 = (a, b) => a + b

const sum11 = function (a, b) {
  return a + b
}


// hoisting (не путать с hosting)
function sum12(a, b) {

  return a + b
}

console.log(sum10(1, 5));
console.log(sum11(5, 4));
console.log(sum12(10, 5));





// * to be continued ...

const callback = (p, v) => p + v
const summator2 = (...params) => params.reduce(callback)

console.log(summator2(3, 6543, 76546, 756, 867, 8978));



console.log('~~~~~~~~~~~~~~~~~~~~~~')


// Написать функцию, которая проверяет является ли переданная переменная объектом (AF)

const checkObj = param => (
  param !== null && typeof param === 'object'
  || typeof param === 'function'
)

// const checkObj2 = param => param !== null && typeof param === 'object' || typeof param === 'function'

// console.log(checkObj({}));
// console.log(checkObj([]));
// console.log(checkObj(() => { }));
// console.log(checkObj(10));
// console.log(checkObj('string'));
// console.log(checkObj(null));
// console.log(checkObj(undefined));


// Написать функцию (FE), которая проверят перемнную, является ли она функцией или нет

// const myFunc = function (param) {
//   return typeof param === 'function'
// }

// console.log(myFunc({}));
// console.log(myFunc(() => { }));


