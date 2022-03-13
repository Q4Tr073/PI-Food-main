const { DataTypes, sequelize } = require('sequelize');

module.exports = sequelize=> {
    sequelize.define('DietType', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
};