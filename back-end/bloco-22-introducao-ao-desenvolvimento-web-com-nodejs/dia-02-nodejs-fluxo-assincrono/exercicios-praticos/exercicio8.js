const func1 = (num) => {
    return new Promise((resolve, reject) => {
        if (num % 5 === 0 && num % 3 === 0 ) {
            return resolve('FizzBuzz');
        };
        if (num % 3 === 0) {
            return resolve('Fizz');
        };
        if (num % 5 === 0) {
            return resolve('Buzz');
        };
        reject(num)
    })
};