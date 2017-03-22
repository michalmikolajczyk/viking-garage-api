export default function(sequelize, Sequelize) {

  const types = [
    'club',
    'coach',
    'guide',
    'mechanic',
    'motocross',
    'motocycle',
    'photographer',
    'transport',
    'garage',
  ];

  return sequelize.define('offer', {
    title: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    type: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: types,
    },
  }, {
    classMethods: {
      associate(db) {
        this.belongsTo(db.accessorie);
      }
    }
  });
}
