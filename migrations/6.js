module.exports = {
    up: (queryInterface, Sequelize, done) => {
      queryInterface.changeColumn('users', 'firstname', {
        type: Sequelize.STRING,
        allowNull: true
      })
      queryInterface.changeColumn('users', 'lastname', {
        type: Sequelize.STRING,
        allowNull: true
      })
      queryInterface.changeColumn('users', 'birthday', {
        type: Sequelize.STRING,
        allowNull: true
      })
      done()
    },
  
    down: (queryInterface, Sequelize, done) => {
      queryInterface.changeColumn('users', 'firstname', {
        type: Sequelize.STRING,
        allowNull: false
      })
      queryInterface.changeColumn('users', 'lastname', {
        type: Sequelize.STRING,
        allowNull: false
      })
      queryInterface.changeColumn('users', 'birthday', {
        type: Sequelize.STRING,
        allowNull: false
      })
      done()
    }
  }
