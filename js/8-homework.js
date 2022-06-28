
// Задачи по теме 8. Array
// 1. Задача
// Создать массив любой длины, состоящий из чисел. Вывести в консоль количество элементов в массиве.

// const MyFirstArray = [2, 3, 4, 5, 6, 7,];
// console.log(MyFirstArray);
// console.log(typeof MyFirstArray);

// =======================================================================

// 2. Задача
// Создать массив любой длины, состоящий из чисел. Вывести в консоль индекс последнего элемента. Код должен работать для массива любой длины.

// const MyFirstArray = [3, 4, 5, 6, 7, 14, 81];
// console.log(MyFirstArray[MyFirstArray.length - 1]);


// =======================================================================

// 3. Задача
// Создать массив любой длины, состоящий из чисел. Вывести в консоль самый первый и последний элементы. Код должен работать для массива любой длины.

// const MySecondArray = [45, 23, 76, 98, 102, 55];
// MySecondArray.unshift(22);
// MySecondArray.push(88);
// console.log(MySecondArray[0]);
// console.log(MySecondArray[MySecondArray.length - 1]);

// =======================================================================

// 4. Задача
// Создать массив любой длины, состоящий из чисел. Вывести значение предпоследнего элемента. Код должен работать для массива любой длины.

// const MyArray = [88, 98, 02, 33, 45];
// console.log(MyArray[MyArray.length - 2]);
// =======================================================================

// 5. Задача
// Создать массив любой длины, состоящий из строк. Удалить последний элемент. А затем добавить 1 элемент в конец массива со значением new. Вывести в консоль получившийся массив.

// const array = ['one', 'two', 'three', 'four', 'five'];
// array.pop();
// array.push('new');
// console.log(array);
// =======================================================================

// 6. Задача
// Создать массив любой длины, состоящий из строк. Удалить последний элемент и вывести получившийся массив. Затем вывести значение удалённого элемента.

// const newArray = ['good', 'every', 'day', 'night', 'learn'];
// const deleteItem = newArray.pop();  // delete  'learn'
// console.log(newArray); // ['good', 'every', 'day', 'night'];
// console.log(deleteItem);

// ========================================================================


// 7. Задача
// Создать массив с любым количеством элементов и любым типом данных внутри. Если элементов больше 5, то вывести в консоль "окей" Иначе ничего не выводить.


// const array1 = [12, 'home', undefined, 87, 98, 20, 10];

// if (array1.length > 5) {
//   console.log('окей');
// }

// =======================================================================

// 8. Задача
// Создать массив любой длины, состоящий из чисел. Если последний элемент чётный, то удалить его из массива, а затем вывести в консоль. В противном случае просто вывести первый элемент массива.


// const array2 = [2, 34, 65, 40, 29];
// if (array2[array2.length - 1] % 2 === 0) {
//   console.log(array2.pop());
// } else {
//   console.log(array2[0]);
// }

// const index = Number(prompt('msg'));




// ========================================================================

// 9. Задача
// Дан массив чисел. Вывести массив поэлементно в консоль.

// const numberList = [13, 54, 32, 75, 43, 65, 89, 53];
// for (let i = 0; i < numberList.length; i++) {
//   console.log(numberList[i]);
// }



// ========================================================================


// 10. Задача
// Создать массив любой длины, состоящий из чисел.

// Если значение первого элемента больше значения последнего элемента,
// то добавить в конец массива текст more, Иначе удалить последний элемент.

// const myArray = [73, 45, 67, 86, 98, 756]
// if (myArray[0] > myArray[myArray.length - 1]) {
//   myArray.push('more');
// } else {
//   myArray.pop()
// }




// ========================================================================


// 11. Задача
// Создать массив любой длины, состоящий из чисел.
// Добавлять к каждому третьему элементу массива строку: =x3=.
// Вывести в кнсоль получившийся массив

// const array = [11, 24, 45, 65, 78, 98, 23, 55, 87, 95, 40, 22, 80, 48, 60, 99];
// for (let i = 0; i < array.length; i++) {
//   if (i % 3 === 0) {
//     array[i] += '=x3=';
//   }
// }
// console.log(array);


// ========================================================================

// 12. Задача
// Дан массив чисел. Вывести в консоль элементы массива в столбик в обратном порядке.

// const numberList = [99, 88, 77, 66, 55];
// for (let i = numberList[numberList.length - 1]; i >= 0; i--) {
//   console.log(numberList[i]);
// }


// ========================================================================

// 13. Задача
// Создать пустой массив. Заполнить его тремя элементами, которые введёт пользователь с клавиатуры. Вывести в консоль получившийся массив.

// let userName = prompt('Write your name');
// let userAge = prompt('Write your age');
// let userAdress = prompt('Write your adress');
// const array = [userName, userAge, userAdress];
// console.log(array);


// ========================================================================

// 14. Задача
// Запросить у пользователя число - кол-во элементов будущего массива. И в зависимости от введённого числа пользователь заполняет с клавиатуры все элементы сам. Вывести в консоль получившийся массив.

// let userNumber = Number(prompt('Write length array'));
// // let userNumber = 6;

// const userArray = [];

// for (let i = 0; i < userNumber; i++) {
//   const messageUser = prompt(`Write element ${i + 1}/${userNumber}`);
//   userArray.push(messageUser)
// }

// console.log(userArray);


// ========================================================================

// 15. Задача
// Дан массив чисел. Вывести в консоль только положительные значения.

// const numberArray = [-13, 6, 12, -11, 5, 4, 19, 13, -1, 0, 5, -9];

// for (let i = 0; i < numberArray.length; i++) {
//   if (numberArray[i] >= 0) {
//     console.log(numberArray[i]);
//   }
// }

// ========================================================================


// 16. Задача

// ! Победить страх  на создание переменных
// * Талончики выданы 1000000x шт

// Вывести в консоль самое большое значение из массива.

// const numberArray = [-13, 6, 12, -11, 5, 4, 19, 13, -1, 0, 5, -9];
// // const numberArray = [-13, -5, -1, -3 - 9];

// let maxNumber = numberArray[0];
// // let maxNumber = 0;
// for (let i = 1; i < numberArray.length; i++) {
//   if (numberArray[i] > maxNumber) {
//     maxNumber = numberArray[i];
//   }
// } console.log(maxNumber);

// ==========================================================================


// 17. Задача
// Вывести в консоль сумму всех чисел массива.

// const numberArray = [-13, 6, 12, -11, 5, 4, 19, 13, -1, 0, 5, -9];
// let sumNumber = 0;
// for (let i = 0; i < numberArray.length; i++) {
//   sumNumber += numberArray[i];
// }
// console.log(sumNumber);


// ==========================================================================


// 18. Задача
// Вывести в консоль индекс самого минимального значения из массива numberArray.

// const numberArray = [15, 6, 12, -11, 5, 4, -19, 13, -1, 0, 5, -9];

// let minNumber = numberArray[0];
// let minIndex = 0;
// for (let i = 0; i < numberArray.length; i++) {
//   debugger
//   if (numberArray[i] < minNumber) {
//     minNumber = numberArray[i];
//     minIndex = i
//   }
//   debugger
// }
// console.log(minIndex);



// const numberArray = [11, 6, 12, -11, 5, 4, -19, 13, -1, 0, 22, 5, -9];

// let maxNumber = numberArray[0];
// let maxIndex = 0;
// for (let i = 0; i < numberArray.length; i++) {
//   // debugger
//   if (maxNumber < numberArray[i]) {
//     maxNumber = numberArray[i];
//     maxIndex = i
//   }
//   // debugger
// }
// console.log(maxNumber);
// console.log(maxIndex);



// numberArray = [13, 6, 12, -11, 5, 4, -19, 13, -1, 0, 5, -9];
// minNumber = 13
// minIndex = 0
// i = 1
// i < 12 -> true
// minNumber = 6
// minIndex = 1

// i = 2
// i < 12 -> true
// 12 < 6 -> false

// i = 3
// -11 < 6 -> true
// minNumber = -11
// minIndex = 3


// -9 -8 -7 -6 -5 -4 -3 -2 -1 0 1 2 3 4 5 6 7 8 9

// ==========================================================================


// 19. Задача
// Вывести в консоль сумму всех чётных чисел массива numberArray.

// const numberArray = [-13, 6, 12, -11, 5, 4, 19, 13, -1, 0, 5, -9];
// let sumEvenNumber = 0;
// for (let i = 0; i < numberArray.length; i++) {
//   if (numberArray[i] % 2 === 0) {
//     sumEvenNumber += numberArray[i];
//     // console.log(sumEvenNumber);
//   }
// }
// console.log(sumEvenNumber);


// ==========================================================================



// 20. Задача
// Вывести в консоль сумму всех чисел кратных 3 массива numberArray.

// const numberArray = [-13, 6, 12, -11, 5, 4, 19, 13, -1, 0, 5, -9];

// let sumNumber = 0;
// for (let i = 0; i < numberArray.length; i++) {
//   if (numberArray[i] % 3 === 0) {
//     sumNumber = numberArray[i];
//     sumNumber += numberArray[i];
//   }
// }
// console.log(sumNumber);

// ==========================================================================


// 21. Задача
// Перенести значения, кратные 3 из массива numberArray в массив newArr;

// const numberArray = [-13, 6, 12, -11, 5, 4, 19, 13, -1, 0, 5, -9];
// const newArr = [];

// for (let i = 0; i < numberArray.length; i++) {
//   if (numberArray[i] % 3 === 0) {
//     newArr.push(numberArray[i]);
//   }
// }
// console.log(newArr);


// ==========================================================================

// 22. Задача
// Написать программу, которая посчитает количество строк и чисел в массиве varArray. Результат вывести в консоль с подписью, где число строк, а где чисел.

// const varArray = [15, 12, 'text', true, 6, 7, 21, [], false, 0, 1, '', -1, 'world', 'piece'];
// let countString = 0;
// let countNumber = 0;

// for (let i = 0; i < varArray.length; i++) {
//   if (typeof varArray[i] === 'string') {
//     countString++
//   } else if (typeof varArray[i] === 'number') {
//     countNumber++
//   }
// }

// console.log(countString);
// console.log(countNumber);

// ==========================================================================

// 23. Задача
// Написать программу, которая посчитает количество массивов внутри массива testArray.

// const testArray = [11, 17, [18, 10], -5, 7, [], 9, [-1], [4, 5], null, {}];
// let quantityArray = 0;
// for (let i = 0; i < testArray.length; i++) {

//   // null - тоже даёт object
//   // {} - объект тоже объект
//   // if (typeof testArray[i] === 'object') {
//   //   quantityArray++;
//   // }

//   if (Array.isArray(testArray[i])) {
//     quantityArray++
//   }
// }
// console.log(quantityArray);
// ==========================================================================

// 24. Задача

// Дан массив чисел. Вывести в консоль среднее арифметическое отрицательных элементов массива numberArray.

// const numberArray = [-13, 6, 12, -11, 5, -4, 19, 13, -1, 0, 5, -9, -1, -2];
// let sumNegativeArr = 0;
// let countNegativeNumbers = 0;
// for (let i = 0; i < numberArray.length; i++) {
//   if (numberArray[i] < 0) {
//     sumNegativeArr += numberArray[i]
//     countNegativeNumbers++;
//     // debugger
//   }
// }
// console.log(sumNegativeArr / countNegativeNumbers);


// ==========================================================================

// 25. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// const arr = [3, 7, 4];
// const newArr = arr;

// newArr.push(7);
// console.log(arr); // ? arr [3, 7, 4, 7]


// ==========================================================================

// 26. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// const arr = [2, 1, 5];

// const newArr = arr;
// arr.pop();

// console.log(newArr); // ? newArr [2, 1]
// ==========================================================================

// 27. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// const arr = [2, 1, 5];
// const newArr = arr;
// const antArr = newArr;

// antArr.unshitf(5, 4);
// antArr.unshift(5, 4);

// console.log(arr); // ? arr [5, 4, 2, 1, 5]
// console.log(newArr); // ? newArr [5, 4, 2, 1, 5]
// console.log(antArr); // ? antArr [5, 4, 2, 1, 5]
// ==========================================================================

// 28. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// const arr = [6, 9, 3];
// const list = arr;

// list[2] = 7;
// arr[4] = 12;

// console.log(arr); // ? arr [6, 9, 7, 12]
// console.log(list); // ? list [6, 9, 7, 12]
// console.log(list.length); // ? 5
// ==========================================================================

// 29. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// const arr = [1, 2];
// const copyArr = arr;
// const othArr = arr;

// copyArr.push(1, 2);
// othArr.shift();

// console.log(arr); // ? arr [2, 1, 2]
// console.log(copyArr); // ? copyArr [2, 1, 2]
// console.log(othArr); // ? othArr [2, 1, 2]
// ==========================================================================

// 30. Задача
// Дан массив. Написать программу, которая скопирует массив targetList в другую переменную. При изменении скопированного массива (при добавлении, удалении) исходный массив не должен изменяться.

// const targetList = [4, 5, true, 3, 'text', 1, null];
// const newArr = [];


// Такое копирование называется неглубоким
// for (let i = 0; i < targetList.length; i++) {
//   newArr.push(targetList[i])
//   // newArr[i] = targetList[i]
// }


// // newArr.push(12)
// console.log(newArr);
// console.log(targetList);

// console.log([] === []); // false
// console.log(newArr === targetList); // Сранить ссылки (ключи от дома)

// ==========================================================================

// 31. Задача
// Даны 2 массива, перенести каждый третий элемент из массива basicList в массив everyThreeList. Программа должна работа для массива любой длины.

// const basicList = [-11, 3, 23, -14, 5, 43, 3, 14, -1, 65, 5, -9, 10, 11, 17, 2, 1];
// const everyThreeList = [];

// for (let i = 0; i < basicList.length; i++)
//   if (i % 3 === 0) {
//     everyThreeList[i] = basicList[i];
//     console.log(everyThreeList[i]);
//     // debugger
//   }

// ==========================================================================

// 32. Задача
// Дан массив чисел, вывести в консоль произведение всех нечётных положительных чисел.

// const numberArray = [-199, 6, 22, -31, 7, -6, 1, 11, -3, 0, 5, -99];
// let compositionOddPositionNumbers = 1; //? Почему нужно присвоить единицу, чтобы получить произведение нечетных положительных чисел?
// for (let i = 0; i < numberArray.length; i++) {
//   if (i % 2 === 0) { continue }
//   if (numberArray[i] >= 0) {
//     compositionOddPositionNumbers *= numberArray[i]
//   }
// }
// console.log(compositionOddPositionNumbers);

// ==========================================================================

// 33. Задача
// Дан массив чисел, вывести в консоль количество отрицательных чисел.

// const numberList = [-199, 30, 10, 15, -1, -12, 43, 38, -7, 3, 5, -4, -99];
// let countNegativeNumbers = 0;
// for (let i = 0; i < numberList.length; i++) {
//   if (numberList[i] < 0) {
//     countNegativeNumbers++
//     // debugger
//   }
// }
// console.log(countNegativeNumbers);


// ==========================================================================

// 34. Задача
// Дан массив чисел, вывести в консоль количество массивов и null.

// const list = [[-199, 30, 10, 15], -1, null, '43', null, [-7, 3, 5], 'null', -99, [], 4, null];
// let countArray = 0;
// let countNull = 0;

// for (let i = 0; i < list.length; i++) {
//   if (Array.isArray(list[i])) {
//     countArray++;
//   } else if (list[i] === null) {
//     countNull++;
//   }
// }
// console.log(countNull)
// console.log(countArray)

// ==========================================================================

// 35. Задача
// Не выполняя код, дать ответ:
// Что выведется в консоль? Ответ записать в комментарий.

// const arr1 = [3, 4, 5];
// const arr2 = [3, 4, 5];
// console.log(arr1 === arr2); // ? false  Так как константы имеют разные ссылки на массив, несмотря на то, что элементы в массивах совершенно одинааовые.

// const copyArr1 = arr1;
// console.log(copyArr1 === arr1); // ? Переменная не определена.
// ==========================================================================

// ★ Задачи повышенной сложности ★

// ★ 36. Задача ★ VVV
// Дан массив товаров и цен в корзине, посчитать сумму всей покупки и вывести результат в консоль.

// const cartList = [
//   ['carot', 200],
//   ['potato', 300],
//   ['milk', 80],
//   ['mushrooms', 600],
//   ['beet', 200],
//   ['сabbage', 300]
// ];
// let sum = 0;
// for (let i = 0; i < cartList.length; i++) {
//   if (Array.isArray([])) {
//     // console.log(cartList[i]);
//     sum += cartList[i][1]
//     // debugger
//   }
// }
// console.log(sum);

// ==========================================================================


// ★ 37. Задача ★
// Создать пустой массив. Пользователя запрашивают вводить числа до тех пор, пока он не введёт слово Хватит. Как только пользователь ввёл слово, вывести массив чисел.

// Массив должен состоять из типа number, не string;
// Слово Хватит не зависит от регистра, можно написать, как с маленькой, так и сбольшой буквы;

// let userArr = [];

// let userNumbers = Number(prompt('Write your numbers'));
// for (let i = 1; i < userNumbers; i++) {
//   // if (userNumbers > i) {
//   //   Number(prompt('Write your numbers'));
//   //   // debugger
//   // }
//   console.log('hhfhf');
// }

// ==========================================================================


// ★ 38. Задача ★ VVV
// Выполнить сортировку массива array. Четные элементы отправьте в массив arrayEven, а нечетные - в arrayOdd. А если встречается значение 0, то проигнорировать его (Переносить в arrayEven не нужно).

// array = [0, 9, 2, 7, -2, 4, 34, -7, 0, -12, 28, 14, 0, 0, 15, 22, 0];
// arrayEven = [];
// arrayOdd = [];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 === 0) {
//     if (array[i] > 0)
//       arrayEven.push(array[i])
//   } else if (array[i] % 3 === 0 || array[i] < 0) {
//     arrayOdd.push(array[i])
//   }
// }
// console.log(arrayEven);
// console.log(arrayOdd);


// ==========================================================================


// ★ 39. Задача ★
// Дан массив чисел, написать программу, которая отсортирует исходный массив в порядке возрастания. Без использования метода sort();

// array = [25, 32, 17, 99, 15];

// ==========================================================================


// ★ 40. Задача ★
// Дан массив. Вывести в консоль все элементы массива в матричном виде:

// const array = [
//     [11, 12, 13, 14, 15],
//     [21, 22, 23, 24, 25],
//     [31, 32, 33, 34, 35],
//     [41, 42, 43, 44, 45]
// ];

// output:
// 11 12 13 14 15
// 21 22 23 24 25
// 31 32 33 34 35
// 41 42 43 44 45

// ==========================================================================


// ★ 41. Задача ★
// Дан массив. Заменить в массиве значения: 11, 22, 33, 44, 55 на строку 00.

// const array = [
//     [11, 12, 13, 14, 15],
//     [21, 22, 23, 24, 25],
//     [31, 32, 33, 34, 35],
//     [41, 42, 43, 44, 45],
//     [51, 52, 53, 54, 55]
// ];


// ==========================================================================










// Дополнительные задачи:



// Дан массив, выполнить следующие задачи:
// 1. Если количество элементов больше 3, то вывести '!!!' в консоль, иначе удалить последний элемент

// const arr = ['lunatic', 'poring', 'spore'];
// if (arr.length > 3) {
//   console.log('!!!');
// } else {
//   arr.pop()
// }
// console.log(arr);


// 2. ГРОМОЗДКАЯ задачка
// Дан массив, состоящий из чисел
// Если первый элемент делится на 3, то добавить в конец массива число 7
// А Если последний элемент делится на 3, то добавить в начало масива число 9
// Иначе удалить первый и последний элементы массива

// const numberList = [6, 2, 1, 1, 1, 0, 3]
// if (numberList[0] % 3 === 0) {
//   numberList.push(7);
// } else if (numberList[numberList.length - 1] % 3 === 0) {
//   numberList.unshift(9);
// } else {
//   numberList.shift();
//   numberList.pop();
// }
// console.log(numberList);

// 3. Дан массив чисел. Вывести все числа в столбик

// const arrayList = [3, 2, 1, 1, 1, 0, 5];
// for (let i = 0; i < arrayList.length; i++) {
//   // console.log(arrayList); // Вывести массив
//   // console.log(arrayList[i]); // Вывести элемент
//   // console.log(i); // Вывести индекс

//   console.log(`index: ${i}; value: ${arrayList[i]}; array: [${arrayList}]`);
// }

// 4. Задача
// Дан массив чисел. Вывести каждое второе число из массива
// * (но выводить его если значение делится на 3)

// const randomArray = [5, 3, 6, 8, 5, 6, 3, 18, 1, 12, 2]
// for (let i = 0; i < randomArray.length; i += 2) {
//   if (randomArray[i] % 3 === 0) {
//     console.log(randomArray[i]);
//   }
//   // console.log(randomArray[i]);
// }

// const randomArray = [5, 3, 6, 8, 5, 6, 3, 18, 1, 12, 2]
// for (let i = 0; i < randomArray.length; i++) {
//   if (i % 2 === 0 && randomArray[i] % 3 === 0) {
//     console.log(randomArray[i]);
//   }
//   // console.log(randomArray[i]);
// }

// const randomArray = [5, 3, 6, 8, 5, 6, 3, 18, 1, 12, 2]
// for (let i = 0; i < randomArray.length; i++) {
//   if (i % 2 === 0) {
//     if (randomArray[i] % 3 === 0) {
//       // console.log(randomArray[i]);
//     }
//     console.log(randomArray[i]);
//   }
// }






// let countNum = 0
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === 'number') {
//     countNum++;;
//   }
// }
// console.log(countNum);



// console.log(sumArr);