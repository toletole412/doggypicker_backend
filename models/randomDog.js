'use strict';
module.exports = (sequelize, DataTypes) => {
  var randomDog = sequelize.define('RandomDog', {
    id: DataTypes.INTEGER,
    url: DataTypes.STRING,
  }, {});
  randomDog.associate = function(models) {
    // associations can be defined here
  };
  return randomDog;
};
