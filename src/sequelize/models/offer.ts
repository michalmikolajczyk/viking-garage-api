import offerTypes from '../offertypes';

export default function (sequelize, Sequelize) {
  return sequelize.define('offer', {
    title: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    type: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: offerTypes,
    },
    coord: {
      type: Sequelize.GEOGRAPHY,
    },
    lat: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
    lng: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
    image: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    price: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    url: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  });
}
