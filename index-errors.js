// Что происходит в случае ошибок 

// const fnWithError = () => {
//     throw new Error('Some Error')
// }

// fnWithError()

// console.log('Continue...')

// ----------------------------------------------------

// TRY/CATCH поможет обнаружить ошибку

// try {
//     // Выполнение блока кода
// } catch (error) {
//     // Этот блок выполняется в случае 
//     // возникновения ошибок в блоке try
// }

// Ниже пример

// const fnWithError = () => {
//     throw new Error('Some Error')
// }

// try {
//     fnWithError()
// } catch (error) {
//     console.error(error)
//     console.log(error.message)
// }

// console.log('Continue...')


