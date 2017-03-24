export default function (sequelize, Sequelize) {
  return sequelize.define('modelhelmet', {
    name: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING,
    },
  });
};

