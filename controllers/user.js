const jwt = require('jsonwebtoken');

const users = {
    admin: 'admin',
}

exports.login = async (req,res,next) => {
    const { username, password } = req.body;

    if (users[username] && users[username] === password) {
        const token = jwt.sign({ username }, 'RANDOM_TOKEN_SECRET', { expiresIn: '1h' });
        return res.json({ token });
    }

    return res.status(401).json({ message: 'Bad request' });
};
