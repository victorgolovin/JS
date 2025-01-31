// Конкатенация строк


// Оператор + для конкатенации строк

// 'Hello ' + 'World'

// ----------------------------------------------------

// Переменные в конкатенации строк

// const hello = 'Hello'
// const world = 'World'

// const greeting = hello + '' + world

// Но лучше использовать шаблонные строки

const hello = 'Hello'
const world = 'World'

const greeting = `${hello} ${world}` // в фигурных скобках может быть любое выражение, например, вызов функции

const myName = 'Victor'
const myCity = 'Moscow'

const myGreetings = `${'Me name'} ${myName} ${'and i live in'} ${myCity}`

console.log(myGreetings)