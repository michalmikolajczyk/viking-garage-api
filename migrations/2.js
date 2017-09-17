module.exports = {
  up: (queryInterface, Sequelize, done) => {
    queryInterface.removeColumn('users', 'email')
    queryInterface.removeColumn('users', 'password')
    queryInterface.removeColumn('users', 'token')
    done()
  },

  down: (queryInterface, Sequelize, done) => {
    queryInterface.addColumn('users', 'email', {
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
    })
    queryInterface.addColumn('users', 'password', {
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    })
    queryInterface.addColumn('users', 'token', {
      token: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
      }
    })
    done()
  }
}
