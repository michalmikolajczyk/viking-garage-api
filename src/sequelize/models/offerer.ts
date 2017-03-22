export default function (sequelize, Sequelize) {
  return sequelize.define('offerer', {
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    picture: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  });
}
