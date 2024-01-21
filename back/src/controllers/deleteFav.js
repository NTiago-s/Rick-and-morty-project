const { Favorite } = require('../models/Character');

const deleteFav = async (req, res) => {
    try {
        const { idUser } = req.query;
        const { id } = req.params;
        const fav = await Favorite.findByPk({ id });
        await fav.removeUser(idUser);

        const allFavorites = await Character.findAll({
            include: [{ model: User, where: { id: idUser } }]
        });
        return res.status(200).json(allFavorites);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    deleteFav
}