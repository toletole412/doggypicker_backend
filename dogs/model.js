const Sequelize = require('sequelize')
const sequelize = require('../db')

const dogs = sequelize.define('dogs', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  breed: Sequelize.STRING
}, {
  tableName: 'dogs',
  timestamps: false
})


module.exports = dogs
