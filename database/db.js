const { Sequelize } = require('sequelize');
const db = new Sequelize({
  // The `host` parameter is required for other databases
  // host: 'localhost'
  dialect: 'sqlite',
  storage: `./${process.env.DB_NAME}.sqlite`,
  
})

module.exports = {
    db
}
