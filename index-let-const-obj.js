/* JavaScript

 Самое важное в JS это:
 - Выражения
 - Функции
 - Объекты 

 Пример обьекта:

 {
  visible: true,
  colorDepth: 24,
  title: 'My Image',
  orientation: {
    angle: 0,
    type: 'landscape'
  },
  pixelDepth: 24,
  width: 1440
 }
 */

  /*Выражения 

  'abc' // 'abc'
  10 // 10
  a + b // Сумма "a" и "b"
  'Good ' + 'Evening' // Good Evening
  a <= b || c !== d  // true или false
  myFunction(c,d)  // результат функции */

  // ----------------------------------------------------

 // let myName

 // console.log(myName)

 // myName = 'Victor'

 // console.log(myName)

 // const myName = 'Victor'

 // console.log(myName)

 // Ссылочный тип Object

 // ----------------------------------------------------

//  const objectA = {
//   a: 10,
//   b: true
//  }

//  const copyOfA = objectA

//  copyOfA.a = 20
//  copyOfA.c = 'abc'

//  console.log(objectA)
//  console.log(copyOfA)

// ----------------------------------------------------
 
// Динамическая типизация в JS

//  function a() {
//   console.log('Hey there')
//  }

//  a()

//  a = 10

//  a() // TypeError: a is not a function

// ----------------------------------------------------

// Пример с CONST

// const a = () => {
//   console.log('Hey there')
// }

// a()

// a = 10 // TypeError: Assignment to constant variable.

// a()

// Переменной а нельзя присвоить новое значение

// ----------------------------------------------------

// const myCity = {
//   city: 'New York',
//   popular: true,
//   country: 'USA'
// }

// console.log(myCity.city) // New York

// console.log(myCity.popular) // true

// ----------------------------------------------------

// Так же можешь менять свойства обьекта

// const myCity = {
//   city: 'New York'
// }

// myCity.city = 'Las Vegas'

// console.log(myCity) // { city: 'Las Vegas' }

// ----------------------------------------------------

// Так же можем создавать новые свойства в обьектах

// const myCity = {
//   city: 'New York'
// }

// myCity.popular = true

// console.log(myCity) // { city: 'New York', popular: true }

// myCity.country = 'USA'

// console.log(myCity) // { city: 'New York', popular: true, country: 'USA' }

// ----------------------------------------------------

// Теперь рассмотрим пример удаления свойства из обьекта

// const myCity = {
//   city: 'New York',
//   popular: true,
//   country: 'USA'
// }

// delete myCity.country

// console.log(myCity) // { city: 'New York', popular: true }

// ----------------------------------------------------

// Доступ к значению свойства с помощью квадратных скобок

// const myCity = {
//   city: 'New York'
// }

// myCity['popular'] = true

// console.log(myCity) // { city: 'New York', popular: true }

// const countryPropertyName = 'country'

// myCity[countryPropertyName] = 'USA'

// console.log(myCity) // { city: 'New York', popular: true, country: 'USA' }

// ----------------------------------------------------

// Так же есть обьекты с вложенными свойствами 

// const myCity = {
//   city: 'New York',
//   info: {
//     isPopular: true,
//     country: 'USA'
//   }
// }

// console.log(myCity.info.isPopular) // true

// delete myCity.info['isPopular']

// console.log(myCity) // { city: 'New York', info: { country: 'USA' } }

// ----------------------------------------------------

// Мы можем использовать переменные в обьектах

// const name = 'Victor'
// const postQty = 25

// const useProfile = {
//   name: name,
//   postQty: postQty,
//   hasSignedAgreement: false
// }

// Или сокращенный вариант который чаще всего используется

const name = 'Victor'
const postQty = 25

const useProfile = {
  name,
  postQty,
  hasSignedAgreement: false
}

console.log(useProfile) // { name: 'Victor', postQty: 25, hasSignedAgreement: false }