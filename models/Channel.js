import Sequelize from 'sequelize'
import db from '../database/mysqlDB'

const Channel = db.define('channels', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

Channel.sync()

module.exports = Channel
