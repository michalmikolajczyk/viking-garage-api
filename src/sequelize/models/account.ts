export default function (sequelize, Sequelize) {
  return sequelize.define('account', {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    token: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      allowNull: false,
    },
    verified: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    consent: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  })
}
