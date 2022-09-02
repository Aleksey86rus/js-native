// * ===== Number ext ===== * //

// 1. Number(<any>) // Приводит к типу number
// 2. parseInt('19.5px') // 19
// 3. parseFloat('19.5px') // 19.5
// 4. isNaN(<any>) // Проверка на NaN (неявно преобразует к типу Number)

// 4.5. Number.isNaN() // Не приводит к типу Number

console.log('gfsdgfd');
console.log(Number('gfsdgfd')); // NaN
console.log(Number('10101')); // 10101

console.log(Number.isNaN('gfsdgfd')); // false (не NaN)
console.log(isNaN('gfsdgfd')); // true (NaN)


// * === Округление
// * Округление до n знака
// 5. .toFixed(n) // Округляет число до n знаков после запятой и возвращает СТРОЧКУ

const fixNum = 10.654654.toFixed(2)
console.log(fixNum); // '10.65'

console.log(10.655.toFixed(2)); // ! "10.65" (По правилам мат. 10.66)
console.log(10.656.toFixed(2)); // "10.66"

// * Округление до ЦЕЛОГО
// 6. Math.floor(<number>) // * Округляет в меньшую сторону
// 7. Math.ceil(<number>) // Орругляет в большую сторону
// 8. Math.round(<number>)  // Орругляет до ближайшего целого


// * Другие функции в Math * //

// 9. Math.max(a, b, c, ..., z) // Возвращает наибольшее число из переданных
// 10. Math.min(a, b, c, ..., z) // Возвращает наименьшее число из переданных

console.log(Math.max(3, 7, 8, 9, 1, 15, 3, 4, 5)); // 15
console.log(Math.max([3, 7, 8, 9, 1, 15, 3, 4, 5])); // NaN
console.log(Math.max(...[3, 7, 8, 9, 1, 15, 3, 4, 5])); // 15 - spread оператор


// * 11. Math.random() // * Возвращает случайное число от 0 до 1 НЕ вкл

console.log(Math.random()); // 0.010375426317615899

// Случайное ЦЕЛОЕ число в диапазоне от min вкл до max вкл

// [7 15]
// function randInt(min, max) {

//   const step1 = Math.random(); // [0; 1) => 0 ... 0.999999999 | * max
//   const step2 = step1 * (max + 1 - min) // [0, max + 1 - min)
//   const step3 = step2 + min // [min, max + 1)

//   return Math.floor(step3)

//   // +1 чтобы получить включительно
//   // Math.floor() - чтобы получить целое
// }



function randInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min)
}


// Если случайное число в диапазоне от 0 до 5 вкл умножить на 2

// [0, 1)  | *(15+1)
// [0, 16) | +7
// [7, 23) |

// [0, 1)  | *(15+1 - 7)
// [0, 9) | +7
// [7, 16) |


console.log(randInt(0, 1));
console.log(randInt(0, 1));
console.log(randInt(0, 1));
console.log(randInt(0, 1));
console.log(randInt(0, 1));
console.log(randInt(0, 1));
console.log(randInt(0, 1));
console.log(randInt(0, 1));
















