// 1.
// Написать функцую, которая удаляет у строки последнюю букву

// function deleteStrLastLetter(str) {
//   let newStr = str.split('');
//   newStr.pop();
//   return newStr.join('')
// }
// function deleteStrLastLetter(str) {
//   const newStr = str.split('');
//   newStr.pop()
//   return newStr.join('')
// }

// ? Сделать с помощью цикла
function deleteStrLastLetter(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1]) {
      newStr += str[i]
    }
  }
  return newStr
}
console.log(deleteStrLastLetter('params'));



// const text = 'text, text'
// console.log(text.split()); // ['text, text'] - один элемент
// // console.log(['text', 'text']); // ! Не путать с массивом двух элементов
// console.log(text.split('')); // *** ['t', 'e', 'x', 't', ',', ' ', 't', 'e', 'x', 't']
// console.log(text.split(',')); // ['text', ' text']
// console.log(text.split(', ')); // ['text', 'text']
// console.log(text.split('!')); // ['text, text'] - один элемент



// console.log(['text, text'].join()); // text, text // Был массив с одним элементом!
// console.log(['text', 'text'].join()); // text,text
// console.log(['text', 'text'].join(',')); // ! text,text - параметр по умолчанию
// console.log(['text', 'text'].join(', ')); // text, text
// console.log(['text', 'text'].join('')); // *** texttext
// console.log(['t', 'e', 'x', 't', ',', ' ', 't', 'e', 'x', 't'].join('')); // text, text


// 2.
// Написать функцию, которая проверяет входную переменную является ли она null или undefined

// function checkVariable(params) {
//   return params === null || params === undefined
// }
// function checkVariable(params) {
//   return params == null
// }

// console.log(checkVariable(null));
// console.log(checkVariable(undefined));
// console.log(checkVariable(NaN));
// console.log(checkVariable(0));
// console.log(checkVariable(1));
// console.log(checkVariable('tex'));
// console.log(checkVariable(''));
// console.log(checkVariable(false));

// console.log(null == 0);
// console.log(Number(null) == 0);
// console.log(null == undefined);
//

// console.log(1 || 2); // 1
// console.log(true || false); // true

// console.log(1 || true); // 1
// console.log(0 || true); // true



// 





