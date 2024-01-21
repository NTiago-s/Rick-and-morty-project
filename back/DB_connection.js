require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { CharacterModel } = require('./src/models/Character')
const { UserModel } = require('./src/models/User')
const URL = (`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`)

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   URL,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
CharacterModel(sequelize);
UserModel(sequelize);
//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Character } = sequelize.models;
User.belongsToMany(Character, { through: 'user_favorites' });
Character.belongsToMany(User, { through: 'user_favorites' });

module.exports = {
   User,
   Character,
   conn: sequelize,
};
