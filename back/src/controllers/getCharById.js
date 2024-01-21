const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios(`${URL}/${id}`);
        const data = response.data;
        if (data.id) {
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                status: data.status,
                origin: data.origin,
                image: data.image,
            };
            return res.status(200).json(character);
        } else {
            return res.status(404).send('Not found');
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    getCharById
};