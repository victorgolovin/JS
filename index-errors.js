// Что происходит в случае ошибок 

const fnWithError = () => {
    throw new Error('Some Error')
}

fnWithError()

console.log('Continue...')