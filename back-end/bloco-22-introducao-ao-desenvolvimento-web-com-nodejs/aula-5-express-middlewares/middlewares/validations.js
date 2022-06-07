const Joi = require('joi');

const isValidUsername = (req, res, next) => {
    const { username } = req.body;
    if (!username || username.length <= 3) return res.status(400).json({message: "invalid data"});
    next();
};

const joiEmail = Joi.object({
    email: Joi.string().email().required(),
});

const isValidEmail = (req, res, next) => {
    const { email } = req.body;
    const { error } = joiEmail.validate({email});
    if (error) return next({status: 400, message: error.message});
    next();
};

const joiPassword = Joi.object({
    password: Joi.string()
    .min(4)
    .max(8)
    .required()
});

const isValidPassword = (req, res, next) => {
    const { password } = req.body;
    const { error } = joiPassword.validate({ password });
    if (error) return next({status: 400, message: error.message});
    return next();
};

const isValidToken = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({message: "invalid token"});
    next();
}

const isValidName = (req, res, next) => {
    const { name } = req.body;
    if (!name || name.length < 5) return res.status(400).json({message: "invalid data"});
    next();
};

const isValidInitials = (req, res, next) => {
    const { initials } = req.body;
    if (!initials || initials.length > 3) return res.status(400).json({message: "invalid data"});
    next();
};

const isValidCountry = (req, res, next) => {
    const { country } = req.body;
    if (!country || country.length < 3) return res.status(400).json({message: "invalid data"});
    next();
};



module.exports = ({
    isValidUsername,
    isValidEmail,
    isValidPassword,
    isValidToken,
    isValidName,
    isValidInitials,
    isValidCountry,
});

