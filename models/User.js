import Sequelize from 'sequelize'
import db from '../database/mysqlDB'

const User = db.define('users', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

User.sync()

module.exports = User
