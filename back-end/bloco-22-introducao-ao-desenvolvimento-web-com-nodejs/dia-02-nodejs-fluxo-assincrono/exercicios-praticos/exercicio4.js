const fs = require('fs').promises;

const func1 = async () => {
    const data = await fs.readFile('./simpsons.json', 'utf-8')
    .then((result) => JSON.parse(result));
    const dataStrings = data.map((res) => `${res.id} - ${res.name}`);
    dataStrings.forEach((string) => console.log(string));
}

const func2 = async (id) => {
    const data = await fs.readFile('./simpsons.json', 'utf-8')
    .then((result) => JSON.parse(result));
    return new Promise((resolve, reject) => {
        if (!data.some((d) => d.id === id)) {
            reject('Id não encontrado!')
        }
        return resolve(data.find((f) => f.id === id))
    })
}

const runFunc2 = async () => {
    try {
        const xablau = await func2('5');
        console.log(xablau);
    } catch (err) {
        console.error(err)
    }
}

const main3 = async () => {
   const data = await fs.readFile('./simpsons.json', 'utf-8')
    .then((res) => JSON.parse(res))
    .then((res2) => res2.filter((res) => res.id !== '6' && res.id !== '10'));
    await fs.writeFile('./simpsons.json', JSON.stringify(data));
};

const main4 = async () => {
    const data = await fs.readFile('./simpsons.json', 'utf-8')
    .then((res) => JSON.parse(res))
    .then((res) => res.filter((f) => Number(f.id) <= 4))
    .then((res) => JSON.stringify(res));
    await fs.writeFile('./simpsonsFamily.json', data);
};

const func5 = async () => {
    const data = await fs.readFile('./simpsonsFamily.json', 'utf-8')
        .then((res) => JSON.parse(res))
        // .then((res) => res.push({id: '5', name: 'Nelson Muntz'}));
    data.push({id: '5', name: 'Nelson Muntz'});
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(data));
};

