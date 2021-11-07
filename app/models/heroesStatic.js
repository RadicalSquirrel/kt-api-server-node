const DataTypes = require('sequelize');

module.exports = (sequelize) => {
    const hereoesstatic = sequelize.define('heroesstatic', {
        "id": {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        "name": {
            type: DataTypes.STRING
        },
        "image_reference": {
            type: DataTypes.STRING
        }
    });

    return hereoesstatic;
};