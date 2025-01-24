// Области видимости 

// let a // Глобальные переменные а и b
// let b 

// function myFn() {
//     let b // переменная b обьявленная внутри функции является локальной
//     a = true
//     b = 10
//     console.log(b) // 10
// }

// myFn()

// console.log(a) // true
// console.log(b) // undefined

// Цепочка областей видимости

const a = 5

function myFn() {
    function innerFn(){
        console.log(a) // 5
    }

    innerFn()
}

myFn() // undefined т.к нет return