module.exports = {
    up: (queryInterface, Sequelize, done) => {
      queryInterface.addColumn('accounts', 'consent', {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      })
      done()
    },
  
    down: (queryInterface, Sequelize, done) => {
        queryInterface.removeColumn('accounts', 'consent')
      done()
    }
  }
  