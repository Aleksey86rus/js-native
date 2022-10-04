// * ===== Array methods 2 part (Calbbacks - HOF)

// HOF - High Order Function - функция на вход которой идёт ссылку на функцию

console.log(console.log); // Передал ссылку (callback  - ссылка на функцию)
console.log(console.log('test')) // Передали то, что возвращет функция console.log



// * 1. arr.forEach( (value, index, array) => undefined )
// Простой перебор
// forEach ничего не возвращает
// ! Не работает ключевое слово break / Использовать либо for, либо другие hof


const array = [3, 15, 9, 20]

// callback
// const log = v => {
//   console.log(v);
// }

// array.forEach(log)

array.forEach(v => {
  console.log(v);
})




// * 2. let value = arr.find( (value, index, array) => { return bool } )
// Поиск значениЯ по условию
// Метод find возвращает первое встречное value, на котором callback-функция вернула true
// Если ничего не найдёт, то вернёт undefined




const arrayNumber = [5, 7, -1, 3]

// Найти отриацтельное число



// const negValue = arrayNumber.find((value, index, array) => {
//   return value < 0
// })
// console.log(negValue);

// Рефаторинг

const negValue = arrayNumber.find((value) => value < 0)
console.log(negValue);



// * 3. let index = arr.findIndex( (value, index, array) => { return bool })
// Поиск индекса по условию
// Метод findIndex возвращает первый встречный index, на котором callback-функция вернула true
// Если ничего не найдёт, то вернёт -1


// * 4. let array = arr.filter( (value, index, array) => { return bool })
// Поиск значениЙ по условию
// Метод filter возвращает массив значений, на котором callback-функция вернула true
// Если ничего не найдёт, то вернёт []


const testArr = [654, 6, 546, -54, 765, -876, 8, -678]

const negArray = testArr.filter((v) => v < 0)
console.log(negArray);


// * 5. let array = arr.map( (value, index, array) => { return any })
// Преобразовывает массив

// Метод map возвращает массив значений, которые вернула callback-функция
// Возвращаемый массив всегда будет такой же длины, как и входной

// ~ Если не вернулось значение, то будет undefined в массиве


const nameUser = ['Alex', 'Nick', 'Pavel'] // [4, 4, 5]
// Получить преобразованный массив, на основе старого
// Преобразовать массив так, чтобы вместо имён было число - количество букв
// Вернуть новый массив, не мутировать исходный

const nameLength = nameUser.map((value) => {
  return value.length
})
console.log(nameLength);


// Дан массив чисел, заменить только чётные числа на '#'

const numArray = [6, 53, 2, 6, 65, 75, 4]


const newArray = numArray.map((value) => {
  return value % 2 === 0 ? '#' : value
  // if (value % 2 === 0) {
  //   return '#'
  // } else {
  //   return value
  // }
})

console.log(newArray);


// * 6. let hasInclude = arr.some( (value, index, array) => { return bool } )
// Проверка на нахождении хотя бы одного элемента в массиве (по условию)
// Метод some возвращает true - если есть хотя бы один элемент удовлетворяет, иначе false


// * 7. let hasAllInclude = arr.every( (value, index, array) => { return bool } )
// Проверяет, удовлятворяют ли все элементы массива условию
// Если все true, иначе false



// * 8. let value = arr.reduce( (prReturnValue, value, index, array) => { return any }, startValue )

// Вычисляет значение, на основе всего массива
// reduce возвращает одно значение

// prReturnValue - то, что вернула callback-функция на прошлой итерации
// Если итерация первая, то её значение равно startValue

// * Пример
// Посчитать сумму всего массива

const priceList = [10, 5, 7, 1, 3, 4]

const sum = priceList.reduce((prV, value) => {
  return prV + value
}, 0)
console.log(sum);

// prV = 0  value = 10 -> 10
// prV = 10 value = 5 -> 15
// prV = 15 value = 7 -> 22
// ...

// * Пример
// Посчитать сумму всеъ чисел

const dirtyArray = [5, '547', 5, 7, 'gfdhfg', null, 10]

const clearSum = dirtyArray.reduce((prV, value) => {
  return typeof value === 'number' ? prV + value : prV
}, 0)

console.log(clearSum);


// * 9. sort()




// * forEach

const testArray = [76, 657, 657, 568, 768, 67]


function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array)
  }
}




// const testCallback = (value, index, array) => {
//   console.log(value, index, array);
// }

// myForEach(testArray, testCallback)
// myForEach(testArray, (value, index, array) => {
//   console.log(value, index, array);
// })

// testArray.forEach(testCallback)


// * map

const nameList = ['word', 'hello', 'world', 'symbol']



function myMap(array, callback) {
  const newArr = []

  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i], i, array))
  }

  return newArr
}

console.log(myMap(nameList, (text) => text.length));


console.log(nameList.map((text) => text.length));









// * Логическая диагностика

// find - 1 значение такого же типа, как и элемент массива
// findIndex - 1 значение типа number

// map - массив той же длины, что и была, но любого друго или того же типа
// filter - массив той же длины или меньше, такого же типа данных и тех же значений, что были

// reduce - 1 значение того же типа данных, что и в массиве

// some - 1 значение булевое
// every - 1 значение булевое

// forEach - ничего не возвращает














