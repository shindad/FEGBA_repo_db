// SQL Code: INSERT INTO anims (category, feClass, anName, URL, dlName, srcName) VALUES (

module.exports = function (sequelize, DataTypes) {
  const Anim = sequelize.define("Anim", {
    tier: DataTypes.STRING,
    category: DataTypes.STRING,
    feClass: DataTypes.STRING,
    gender: DataTypes.STRING,
    name: DataTypes.STRING,
    URL: { type: DataTypes.STRING, unique: true },
    dlName: DataTypes.STRING,
    credit: DataTypes.STRING
  });

  Anim.associate = (models) => {
    Anim.belongsToMany(models.Weapon, {
      through: 'AnimWepIm'
      //foreignKey: 'animId'
    });
  };

  return Anim;
};