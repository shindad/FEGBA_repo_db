module.exports = function(sequelize, DataTypes) {
  const Weapon = sequelize.define("Weapon", {
    name: DataTypes.STRING
    //weaponsAvail: DataTypes.JSON
  });

  Weapon.associate = (models) => {
    Weapon.belongsToMany(models.Anim, {
      through: 'AnimWepIm'
      //foreignKey: 'weaponId'
    });
  };

  return Weapon;
};