import offerTypes from '../offertypes';

export default function(sequelize, Sequelize) {
  return sequelize.define('offeritem', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    offerType: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: offerTypes,
    },
    offerId: {
      type: Sequelize.INTEGER,
    },
    itemId: {
      type: Sequelize.INTEGER,
    },
  });
}
