var db = require("../models");

module.exports = function(sequelize, DataTypes) {
  const AnimWepIm = sequelize.define('AnimWepIm', {
    still: DataTypes.STRING,
    gif: DataTypes.STRING,
    name: DataTypes.STRING
  });
  
  //these are associations, these don't necessarily have to be on this page
  // //But are put here for organization purposes.
  // db.Anim.belongsToMany(db.Weapon, { through: AnimWepIm });
  // db.Weapon.belongsToMany(db.Anim, { through: AnimWepIm });
  // through is required!
  
 // user.addProject(project, { through: { role: 'manager' }});

  return AnimWepIm;
};