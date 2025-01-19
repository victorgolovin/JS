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

 // let myName

 // console.log(myName)

 // myName = 'Victor'

 // console.log(myName)

 // const myName = 'Victor'

 // console.log(myName)

 // Ссылочный тип Object

 const objectA = {
  a: 10,
  b: true
 }

 const copyOfA = objectA

 copyOfA.a = 20
 copyOfA.c = 'abc'

 console.log(objectA)
 console.log(copyOfA)