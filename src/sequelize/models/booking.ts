export default function (sequelize, Sequelize) {
  return sequelize.define('booking', {
    customer: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING,
      validate: { isEmail: true },
    },
    message: {
      allowNull: true,
      type: Sequelize.TEXT,
    },
    promo: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    regulationsAgreement: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    privacyPolicyAgreement: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    startDate: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    endDate: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    confirmationOwner: {
      type: Sequelize.BOOLEAN,
    },
    confirmationVG: {
      type: Sequelize.BOOLEAN,
    },
  });
}
