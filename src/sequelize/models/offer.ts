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
    brief: {
      type: Sequelize.TEXT,
    },
    subtype: {
      allowNull: false,
      type: Sequelize.STRING,
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
    city: {
      type: Sequelize.STRING,
    },
    country: {
      type: Sequelize.STRING,
    },
    image: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    manualorder: {
      type: Sequelize.FLOAT,
    },
    price: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    url: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  }, {
    hooks: {
      beforeUpdate: createCoord,
      beforeCreate: createCoord,
      beforeBulkCreate: (offers, options) => offers.forEach(createCoord),
    },
  });
}

function createCoord(offer) {
  offer.coord = {
    type: 'Point',
    coordinates: [offer.lat, offer.lng],
  };
}
