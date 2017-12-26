export default function (sequelize, Sequelize) {
  return sequelize.define('payment', {
    amount: {
      type: Sequelize.FLOAT,
    },
    bookingId: {
      type: Sequelize.INTEGER,
    },
    currency: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
    source: {
      type: Sequelize.STRING,
    },
    token: {
      type: Sequelize.TEXT
    },
    confirmed: {
      type: Sequelize.BOOLEAN
    },
  }, {
    timestamps: true,
  });
}
