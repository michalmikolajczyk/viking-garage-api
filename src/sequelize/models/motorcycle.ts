export default function (sequelize, Sequelize) {

  const motorTypes = [
    'cruiser',
    'enduro',
    'motocross',
    'naked',
    'rally raid',
    'roadster',
    'track racing',
    'trail',
    'tricycles',
  ];

  const licencesTypes = [
    'not required',
    'A',
    'A/B',
  ];

  const ignitionTypes = [
    'Kick start',
    'Electronic',
  ];

  const lightsTypes = [
    'Brake',
    'Front and back',
    'None',
    'Side',
  ];

  const generalStates = [
    'Poor',
    'Fair',
    'Good',
    'Very Good',
    'Excellent',
  ];

  const riderExperiences = [
    'Begginer',
    'Intermediate',
    'Advanced',
  ];

  return sequelize.define('motorcycle', {
    year: {
      type: Sequelize.INTEGER,
    },
    type: {
      type: Sequelize.ENUM,
      values: motorTypes,
    },
    termsOfUse: {
      type: Sequelize.STRING,
    },

// general
    roadLegal: {
      type: Sequelize.BOOLEAN,
    },
    engine: {
      type: Sequelize.STRING,
    },
    licenseType: {
      type: Sequelize.ENUM,
      values: licencesTypes,
    },
    capacity: {
      type: Sequelize.INTEGER,
    },
    minRentalPeriod: {
      type: Sequelize.INTEGER,
    },
    maxRentalPeriod: {
      type: Sequelize.INTEGER,
    },
    maxPower: {
      type: Sequelize.INTEGER,
    },
    weight: {
      type: Sequelize.INTEGER,
    },
    topSpeed: {
      type: Sequelize.INTEGER,
    },
    seatHeight: {
      type: Sequelize.INTEGER,
    },
    torque: {
      type: Sequelize.INTEGER,
    },
    maxRiders: {
      type: Sequelize.INTEGER,
    },
    acceleration: {
      type: Sequelize.INTEGER,
    },

// motorcycle
    cylinderCount: {
      type: Sequelize.INTEGER,
    },
    wheelSizes: {
      type: Sequelize.STRING,
    },
    boreStroke: {
      type: Sequelize.INTEGER,
    },
    tires: {
      type: Sequelize.STRING,
    },
    transmission: {
      type: Sequelize.STRING,
    },
    brakes: {
      type: Sequelize.STRING,
    },
    compressionRatio: {
      type: Sequelize.STRING,
    },
    suspension: {
      type: Sequelize.STRING,
    },
    ignitionType: {
      type: Sequelize.ENUM,
      values: ignitionTypes,
    },
    frame: {
      type: Sequelize.STRING,
    },
    kickstand: {
      type: Sequelize.BOOLEAN,
    },
    wheelbase: {
      type: Sequelize.INTEGER,
    },
    lights: {
      type: Sequelize.ENUM,
      values: lightsTypes,
    },
    rakeTrail: {
      type: Sequelize.STRING,
    },
    storageSpace: {
      type: Sequelize.BOOLEAN,
    },

// mechanic
    generalState: {
      type: Sequelize.ENUM,
      values: generalStates,
    },
    motoHours: {
      type: Sequelize.INTEGER,
    },
    modifications: {
      type: Sequelize.BOOLEAN,
    },
    flaws: {
      type: Sequelize.BOOLEAN,
    },
    riderExperience: {
      type: Sequelize.ENUM,
      values: riderExperiences,
    },
    minimumDriverAge: {
      type: Sequelize.INTEGER,
    },
    maintenanceRequired: {
      type: Sequelize.TEXT,
    },
    maintenanceHistory: {
      type: Sequelize.TEXT,
    },

// invisble
    fuelCapacity: {
      type: Sequelize.FLOAT,
    },
  });
}
