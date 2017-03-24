export default function (sequelize, Sequelize) {
  return sequelize.define('modelmoto', {
    name: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING,
    },
  });
};

