module.exports = function(sequelize, DataTypes) {
  const Weapon = sequelize.define("Weapon", {
    still: {type: DataTypes.STRING, unique: true},
    gif: DataTypes.STRING
  });

  return Weapon;
};