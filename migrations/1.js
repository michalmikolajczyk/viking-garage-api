module.exports = {
  up: (queryInterface, Sequelize, done) => {
    queryInterface.createTable(
      'accounts',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true,
          },
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        token: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV1,
          allowNull: false,
        },
      }
    )
    queryInterface.addColumn(
      'users',
      'accountId',
      {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    )
    done()
  },

  down: (queryInterface, Sequelize, done) => {
    queryInterface.dropTable('accounts')
    queryInterface.removeColumn('users', 'accountId')
    done()
  }
}
