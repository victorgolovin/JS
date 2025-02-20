// Области видимости 

// let a 
// let b  // 1. Обьявление b в глобальной области видимости, ее значение undefined

// function myFn() {
//     let b // 3. Обьявление b в зоне видимости функции
//     a = true
//     b = 10 // 4. Обьявлена ли b в рамках функции? ДА, присовение этой переменной b значение 10
//     console.log(b) // 10 (5. b имеет значение 10 в области видимости функции)
// }

// myFn() // 2. Вызов функции myFn

// console.log(a) // true
// console.log(b) // undefined (6. b все так же имеет значение undefined в глобальной области видимости)

// ----------------------------------------------------

// // Цепочка областей видимости

// const a = 5

// function myFn() {
//     function innerFn(){
//         console.log(a) // 5
//     }

//     innerFn()
// }

// myFn() // undefined т.к нет return

// ----------------------------------------------------

// Как не нужно делать в JS, ниже пример, переменная а не обьявлена ни в глобальной зоне видимости,
// ни в функции myFn, JS автоматически ее создаст в глобальной области видимости.

// function myFn() {
//     a = true
//     console.log(a) // true
// }

// myFn()

// console.log(a) // true

// Правила работы с переменными
// 1. Все переменные обьевлять ПЕРЕД их использованием
// 2. Стараться использовать const везде где это возможно
// 3. Внутри функции не изменять переменные с внешних областей видимости

// ----------------------------------------------------

// Строгий режим

// 'use strict' - запрещает использование не обьявленныъ переменных

// 'use strict'

// function myFn() {
//     a = true // ReferenceError: a is not defined
//     console.log(a) 
// }

// myFn()

// console.log(a) 

