export default function (sequelize, Sequelize) {
  return sequelize.define('user', {
// required
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    birthday: {
      type: Sequelize.DATE,
      allowNull: false,
    },

// optional
    phone: {
      type: Sequelize.STRING,
    },
    emergency: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    country: {
      type: Sequelize.STRING,
    },
    brief: {
      type: Sequelize.TEXT,
    },

// image
    image: {
      type: Sequelize.STRING,
    },

  });
}
