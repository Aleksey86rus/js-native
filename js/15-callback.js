// * ===== Array methods 2 part (Calbbacks - HOF)

// HOF - High Order Function - функция на вход которой идёт ссылку на функцию

console.log(console.log); // Передал ссылку (callback  - ссылка на функцию)
console.log(console.log('test')) // Передали то, что возвращет функция console.log



// * 1. arr.forEach( (value, index, array) => undefined )
// Простой перебор
// forEach ничего не возвращает


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




// * 1 - 8