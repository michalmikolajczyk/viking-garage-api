module.exports = {
    up: (queryInterface, Sequelize, done) => {
      queryInterface.addColumn('accounts', 'userId', {
        type: Sequelize.INTEGER })
      queryInterface.removeColumn('users', 'verified')
      queryInterface.addColumn('accounts', 'verified', {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      })
      done()
    },
  
    down: (queryInterface, Sequelize, done) => {
        queryInterface.removeColumn('accounts', 'userId')
        queryInterface.removeColumn('accounts', 'verified')
        queryInterface.addColumn('users', 'verified', {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false,
        })
      done()
    }
  }
  