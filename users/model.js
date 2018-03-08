const Sequelize = require('sequelize')
const sequelize = require('../db')

const Users = sequelize.define('Users', {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: Sequelize.STRING,
  dog: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  tableName: 'Users',
  timestamps: false
})


module.exports = Users
