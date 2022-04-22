const fs = require('fs').promises;
const express = require('express');
app = express();
app.use(express.json());
const PORT = 3001;

const getSimpsons = async () => {
    return fs.readFile('./simpsons.json', 'utf-8')
    .then((res) => JSON.parse(res));
};

const addNewSimpson = async (id, name) => {
}

app.get('/simpsons/:id', async (req, res) => {
    const { id } = req.params;
    const simpsons = await getSimpsons();
    const simpson = simpsons.find((simpson) => simpson.id === id);
    if (!simpson) return res.status(404).json({message: "simpson not found"});
    return res.status(200).json(simpson);
})

app.get('/simpsons', async (req, res) => {
    try {
    const simpsons = await getSimpsons();
    return res.status(200).json(simpsons);
    }
    catch (err) {
        return res.status(500).end();
    }
});

app.post('/simpsons', async (req, res) => {
    const simpsons = await getSimpsons();
    const { id, name } = req.body;
    const findSimpson = simpsons.filter((simpson) => simpson.id === id);
    if (findSimpson.length) return res.status(409).json({message: "id already exists"});
    fs.writeFile('./simpsons.json', JSON.stringify([...simpsons, {id, name}], null, 2));
    return res.status(204).end();
})


app.listen(PORT, () => {
    console.log(PORT);
})
