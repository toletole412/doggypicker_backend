'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dog = sequelize.define('dogs', {
    id: DataTypes.INTEGER,
    url: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {});
  Dog.associate = function(models) {
    // associations can be defined here
  };
  return Dog;
};
