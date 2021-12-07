const DataTypes = require('sequelize');

module.exports = (sequelize) => {
    const tourneytargets = sequelize.define('tourneytargets', {
        "id": {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        "gameId": {
            type: DataTypes.BIGINT,
            notNull: true
        },
        "name": {
            type: DataTypes.STRING,
            notNull: true
        },
        "numberOfHeroes": {
            type: DataTypes.INTEGER,
            notNull: true
        }
    },{
        timestamps: true
    });

    return tourneytargets;
};