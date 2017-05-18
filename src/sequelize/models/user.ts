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
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
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

// inner
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    verified: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    token: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      allowNull: false,
    },
  });
}
