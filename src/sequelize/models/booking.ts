export default function (sequelize, Sequelize) {
  return sequelize.define('booking', {
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
  });
}
