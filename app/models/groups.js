const DataTypes = require('sequelize');

module.exports = (sequelize) => {
    const groups = sequelize.define('groups', {
        "id": {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        "name": {
            type: DataTypes.STRING,
            notNull: true
        }
    });

    return groups;
};