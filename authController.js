const bcrypt = require('bcrypt');

const users = [{ username: 'admin', password: bcrypt.hashSync('admin', 10) }];

exports.login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (user && bcrypt.compareSync(password, user.password)) {
        req.session.user = user;
        return res.status(200).send();
    }
    res.status(401).json({ error: 'Usuário ou senha inválidos!' });
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.status(200).send();
};
