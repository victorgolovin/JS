// Оператор - это встроенная функция в JS

// Операторы есть арифметические:

// + плюс, - минус, * умножение, / деление

// Операторы сравнения:

// === равно, !== не равно, <= меньше либо равно, >= больше либо равно

// Логические операторы:

// ! НЕ, && И, || ИЛИ

// Оператор присваивания:

// = присваивание 

// ----------------------------------------------------

// let a, b

// a = 10
// b = a

// let c = a + b

// console.log(c) // 20

// Еще раз оператор это втроенная функция 

// а = 10

// Ниже пример как выглядит встроенная функция равно (=)

// function = (переменная, выражение) {
//     1. Получение результата выражения
//     2. Поиск переменной по имени
//     3. Присваивание результата выражения переменной 
//     4. Возврат результата выражения
// }

// ----------------------------------------------------

// Операнды а = 10 слева и справа или же аргументы, ниже примеры

// Унарные операторы - у унарных операторов всегда один операнд (аргумент)

// a++ такой оператор увеличает значение переменной на единицу

// +a такой оператор конвентирует строку в число

// delete obj.a оператор удаления одного из свойст обьекта

// typeof a узнать тип переменной

// new Object() можно создать экземпляр обьекта 

// ----------------------------------------------------

// Бинарные операторы - у бинарных оператора два операнда (аргумента)

// a = 5 Оператор присваивания

// a + b оператор плюс

// a += 5 оператор увеличения и присваивания значения 

// a === b оператор сравнения 

// a && b оператор И

// ----------------------------------------------------

// Инфиксная запись, в таком формате оператор находится между операндами

// a = true

// a + b

// a += 5

// a || b

// a > b

// ----------------------------------------------------

// Префиксная запись, оператор стоит перед операндом

// ++a

// delete obj.a

// typeof a

// ----------------------------------------------------

// Постфиксная запись, это когда оператор идет за операндом

// a++

// myFunction()

// ----------------------------------------------------

// Логические операторы

// ! - НЕ (всегда возвращает значение типа boolean true или false)

// && - И

// || - ИЛИ

// ----------------------------------------------------

// Ложные значения в JS

// Boolean(value) -> false, 0, '', undefined, null (ложные значения выдают false)

// ----------------------------------------------------

// Оператор ! (НЕ или отрицания) чаще всего используется в условных инструкциях

!10 // false
!0 // true
!'abc' // fasle
!'' // true
!true // false
!undefined // true

// Отрицания отрицания !!

!!10 // true
!!0 // false
!!'abc' // true
!!'' // false
!!true // true
!!undefined // false

// ----------------------------------------------------

// Операторы && и || являются операторами короткого замыкания

// Оператор &&

// выражение 1 && выражение 2, если выражение 1 ложно, то выражение 2 игнорируется и возращается результат выражения 1

// Оператор ||

// выражение 1 || выражение 2, если выражения 1 истенно, то выражения 2 игнориуется и возращается результат выражения 1

// Цепочка операторов && и ||

// a && b && c && d

// a || b || c || d

// ----------------------------------------------------

// Оператор разделения обьекта на свойства ...

// const button = {
//     width: 200,
//     text: 'buy'
// }

// const redButton = {
//     ...button,
//     color: 'red'
// }

// console.table(redButton) 

// ----------------------------------------------------

// Обьединение обьектов с помощью ...

const buttonInfo = {
    text: 'Buy'
}

const buttonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
}

const button = {
    ...buttonInfo,
    ...buttonStyle
}

console.table(button)