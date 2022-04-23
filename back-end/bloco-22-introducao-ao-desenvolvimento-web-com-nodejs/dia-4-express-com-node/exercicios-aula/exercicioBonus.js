const express = require('express');
const crypto = require('crypto');
const app = express();
app.use(express.json());
const PORT = 3001;
const generateToken = () => crypto.randomBytes(8).toString('hex');

const validateBody = (req, res, next) => {
    const { email, password, firstName, phone } = req.body;
    if (!email || !password || !firstName || !phone) return res.status(401).json({message: 'missing fields'});
    next();
}

app.post('/signup', validateBody, (_req, res) => {
    const token = generateToken();
    return res.status(200).json({token});
})

app.listen(3001, () => {
    console.log(PORT)
});



