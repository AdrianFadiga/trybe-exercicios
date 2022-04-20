const func = (a, b, c) => {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
        reject('Informe apenas números');
        const result = (a + b) * c;
        if (result < 50) {
            return reject('Valor muito baixo');
        }
        resolve(result);
    });
};

const main = async () => {
    try {
        const xablau = await func(20, 30, 40);
        console.log(xablau);
    } catch(err) {
        console.error(err);
    }
};

func(20, 30, 40)
    .then(result => console.log(result))
    .catch(err => console.error(err));


const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    return randomNumber;
};



