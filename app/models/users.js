const DataTypes = require('sequelize');

module.exports = (sequelize) => {
    const users = sequelize.define('users', {
        "id": {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        "email": {
            type: DataTypes.STRING,
            notNull: true
        },
        "name": {
            type: DataTypes.STRING,
            notNull: true
        },
        "isadmin": {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    return users;
};