export default function(sequelize, Sequelize) {
  return sequelize.define('model', {
    name: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING,
    }
  });
};

