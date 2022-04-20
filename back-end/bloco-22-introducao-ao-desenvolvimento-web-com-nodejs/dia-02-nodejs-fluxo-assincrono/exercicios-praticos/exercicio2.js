const func = async (a, b, c) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        throw new Error('Somente números são válidos');
    };
    const result = (a + b) * c;
    if (result < 50) { 
    return (a + b) * c
    };
};

try {
    func(20, 25, 30);
} catch(err) {
    console.error(err)
}

console.log(func(20, 25, 30));