module.exports = {
  up: (queryInterface, Sequelize, done) => {
    queryInterface.addColumn('offers', 'manualorder', {
      type: Sequelize.FLOAT });
    done()
    
  },
  down: (queryInterface, Sequelize, done) => {
    queryInterface.removeColumn('offers', 'manualorder')
    done()
  }
}