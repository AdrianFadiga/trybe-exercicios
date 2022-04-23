const router = require('express').Router();
const fs = require('fs').promises;
const {
    isValidName,
    isValidInitials,
    isValidCountry,
} = require('../middlewares/validations');

router.post('/', isValidName, isValidInitials, isValidCountry, async (req, res) => {
    const teams = await fs.readFile('./teams/teams.json')
    .then((res) => JSON.parse(res));
    await fs.writeFile('./teams/teams.json', JSON.stringify([...teams, req.body], null, 2));
    return res.status(200).json(req.body);
});

router.get('/', async (req, res) => {
    const teams = await fs.readFile('./teams/teams.json')
    .then((res) => JSON.parse(res));
    if (!teams.length) return res.status(200).json({teams: []});
    return res.status(200).json(teams);
})

module.exports = router;