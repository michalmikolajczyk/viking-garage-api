export default function (sequelize, Sequelize) {
  return sequelize.define('tag', {
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  });
}
