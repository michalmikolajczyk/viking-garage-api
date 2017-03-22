export default function(sequelize, Sequelize) {

  const motorTypes = [
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

  const licencesTypes = [
    'not required',
    'cat. A',
    'cat. B',
  ];

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
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    type: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: motorTypes,
    },
    termsOfUse: {
      allowNull: false,
      type: Sequelize.STRING,
    },

// general
    roadLegal: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    engine: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    licenseType: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: licencesTypes,
    },
    capacity: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    minRentalPeriod: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    maxRentalPeriod: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    maxPower: {
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
    seatHeight: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    torque: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    maxRiders: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    acceleration: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },

// motorcycle
    cylinderCount: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    wheelSizes: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    boreStroke: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    tires: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    transmission: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    brakes: {
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
    ignitionType: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: ignitionTypes,
    },
    frame: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    kickstand: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    wheelbase: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    lights: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: lightsTypes,
    },
    rakeTrail: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    storageSpace: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },

// mechanic
    generalState: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: generalStates,
    },
    motoHours: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    modifications: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    flaws: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    riderExperience: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: riderExperiences,
    },
    minimumDriverAge: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    maintenanceRequired: {
      allowNull: true,
      type: Sequelize.TEXT,
    },
    maintenanceHistory: {
      allowNull: true,
      type: Sequelize.TEXT,
    },

// invisble
    fuelCapacity: {
      allowNull: true,
      type: Sequelize.FLOAT,
    }
  }, {
    classMethods: {
      associate(db) {
        this.belongsTo(db.make);
        this.belongsTo(db.model);
      }
    }
  });
}
