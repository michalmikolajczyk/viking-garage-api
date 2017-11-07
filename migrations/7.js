module.exports = {
  up: (queryInterface, Sequelize, done) => {
    queryInterface.createTable('bookings', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { isEmail: true },
      },
      type: {
        type: Sequelize.STRING,
      },
      body: {
        type: Sequelize.TEXT,
      },
      message: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
    });
    queryInterface.createTable('payments', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      bookingId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      amount: {
        type: Sequelize.INTEGER,
      },
      currency: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      source: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
    });
    done();
  },
  down: (queryInterface, Sequelize, done) => {
    queryInterface.dropTable('bookings');
    queryInterface.dropTable('payments');
    done();
  }
}