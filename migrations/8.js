module.exports = {
  up: (queryInterface, Sequelize, done) => {
    queryInterface.addColumn('payments', 'token', {
      type: Sequelize.TEXT });
    queryInterface.addColumn('payments', 'confirmed', {
      type: Sequelize.BOOLEAN });
    queryInterface.changeColumn('payments', 'amount', {
      type: Sequelize.FLOAT
    });
    queryInterface.changeColumn('payments', 'description', {
      type: Sequelize.TEXT
    });
    done()
    
  },
  down: (queryInterface, Sequelize, done) => {
    queryInterface.removeColumn('payments', 'token')
    queryInterface.removeColumn('payments', 'confirmed')
    queryInterface.changeColumn('payments', 'amount', {
      type: Sequelize.INTEGER
    });
    queryInterface.changeColumn('payments', 'description', {
      type: Sequelize.STRING
    });
    done()
  }
}