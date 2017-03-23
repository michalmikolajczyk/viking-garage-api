export default function (sequelize, Sequelize) {
  return sequelize.define('offerer', {
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    image: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    since: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    city: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    country: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    brief: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    points: {
      allowNull: false,
      type: Sequelize.INTEGER,
    }
  });
}
