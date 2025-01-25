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

// function myFn (a, b) {
//     let c 
//     a = a + 1
//     c = a + b 
//     return c
// }

// myFn(10, 3)

// const result = myFn(10, 3)
// console.log(result) // 14

// ----------------------------------------------------

// Передача значения по ссылке 

// const personOne = {
//     name: 'Bob',
//     age: 21
// }

// function increasePersonAge(person) {
//     person.age += 1
//     return person
// }

// increasePersonAge(personOne)
// console.log(personOne.age) // 22

// Внутри функции не рекомендуется мутировать внешние обьекты
// Но мы можем внутри функции создавать копии обьектов

// const personOne = {
//     name: 'Bob',
//     age: 21
// }

// function increasePersonAge(person) {
//     const updatedPerson = Object.assign({}, person)
//     updatedPerson.age += 1
//     return updatedPerson
// }

// const updatedPersonOne = increasePersonAge(personOne)

// console.log(personOne.age) // 21
// console.log(updatedPersonOne.age) // 22

// Пример выше как нужно создавать копии обьектов внутри функции и мутировать их
// при этом не трогая оригинальный (внешний) обьект

// ----------------------------------------------------

// Колбэк функции

// function anotherFunction() {

// }

// function fnWithCallback(callbackFunction) {
//     callbackFunction()
// }

// fnWithCallback(anotherFunction)

// В теле функции вызывается другая функция, ниже еще пример

function printMyName() {
    console.log('Victor')
}

setTimeout(printMyName, 1000)
