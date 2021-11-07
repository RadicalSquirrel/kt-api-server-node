const DataTypes = require('sequelize');

const Relationships = (db) => {

    //db.models.users.belongsToMany();
    db.models.heroes.belongsTo(db.models.rankstatic, {as: 'rank'}); // FK in Heroes 1:1
    db.models.heroes.belongsTo(db.models.heroesstatic, { as: 'hero' }); // FK in Heroes 1:1
    db.models.tourneytargets.hasMany(db.models.heroes, { as: 'tourneytarget' }); // FK in Heroes 1:N
    db.models.groups.belongsTo(db.models.users, { as: 'admin' }); // FK in groups 1:1
    db.models.users.belongsToMany(db.models.groups, { through: 'users_groups' }); // FK in new table N:M
    db.models.groups.belongsToMany(db.models.users, { through: 'users_groups' }); // FK in new table N:M
    db.models.users.belongsToMany(db.models.tourneytargets, { through: 'users_tourneytargets' }); // FK in new table N:M
    db.models.tourneytargets.belongsToMany(db.models.users, { through: 'users_tourneytargets' }); // FK in new table N:M
    db.models.tourneytargets.belongsToMany(db.models.groups, { through: 'tourneytargets_groups' }); // FK in new table N:M
    db.models.groups.belongsToMany(db.models.tourneytargets, { through: 'tourneytargets_groups' }); // FK in new table N:M
    return true;
};


module.exports = Relationships;