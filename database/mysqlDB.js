import Sequelize from 'sequelize'

const db = new Sequelize('weChat', 'root', null, {
  dialect: 'mysql',
  host: 'localhost'
})

db.authenticate()
  .then(() => (
    console.log('db connection successful')
  ))
  .catch((err) => (
    console.log('unable to connect to database: ', err)
  ))

module.exports = db
