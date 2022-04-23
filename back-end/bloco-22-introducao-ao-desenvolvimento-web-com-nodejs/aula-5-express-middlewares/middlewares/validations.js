const isValidUsername = (req, res, next) => {
    const { username } = req.body;
    if (!username || username.length <= 3) return res.status(400).json({message: "invalid data"});
    next();
};

const isValidEmail = (req, res, next) => {
    const { email } = req.body;
    if (!email || !email.includes('@') || !email.includes('.com')) return res.status(400).json({message: "invalid data"});
    next();
};

const isValidPassword = (req, res, next) => {
    const { password } = req.body;
    if(!password || password.length > 8 || password.length < 4) return res.status(400).json({message: "invalid data"});
    next();
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

