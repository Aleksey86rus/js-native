// * ===== number ===== * //

// * part 1 * //
// 1 - 8 вкл

// Математика

let num = 7;
let num2 = 10;
console.log(7 + 10);
// "7 + 10 = 17"

// Красивый вид:
console.log(num + " + " + num2 + " = " + (num + num2));

// + Сложение
// - Вычитание
// * Умножение
// / деление
// % деление по модулю (остаток при делении)
// ** возведение в степень

console.log(90 / 60); // 1.5
console.log(90 % 60); //

// console.log(10000 / 1500);
// console.log(10000 % 1500);


// * part 2s * //

// * ===== (Пре/Пост)Инкремент ++ / (Пре/Пост)Декремент --
console.log('====== Increment/Decrement =====');
let index = 0;
// index++; // index = index + 1;
// ++index; // index = index + 1;

// console.log(index++ + index); // 0 + 1
console.log(++index + index); // 1 + 1


// console.log(10++); // SyntaxError
// console.log(11); // SyntaxError


// console.log(index--);
// console.log(index);

// ? А что если хотим увеличить переменную на 10?

let testNum = 0;

testNum += 10; // testNum = testNum + 10;
// testNum *= 10; // testNum = testNum * 10;
// testNum /= 10; // testNum = testNum / 10;
// testNum -= 10; // testNum = testNum - 10;
// testNum %= 10; // testNum = testNum % 10;


console.log(testNum);

// * =====  Неявное преобразование:
console.log("333" + 3); // "3333"
console.log("333" * 3); // 999
console.log("333" + "333"); // "333333"
console.log("5" * "5"); // 25
console.log("5px" * 3); // NaN
console.log(3 * "20"); // 60
console.log(3 + "20px"); // "320px"
console.log("40" + 20 + 10); // "402010" // ! Следи за порядком действия
console.log("40" + (20 + 10)); // "4030"



