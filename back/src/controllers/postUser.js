const { User } = require('../../DB_connection');

const postUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            res.status(400).send("Faltan Datos");
        } else {
            const existingUser = await User.findOne({
                where: { email },
            });
            if (!existingUser) {
                const newUser = await User.create({ email, password });
                res.status(201).json(newUser);
            } else {
                res.status(400).send("El usuario ya existe");
            }
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { postUser };
