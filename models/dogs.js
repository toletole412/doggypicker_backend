'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dog = sequelize.define('dogs', {
    breed: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {});
  Dog.associate = function(models) {
    // associations can be defined here
  };
  return Dog;
};
