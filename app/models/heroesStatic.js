const DataTypes = require('sequelize');

module.exports = (sequelize) => {
    const hereoesstatics = sequelize.define('heroesstatics', {
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
    }, {
        timestamps: false
    });

    return hereoesstatics;
};