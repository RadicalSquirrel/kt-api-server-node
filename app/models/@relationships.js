const DataTypes = require('sequelize');

const Relationships = (db) => {

    //db.models.users.belongsToMany();
    db.models.heros.belongsTo(db.models.rankstatics, {as: 'rank'}); // FK in Heroes 1:1
    db.models.heros.belongsTo(db.models.heroesstatics, { as: 'hero' }); // FK in Heroes 1:1
    db.models.tourneytargets.hasMany(db.models.heros, { as: 'tourneytarget' }); // FK in Heroes 1:N
    db.models.groups.belongsTo(db.models.users, { as: 'admin' }); // FK in groups 1:1
    db.models.tourneytargets.belongsTo(db.models.users, { as: 'creator' }); // FK in tourneytargets 1:N
    db.models.users.belongsToMany(db.models.groups, { through: 'users_groups' }); // FK in new table N:M
    db.models.groups.belongsToMany(db.models.users, { through: 'users_groups' }); // FK in new table N:M
    db.models.tourneytargets.belongsToMany(db.models.groups, { through: 'tourneytargets_groups' }); // FK in new table N:M
    db.models.groups.belongsToMany(db.models.tourneytargets, { through: 'tourneytargets_groups' }); // FK in new table N:M
    return true;
};


module.exports = Relationships;