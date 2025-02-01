// Конкатенация строк


// Оператор + для конкатенации строк

// 'Hello ' + 'World'

// ----------------------------------------------------

// Переменные в конкатенации строк

// const hello = 'Hello'
// const world = 'World'

// const greeting = hello + '' + world

// Но лучше использовать шаблонные строки

// const hello = 'Hello'
// const world = 'World'

// const greeting = `${hello} ${world}` // в фигурных скобках может быть любое выражение, например, вызов функции

// const myName = 'Victor'
// const myCity = 'Moscow'

// const myGreetings = `${'Me name'} ${myName} ${'and i live in'} ${myCity}`

// console.log(myGreetings)

// ----------------------------------------------------

// Функциональные выражения

// Обьявленная функция vs функциональное выражение 

// Обьявленная функция

// function myFn(a, b) {
//     let c 
//     a = a + 1
//     c = a + b

//     return c
// }

// Функциональное выражение 

// function(a, b) {
//     let c 
//     a = a + 1
//     c = a + b

//     return c
// }

// Функциональное выражение всегда анонимные

// Присваивание функционального выражение переменной

const myFunction = function(a, b) {
    let c
    a = a + 1
    c = a + b
    
    return c 
}

console.log(myFunction(4, 5))

// Функциональное выражение в вызове другой функции

setTimeout(function() {
    console.log('Delay message')
}, 1000)