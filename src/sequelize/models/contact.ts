export default function (sequelize, Sequelize) {
  return sequelize.define('contact', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { isEmail: true },
    },
    body: {
      type: Sequelize.TEXT,
    },
    message: {
      type: Sequelize.TEXT,
    },
  }, {
    timestamps: false,
  });
}
