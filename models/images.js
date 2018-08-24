module.exports = function(sequelize, DataTypes) {
  var Images = sequelize.define("Images", {
    // Anim model properties
    // category, feClass, anName, URL, dlName, srcName
    still: DataTypes.STRING,
    gif: DataTypes.STRING
  });

  // Images.associate = function(models) {
  //   // Associating Images with the index table
  //   // When a pair of images is deleted, also delete any associated locations in index
  //   Images.hasMany(models.tbd, {
  //     onDelete: "cascade"
  //   });
  // };

  return Images;
};