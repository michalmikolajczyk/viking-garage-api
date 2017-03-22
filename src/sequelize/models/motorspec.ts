export default function(sequelize, Sequelize) {

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

  return sequelize.define('motorspec', {
    generalState: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: generalStates,
    },
    motoHours: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    // Modifications many to many relation
    // Flaws many to many relation
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
  });
}
