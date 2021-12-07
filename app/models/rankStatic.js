const DataTypes = require('sequelize');

module.exports = (sequelize) => {
    const rankstatics = sequelize.define('rankstatics', {
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
    }, {
        timestamps: false
    });

    return rankstatics;
};