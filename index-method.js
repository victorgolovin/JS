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


const post = {
    title: 'My post',
    likeQty: 5
}

JSON.stringify(post)

console.log(post)

const postStringifaed = JSON.stringify(post)

JSON.parse(postStringifaed)

console.log(postStringifaed)