// Функции

// let a = 5
// let b = 3

// let c

// c = a + b
// console.log(c) // 8

// a = 8
// b = 12

// c = a + b
// console.log(c) // 20 

// Как видно выше на строках 8,9 и 14,15 одинаковые строки кода
// их нужно оптимизировать с помощью функции

// let a = 5
// let b = 3

// function sum(a, b) {
//     const c = a + b
//     console.log(c)
// }

// sum(a, b) // 8

// a = 12
// b = 8

// sum(a, b) // 20

// ----------------------------------------------------

// Функция - это обьект 

function myFn (a, b) {
    let c 
    a = a + 1
    c = a + b 
    return c
}

myFn(10, 3)

const result = myFn(10, 3)
console.log(result) // 14


