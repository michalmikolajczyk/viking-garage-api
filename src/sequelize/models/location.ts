export default function(sequelize, Sequelize) {
  return sequelize.define('location', {
    district: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    city: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    area: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    country: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    latitude: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
    longitude: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
    placeId: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  });
}
