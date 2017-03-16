import * as Sequelize from 'sequelize';

const ignitionTypes = [
  'Kickstarr',
  'Electronic',
];

const lightsTypes = [
  'brake',
  'font and back',
  'none',
  'side',
];

export default {
  engine: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  capacity: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  maxPower: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  cylinderCount: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  bore: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  stroke: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  weight: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  topSpeed: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  transmission: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  compressionRatio: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  suspension: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  frame: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  wheelbase: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  rakeTrail: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  wheelSizes: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  tires: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  brakes: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  seatHeight: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  fuelCapacity: {
    allowNull: false,
    type: Sequelize.FLOAT,
  },
  ignitionType: {
    allowNull: false,
    type: Sequelize.ENUM,
    values: ignitionTypes,
  },
  kickstand: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
  },
  lights: {
    allowNull: false,
    type: Sequelize.ENUM,
    values: lightsTypes,
  },
  storageSpace: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
  },
};
