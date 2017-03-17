export default function(sequelize, Sequelize) {
  return sequelize.define('accessorie', {
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
      type: Sequelize.STRING,
    },
    firstAidKit: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
  });
}
