const DataTypes = require('sequelize');

module.exports = (sequelize) => {
    const heroes = sequelize.define('heroes', {
        "id": {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        "health": {
            type: DataTypes.BIGINT
        },
        "quality": {
            type: DataTypes.INTEGER
        },
        "level": {
            type: DataTypes.INTEGER
        },

    });

    return heroes;
};