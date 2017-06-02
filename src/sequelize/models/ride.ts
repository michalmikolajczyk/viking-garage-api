export default function (sequelize, Sequelize) {
  return sequelize.define('ride', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { isEmail: true },
    },
    offer: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: { isInt: true },
    },
    equipment: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: { isInt: true },
    },
    startDate: {
      type: Sequelize.DATE,
      allowNull: false,
      validate: { isDate: true },
    },
    endDate: {
      type: Sequelize.DATE,
      allowNull: false,
      validate: { isDate: true },
    },
    price: {
      type: Sequelize.DECIMAL(19, 4),
      allowNull: false,
      validate: { isDecimal: true },
    },
    total: {
      type: Sequelize.DECIMAL(19, 4),
      allowNull: false,
      validate: { isDecimal: true },
    },
    currency: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { isAlpha: true },
    },
  });
}
