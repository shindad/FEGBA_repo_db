var db = require("../models");

module.exports = function (sequelize, DataTypes) {
  const AnimWepIm = sequelize.define('AnimWepIm', {
    name: DataTypes.STRING,
    weapon: DataTypes.STRING
  });

  return AnimWepIm;
};