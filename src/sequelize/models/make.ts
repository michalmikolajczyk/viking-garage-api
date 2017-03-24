export default function (sequelize, Sequelize) {
  return sequelize.define('make', {
    name: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING,
    },
  });
};
