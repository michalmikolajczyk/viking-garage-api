export default function (sequelize, Sequelize) {
  return sequelize.define('ride', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    offer: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    total: {
      type: Sequelize.DECIMAL(19, 4),
      allowNull: false,
    },
    equipment: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    startDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    endDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });
}
