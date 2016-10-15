import Sequelize from 'sequelize'
import db from '../database/mysqlDB'

const Message = db.define('messages', {
  message: Sequelize.STRING
})

Message.sync()

module.exports = Message
