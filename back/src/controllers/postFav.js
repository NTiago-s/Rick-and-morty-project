const { Character } = require('../../DB_connection');

const postFav = async (req, res) => {
    try {
        const { idUser } = req.query;
        const { id, name, image, gender } = req.body;
        if (!id) {
            return res.status(401).send("Faltan Datos");
        } else {
            console.log("hasta aca llega1");
            const [fav, created] = await Character.findOrCreate({
                where: { id },
                defaults: { name, image, gender }
            });
            console.log("hasta aca llega2");
            if (!created) {
                alert("Character already exists");
            }
            console.log("hasta aca llega3");
            await fav.addUser(idUser);
            const allFavorites = await Character.findAll({
                include: [{ model: User, where: { id: idUser } }]
            });
            console.log("hasta aca llega4");
            res.status(201).json(allFavorites);
        }
    } catch (error) {
        console.log("hasta aca llega5");
        res.status(500).json({ error: error.message });
    }
};

module.exports = { postFav };
