export default function (sequelize, Sequelize) {
  return sequelize.define('accessory', {
    travelBoxes: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    lock: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    camera: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    basicTools: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    firstAidKit: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
  });
}
