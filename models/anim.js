// SQL Code: INSERT INTO anims (category, feClass, anName, URL, dlName, srcName) VALUES (

module.exports = function (sequelize, DataTypes) {
  const Anim = sequelize.define("Anim", {
    category: DataTypes.STRING,
    feClass: DataTypes.STRING,
    anName: DataTypes.STRING,
    URL: DataTypes.STRING,
    dlName: DataTypes.STRING,
    srcName: DataTypes.STRING
  });

  Anim.associate = (models) => {
    Anim.belongsToMany(models.Weapon, {
      through: 'AnimWepIm'
      //foreignKey: 'animId'
    });
  };

  return Anim;
};