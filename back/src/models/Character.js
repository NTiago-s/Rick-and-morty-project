const { DataTypes } = require('sequelize');

const CharacterModel = (sequelize) => {
   sequelize.define('Character', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      status: {
         type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),

      },
      species: {
         type: DataTypes.STRING,

      },
      gender: {
         type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
         allowNull: false,
      },
      origin: {
         type: DataTypes.STRING,
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false,
      },
   }, {
      timestamps: false,
      tableName: 'characters'
   });
};
module.exports = {
   CharacterModel
}