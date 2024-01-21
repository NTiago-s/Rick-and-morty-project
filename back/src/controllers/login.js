const { User } = require('../../DB_connection');

const Login = async (req, res) => {
    try {
        const { email, password } = req.query;
        if (!email || !password) {
            return res.status(400).send("Faltan Datos");
        } else {
            const user = await User.findOne({ where: { email } });
            if (!user) {
                return res.status(404).send("Usuario no encontrado");
            } else {
                if (user.password === password) {
                    return res.status(200).json({ access: true });
                } else {
                    return res.status(403).json({ error: "Contraseña incorrecta" });
                }
            }
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    Login
}