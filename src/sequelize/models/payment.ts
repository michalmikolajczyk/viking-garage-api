export default function (sequelize, Sequelize) {
  return sequelize.define('payment', {
    amount: {
      type: Sequelize.INTEGER,
    },
    bookingId: {
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
  });
}
