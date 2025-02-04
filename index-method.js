// Методы - свойства обьекта, значение которого это функция.

// const myCity = {
//     city: 'New York',
//     cityGreeting: function() {     // в данном примере cityGreeting является методом обьекта myCity
//         console.log('Greetings!!!')
//     }
// }

// myCity.cityGreeting() // Greetings!!!

// Ниже сокращенная  форма записи методов 

// const myCity = {
//     city: 'New York',
//     cityGreeting() {                // сокращенная  форма записи методов 
//         console.log('Greetings!!!')
//     }
// }

// myCity.cityGreeting() // Greetings!!!

// ----------------------------------------------------

// JSON - JAVASCRIPT OBJECT NOTATION

// {
//     "userId": 1,
//     "id": 1,
//     "title": "Test title",
//     "status": {
//         "completetd": false
//     }
// }

// const post = {
//     title: 'My post',
//     likeQty: 5
// }

// JSON.stringify(post)

// console.log(post)

// const postStringifaed = JSON.stringify(post)

// JSON.parse(postStringifaed)

// console.log(postStringifaed)

// ----------------------------------------------------

// Мутации в JS
// Значения примитивных данных

// const a = 10

// let b = a

// b = 30

// console.log(a) // 10
// console.log(b) // 30

// Значения ссылочного типа 

// const person = {
//     name: 'Bob',
//     age: 20
// }

// person.age = 22
// person.isAdult = true

// console.log(person.age) // 22
// console.log(person.isAdult) // true

// Пример выше мутации обьекта

// Ниже мутирование копий

// const person = {
//     name: 'Bob',
//     age: 25
// }

// const person2 = person

// person2.age = 26
// person2.isAdult = true

// console.log(person.age) // 26
// console.log(person.isAdult) // true

// Как избежать мутаций

// const person = {
//     name: 'Bob',
//     age: 25
// }

// const person2 = Object.assign({}, person)

// person2.age = 26

// console.log(person.age) // 25
// console.log(person2.age) // 26

// Второй вариант 

// const person = {
//     name: 'Bob',
//     age: 25
// }

// const person2 = {...person}

// person2.name = 'Alice'

// console.log(person.name) // Bob
// console.log(person2.name) // Alice

// Третий способ 

// const person = {
//     name: 'Bob',
//     age: 25
// }

// const person2 = JSON.parse(JSON.stringify(person))

// person2.name = 'Alice'

// console.log(person.name) // Bob
// console.log(person2.name) // Alice

