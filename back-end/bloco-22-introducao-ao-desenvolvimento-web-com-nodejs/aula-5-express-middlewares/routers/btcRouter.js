const router = require('express').Router();
const axios = require('axios');
const { isValidToken } = require('../middlewares/validations');

router.get('/price', isValidToken, async (req, res) => {
    const data = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
    return res.status(200).json(data.data)
})

module.exports = router;