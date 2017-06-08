export default function (sequelize, Sequelize) {
  return sequelize.define('service', {
    parkingGarage: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    recommendedMechanic: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    transportTheMotorcycle: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    transportToFromMotorcycle: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    photographer: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    mechanicalChangesOptions: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    guide: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    coach: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    group: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    club: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    nearbyCircuitTrail: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
  });
}


