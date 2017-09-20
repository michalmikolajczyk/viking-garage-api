export default function (sequelize, Sequelize) {
  return sequelize.define('user', {
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    birthday: {
      type: Sequelize.DATE
    },
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
