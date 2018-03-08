const Sequelize = require('sequelize')
const sequelize = require('../db')

const randomDog = sequelize.define('RandomDog', {
  url: Sequelize.STRING
}, {
  tableName: 'RandomDog',
  timestamps: false
})


module.exports = randomDog
