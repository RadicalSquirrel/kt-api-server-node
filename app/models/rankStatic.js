const DataTypes = require('sequelize');

module.exports = (sequelize) => {
    const rankstatic = sequelize.define('rankstatic', {
        "id": {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        "name": {
            type: DataTypes.STRING
        },
        "color": {
            type: DataTypes.STRING
        }
    });

    return rankstatic;
};