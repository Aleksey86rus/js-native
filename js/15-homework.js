// Задачи по теме 15. Array methods. Part 2 (callback - HOF)##
// 1. Задача
// Написать функцию, которая находит индекс первого числа в массиве, кратного 3.


// const myArray = [2, 1, 5, 9, 8, 10];

// // const searchFirstIndexInArray = myArray.findIndex((value) => {
// //   return value % 3 === 0;
// // })


// const searchFirstIndexInArray = myArray.findIndex((value) => value % 3 === 0)

// console.log(searchFirstIndexInArray);




// =============================================================================== //
// 2. Задача
// Написать функцию, которая находит индекс первого имени в массиве, длина которого больше 5.

// const array = ['day', 'morning', 'night', 'today', 'tomorrow'];

// // const searchIndexFirstNameInArr = array.findIndex((index) => {
// //   return index.length > 5;
// // })

// const searchIndexFirstNameInArr = array.findIndex((index) => index.length > 5)

// console.log(searchIndexFirstNameInArr);

// =============================================================================== //
// 3. Задача
// Написать функцию, которая находит индекс первого булевого true из массива любых типов данных.

// const array = ['string', 55, false, 'night', true, null];

// // const searchFirstIndexBoolEl = array.findIndex((index) => {
// //   return typeof index === 'boolean';
// // })

// const searchFirstIndexBoolEl = array.findIndex((value) => typeof value === 'boolean')
// console.log(searchFirstIndexBoolEl);

// =============================================================================== //
// 4. Задача
// Написать функцию, которая ищет среди массива чисел первое встречное отрицательное число.

// const arr = [5, 6, 8, 10, -11, 25, -60];

// // const searchFirstNegativNumb = arr.find((value) => {
// //   return value < 0;
// // })

// const searchFirstNegativNumb = arr.find((value) => value < 0)
// console.log(searchFirstNegativNumb);

// =============================================================================== //
// 5. Задача
// Написать функцию, которая ищет среди массива имен первое встречное имя с длиной строки менее 4.

// const names = ['Mihail', 'Eva', 'Igor', 'Maks', 'Pol'];

// // const searchFirstNameInArr = names.find((value) => {
// //   return value.length < 4;
// // })

// const searchFirstNameInArr = names.find((value) => value.length < 4)
// console.log(searchFirstNameInArr);

// =============================================================================== //
// 6. Задача
// Написать функцию, которая мутирует массив, заменяя все чётные числа на 777.

// const myArr = [22, 13, 45, 77, 10, 48, 31, 50];

// myArr.forEach((value, index, arr) => {
//   if (value % 2 === 0) {
//     arr[index] = 777;
//   }
// })

// console.log(myArr);

// =============================================================================== //
// 7. Задача
// Написать функцию, которая мутирует массив, заменяя все строки на число 0.

// const array = ['one', 'two', 10, 'three', true, 'four', undefined, 'five'];

// array.forEach((value, index, arr) => {
//   typeof value === 'string' && (arr[index] = 0)
// })

// console.log(array);

// =============================================================================== //

// 8. Задача
// Написать функцию, которая выводит в консоль все чётные индексы, начиная с 2.

//             0  1  2  3  4  5  6  7  8    9  10  11  12  13  14  15  16  17  18
// const array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// array.forEach((v, index) => {
//   if (index % 2 === 0 && index !== 0) {
//     console.log(index);
//   }
// })


// 9. Задача
// Написать функцию, которая возвращает из массива чисел массив со всеми чётными числами.

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function getEvenArray(array) {
//   return array.filter((value) => value % 2 === 0)
// }

// console.log(getEvenArray(myArr));


// console.log(newMyArr);


// =============================================================================== //

// 10. Задача
// Написать функцию, которая возвращает из массива строк все строки, которые написаны строго в нижнем регистре(Если хотя бы одна буква большая, то такое слово не подходит).

// const textArray = ['gate', 'exit', 'Floor', 'house'];

// function getAllStringInArray(arrString) {
//   return arrString.filter((value) => value === value.toLowerCase())
// }
// console.log(getAllStringInArray(textArray));

// const foo = getAllStringInArray(textArray);
// console.log(foo);
// // const myArr = textArray.filter((value) => {
// //   if (value === value.toLowerCase()) {
// //     return value
// //   }
// // })


// const textArray = ['gate', 'exit', 'Floor', 'house'];
// const myArr = textArray.filter((value) => value === value.toLowerCase())
// console.log(myArr);


// =============================================================================== //

// 11. Задача
// Дан массив пользователей.
// а) Написать функцию, которая возвращает из массива пользователей всех, чьё имя длинее 6 символов;
// б) Написать функцию, которая возвращает из массива пользователей всех, чей возраст выше 20;

// const userList = [
//   { age: 20, name: 'ALex' },
//   { age: 10, name: 'alex' },
//   { age: 110, name: 'Pavel' },
//   { age: 8, name: 'Oksana' },
//   { age: 15, name: 'Dima' },
//   { age: 45, name: 'Lexus' },
//   { age: 95, name: 'Deda' },
// ]

// a)

// function nameFilter(userList) {
//   return userList.filter((user) => user.name.length > 4)
// }

// console.log(nameFilter(userList));



// б)

// function getUsersAgeMore20(userList) {
//   return userList.filter((user) => user.age > 20)
// }

// console.log(getUsersAgeMore20(userList));

// const ageMore20 = userList.filter((user) => user.age > 20)
// console.log(ageMore20);

// =============================================================================== //

// 12. Задача
// Написать функцию, которая выводит переданный массив в консоль в красивой форме:
// элемент №{ } значение: { }

// const array = ['First', 'Second', 'Third'];

// function outputsArrrayInConsole(arr) {
//   arr.forEach((value, index) => {
//     console.log(`элемент №${index} значение: ${value}`);
//   })
// }

// outputsArrrayInConsole(array);

// myArr.forEach((value, index) => {
//   console.log(`элемент №${index} значение: ${value}`);
// })

// =============================================================================== //

// 13. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция возвращает другой массив с индексами всех чётных чисел.

// const userArray = [10, 20, 33, 40, 50, 66, 70, 80, 99, 101];

// function getAnotherArrayWithIndexEvenNumbers(arr) {
//   const indexAllEvenNumbersInArray = [];
//   arr.forEach((value, index) => {
//     if (value % 2 === 0) {
//       indexAllEvenNumbersInArray.push(index)
//     }
//   })
//   return indexAllEvenNumbersInArray;
// }

// console.log(getAnotherArrayWithIndexEvenNumbers(userArray));

// const userArray = [10, 20, 33, 40, 50, 66, 70, 80, 99, 101];

// const indexAllEvenNumbersInArray = [];
// userArray.forEach((value, index) => {
//   if (value % 2 === 0) {
//     indexAllEvenNumbersInArray.push(index);
//   }
// })
// console.log(indexAllEvenNumbersInArray);

// =============================================================================== //

// 14. Задача
// Написать функцию, на вход которой подаётся массив, которая добавляет ко всем элементам массива префикс "ext-", не мутируя исходный, а возвращает новый массив.

// const array = [2018, 2019, 2020, 2021];

// function addaAllElPref(arr) {
//   return arr.map((value) => `ext-` + value)
// }

// console.log(addaAllElPref(array));


// const array = [2018, 2019, 2020, 2021];
// const newArray = array.map((value) => 'ext-' + value)

// console.log(newArray);
// console.log(newArray === array);
// console.log(array);

// =============================================================================== //

// 15. Задача
// Написать функцию, на вход которой подаётся массив, функция возвращает новый массив из чётных чисел, которые были во входном массиве.


// FIXME: filter

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function getArrEvenNumers(arr) {
//   return arr.filter((value) => value % 2 === 0)
// }

// console.log(getArrEvenNumers(array));



// function getNewArrayEvenNumbs(numbers) {
//   const myArr = [];
//   // forEach
//   for (const el of numbers) {
//     if (el % 2 === 0) {
//       myArr.push(el)
//     }
//   }
//   return myArr
// }

// console.log(getNewArrayEvenNumbs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// =============================================================================== //

// 16. Задача
// Написать функцию, которая находит первое положительное число в переданном массиве.

// const userArray = [-4, 23, -15, 80, -19, 25];

// function getFirstPosNumber(arr) {
//   return arr.find((value) => value > 0)
// }

// console.log(getFirstPosNumber(userArray));


// =============================================================================== //

// 17. Задача
// Написать функцию, на вход которой подаётся массив чисел, которая возвращает массив, в котором все числа уменьшаются в 2 раза.

// const numbArray = [10, 20, 30, 40, 50];

// function getArrayLessThanTwice(arr) {
//   return arr.map((value) => value / 2)
// }

// console.log(getArrayLessThanTwice(numbArray));

// =============================================================================== //

// 18. Задача
// Написать функцию, на вход которой подаётся массив строк, функция возвращает массив чисел - длины строк каждого слова из исходного массива. Например:

// ['leg', 'pony', 'dog'] -> [3, 4, 3]

// const arrayString = ['car', 'ship', 'plane', 'train'];

// function getArrayNumb(arr) {
//   return arr.map((value) => value.length)
// }

// console.log(getArrayNumb(arrayString));


// =============================================================================== //

// 19. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция увеличивает в 10 раз все числа в массиве, но не мутирует его, а возвращает новый.

// const array = [1, 2, 3, 4, 5];

// function getIncreasesBy10(arr) {
//   return arr.map((value) => value * 10)
// }
// console.log(getIncreasesBy10(array));


// const newArray = getIncreasesBy10(array);
// console.log(newArray);

// console.log(array);
// console.log(array === newArray);

// =============================================================================== //

// 20. Задача
// Написать функцию, которая считает количество нечётных чисел в массиве.

//  FIXME: reduce

// const array = [2, 15, 18, 22, 55, 91, 100, 40, 88, 11];

// function countOddNumbers(arr) {
//   let oddNumbers = 0;
//   arr.forEach((value) => {
//     if (value % 2 !== 0) {
//       oddNumbers++
//     }
//   });
//   return oddNumbers
// }

// console.log(countOddNumbers(array));

// =============================================================================== //

// 21. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция возвращает истину, если все числа в массиве чётные.

// const array = [2, 10, 22, 100, 40, 88];
// const array = [2, 10, 22, 100, 40, 88, 91];

// function getTrueIfAllNumbersEven(arr) {
//   return arr.every((value) => value % 2 === 0)
// }

// console.log(getTrueIfAllNumbersEven(array));
// =============================================================================== //

// 22. Задача
// Написать функцию, которая считает сумму всех отрицательных чисел.


// FIXME: ! reduce
// const array = [-10, -22, -40, -15];
//? const array = [20, -10, 55, -22, 30, -40, -15];

// function countSumAllNegativeNumbers(arr) {
//   let allSumNumbers = 0;
//   arr.forEach((value) => {
//     if (value < 0) {
//       allSumNumbers += value
//     }
//   });
//   return allSumNumbers
// }

// const sum = array.reduce((prV, value) => {
//   return value + prV
// }, 0)

// console.log(sum);


// console.log(countSumAllNegativeNumbers(array));

// =============================================================================== //

// 23. Задача
// Написать функцию, которая возвращает наибольшее и наименьшее число из переданного массива. (функция возвращает объект с двумя свойствами)

// FIXME: вместо 1 forEach 2 reduce

// const array = [5, 10, -22, 40, -15, 77];


// function geLargestAndSmallestNumb(arr) {
//   let largestNumber = 0;
//   let smallestNumber = 0;

//   arr.forEach((value) => {
//     if (value > largestNumber) {
//       largestNumber = value
//     }
//     if (value < smallestNumber) {
//       smallestNumber = value
//     }
//   });
//   const userObj = {
//     'Наибольшее число:': largestNumber,
//     'Наименьшее число:': smallestNumber
//   }
//   return userObj;
// }

// console.log(geLargestAndSmallestNumb(array));
// =============================================================================== //

// 24. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция возвращает true, если в массиве есть число, которое делится на 17.

// const array = [2, 4, 6, 8, 10, 34, 12, 14, 16];

// function getNumberShareBy17(arr) {
//   // return arr.some((value) => value % 17 === 0);
//   return arr.some((value) => value % 17 === 0);
// }

// console.log(getNumberShareBy17(array));

// =============================================================================== //

// 25. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция возвращает массив из отрицательных чисел.


// const array = [2, 4, 6, 8, -10, -12, 13, 14, 16, 18, 20];

// function getNegativNumbers(arr) {
//   return arr.filter((value) => value < 0)
// }

// console.log(getNegativNumbers(array));


// ???
// function changeEvenOnOddNumbers(arr) {
//   const evenOnOddNumbers = [];
//   arr.forEach((value) => {
//     if (value % 2 === 0) {
//       evenOnOddNumbers.push(-value)
//     }
//   })
//   return evenOnOddNumbers
// }
// console.log(changeEvenOnOddNumbers(array));


// function changeEvenOnOddNumbers(arr) {
//   return arr.map((value) => value = -value)
// }
// console.log(changeEvenOnOddNumbers(array));

// =============================================================================== //

// 26. Задача
// Написать функцию, которая принимает на вход массив чисел, функция мутирует исходный массив - сортируя его в порядке возрастания.

// sort()

// =============================================================================== //

// 27. Задача
// Написать функцию, которая мутирует входный массив, заменяя всё чётные числа на слово 'even'.

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function changeEvenNumbsOnStr(arr) {
//   return arr.map((value) => value % 2 === 0 ? 'even' : value)
// }

// console.log(changeEvenNumbsOnStr(array));

// =============================================================================== //

// 28. Задача
// Написать функцию, которая возвращает индекс первого встречного отрицательного числа.

// const array = [1, 5, -7, -9, 10, -12];

// function getFirstIndNegativeNumb(arr) {
//   return arr.findIndex((value) => value < 0)
// }

// console.log(getFirstIndNegativeNumb(array));

// =============================================================================== //

// 29. Задача
// Написать функцию, которая мутирует входной массив строк, заменяя все строки на их длину.


const arrString = ['one', 4, 'three', 6, 'sevennn'];


// FIXME: forEach - хорошо подходит для мутаций

// function changeAllStrInLength(arr) {
//   return arr.map((value) => typeof value === 'string' ? value.length : value);
// }

// const resultArray = changeAllStrInLength(arrString)
// console.log(resultArray);
// console.log(arrString === resultArray);

// =============================================================================== //

// 30. Задача
// Написать функцию, которая принимает на вход массив чисел, функция возвращает отсортированный массив чисел в порядке убывания.Но не мутирует исходный массив.

// sort()


// =============================================================================== //

// 31. Задача
// Написать функцию, на вход которой подаётся массив чисел, функция возвращает объект с тремя свойствами - массивами:

// массив чётных чисел
// массив отрицательных чисел
// массив чисел, больших 10
// Например:

// Input:
// [3, 6, 7, -43, 34, 6, -98, 45, 432, 65, 876, -76, -8, 56, -7, 76, 45, 6]

// Output:
// {
//   evenArray: [6, 34, 6, -98, 432, 876, -76, -8, 56, 76, 6]
//   negArray: [-43, -98, -76, -8, -7]
//   moreTenArray: [34, 45, 432, 65, 876, 56, 76, 45]
// }


// const array = [3, 6, 7, -43, 34, 6, -98, 45, 432, 65, 876, -76, -8, 56, -7, 76, 45, 6];

// // filter 3x

// const getInfoFromArray = (array) => ({
//   even: array.filter((value) => value % 2 === 0),
//   neg: array.filter((value) => value < 0),
//   moreTen: array.filter((value) => value > 10)
// })



// console.log(getInfoFromArray(array));


// function gerObj(arr) {
//   const arrEvenNumbers = [];
//   const arrNegativeNumbers = [];
//   const arrNumbersMore10 = [];


//   arr.forEach((value) => {
//     if (value % 2 === 0) {
//       arrEvenNumbers.push(value)
//     }
//     if (value < 0) {
//       arrNegativeNumbers.push(value)
//     }
//     if (value > 10) {
//       arrNumbersMore10.push(value)
//     }
//   });

//   const output = {
//     'evenArray': arrEvenNumbers,
//     'negArray': arrNegativeNumbers,
//     'moreTenArray': arrNumbersMore10
//   }

//   return output
// }



// console.log(gerObj(array));

// =============================================================================== //

// ★ Условие для следующих задач:
// Дан массив объектов, выполнить следующие задачи:

const users = [
  {
    id: 100,
    name: "John",
    age: 19,
    isMarried: false,
    scores: 78
  },
  {
    id: 101,
    name: "Peter",
    age: 13,
    isMarried: false,
    scores: 311
  },
  {
    id: 102,
    name: "John",
    age: 33,
    isMarried: false,
    scores: 0
  },
  {
    id: 103,
    name: "Alex",
    age: 14,
    isMarried: true,
    scores: 121
  },
  {
    id: 104,
    name: "Lila",
    age: 18,
    isMarried: true,
    scores: 999
  },
]
// =============================================================================== //

// 32. Задача
// Написать функцию, которая получает из массива объектов - массив возрастов пользователя.


// function getageUser(userList) {
//   return userList.map((user) => user.age)
// }


// const arrayAge = []
// for (let i = 0; i < users.length; i++) {
//   arrayAge.push(users[i].age)
// }
// console.log(arrayAge);



// console.log(getageUser(users));





// =============================================================================== //

// 33. Задача
// Написать функцию, которая принимает на вход массив пользователей, функция возвращает массив строк вида:

// `<div>
//   <span>
//     Имя: <значение>
//   </span>
//   <span>
//     Возраст: <значение>
//   </span>
//   <span>
//     Семейное положение: <значение>
//   </span>
// </div>`
// =============================================================================== //

// 34. Задача
// Написать функцию, которая принимает на вход массив и имя, функция находит и возвращает объект по имени первого найденного в массиве.
// =============================================================================== //

// 35. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает массив пользователей, чьё количество очков выше или равно 100.
// =============================================================================== //

// 36. Задача
// Написать функцию, которая принимает на вход массив, имя, возраст и семейное положение, функция возвращает массив, в котором добавлен новый пользователь.

// Количество очков задать равным 0;
// id сделать случайным целым число в диапазоне от 1000 до 2000 не вкл;
// =============================================================================== //

// 37. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает массив, добавляя каждому пользователю новое свойство: isTest: true.
// =============================================================================== //

// 38. Задача
// Написать функцию, которая принимает на вход массив и id пользователя и новое семейное положение, функция возвращает массив, в котором меняется свойство isMarried на переданное.
// =============================================================================== //

// 39. Задача
// Написать функцию, которая принимает на вход массив и id пользователя, функция возвращает новый массив, удаляя пользователя с переданным id.
// =============================================================================== //

// 40. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает массив совершеннолетних пользователей.
// =============================================================================== //

// 41. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает новый массив объектов, отсортированный в порядке увеличения очков.
// =============================================================================== //

// 42. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает пользователя с самым большим количеством очков.
// =============================================================================== //

// 43. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает новый массив объектов, отсортированный в алфавитном порядке имён.
// =============================================================================== //

// 44. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает сумму всех очков у всех пользователей.
// =============================================================================== //

// 45. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает новый массив объектов, отсортированный от самого старшему к самому младшему.
// =============================================================================== //

// 46. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает новый массив объектов, отсортированный так, что сначала в массиве все женатые / замужние, а все холостяки внизу списка.
// =============================================================================== //

// 47. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает массив лучших трёх по количеству очков.
// =============================================================================== //

// 48. Задача
// Написать функцию, которая принимает на вход массив, функция возвращает массив пользователей, чья длина имени больше 4 символов.
// =============================================================================== //

// 49. Задача
// Написать функцию, которая принимает на вход массив, функция удаляет всех несовершеннолетних пользователей.

// 50. Задача
// Написать функцию, на вход которой подаётся 2 массива пользователей, функция возвращает новый массив, состоящий из всех пользователей двух массивов.
// =============================================================================== //

// ★ Задачи повышенной сложности ★
// ★ 51. Задача ★
// Написать функцию, которая принимает на вход массив, функция возвращает сумму всех очков у всех пользователей, которые женаты.
// =============================================================================== //

// ★ 52. Задача ★
// Написать функцию, которая принимает на вход массив, функция возвращает сумму всех очков у всех совершеннолетних пользователей.
// =============================================================================== //

// ★ 53. Задача ★
// Написать функцию, которая возвращает первое встречное слово, в котором хотя бы 2 буквы заглавные
// =============================================================================== //

// ★ 54. Задача ★
// Написать в функцию, на вход которой подаётся массив чисел Функция должна для каждого элемента этого массива вывести сумму двух его соседей и вернуть этот новый массив.Для элемента массива, являющихся крайними, одним из соседей считается элемент, находящийся на противоположном конце этого массива.Например, если на вход подаётся массив: 1 3 5 6 10, то на выход ожидается новый массив: 13 6 9 15 7
// Если на вход пришло одно число, то вывести его же
// =============================================================================== //

// ★ 55. Задача ★
// Реализовать свои варианты функции hof:

// forEach;
// find;
// findIndex;
// map;
// filter;
// some;
// every;
// reduce;














// const myArr = [5, 10, 25, 50, 100];

// function copyArrayAndDoSmth(arr, instructions) {
//   const output = [];

//   for (let i = 0; i < arr.length; i++) {
//     output.push(instructions(arr[i]))
//   }
//   return output;
// }



// function numSquared(num) {
//   return num * num;
// }

// function divideBy2(num) {
//   return num / 2;
// }



// const result = copyArrayAndDoSmth([10, 20, 30], numSquared);
// const result = copyArrayAndDoSmth([10, 20, 30], (num) => num ** 2);
// const result2 = copyArrayAndDoSmth([10, 20, 30], divideBy2);
//
// console.log(result);
// console.log(result2);