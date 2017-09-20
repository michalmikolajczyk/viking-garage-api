module.exports = {
    up: (queryInterface, Sequelize, done) => {
      queryInterface.removeColumn('accounts', 'userId')
      done()
    },
  
    down: (queryInterface, Sequelize, done) => {
      queryInterface.addColumn('accounts', 'userId', {
        type: Sequelize.INTEGER })
      done()
    }
  }
  