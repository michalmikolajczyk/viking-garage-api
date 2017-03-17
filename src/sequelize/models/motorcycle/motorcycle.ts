export default function(sequelize, Sequelize) {

  const types = [
    'cruiser',
    'enduro',
    'motocross',
    'naked bike',
    'rally raid',
    'roadster',
    'track racing',
    'trail',
    'trails',
    'tricycles',
  ];

  const licences = [
    'not required',
    'cat. A',
    'cat. B',
  ];

  return sequelize.define('motorcycle', {
    year: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    type: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: types,
    },
    maxPeople: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    roadLegal: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    licenseRequired: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: licences,
    },
    minRentalPeriod: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    maxRentalPeriod: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    termsOfUse: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  }, {
    classMethods: {
      associate(db) {
        this.belongsTo(db.accessorie);
        this.belongsTo(db.make);
        this.belongsTo(db.model);
        this.belongsTo(db.modelspec);
        this.belongsTo(db.motorspec);
        this.belongsTo(db.protection);
        this.belongsTo(db.service);
      }
    }
  });
}
