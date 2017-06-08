export default function (sequelize, Sequelize) {
  const enumState = [
    'Poor',
    'Fair',
    'Good',
    'Very Good',
    'Excellent',
  ];

  const enumType = [
    'Full Face',
  ];

  return sequelize.define('helmet', {
    certificates: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    age: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    state: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: enumState,
    },
    type: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: enumType,
    },
    picture: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  });
}
