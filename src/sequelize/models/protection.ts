export default function (sequelize, Sequelize) {
  return sequelize.define('protection', {
    helmet: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    gloves: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    boots: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    jacket: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    vest: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    chestProtector: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    buzzer: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    pants: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    knees: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    elbows: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    goggles: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    neckBrace: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
  }, {
    classMethods: {
      associate(db) {
        this.belongsToMany(db.offer,  {
          through: {
            model: db.offeritem,
            unique: false,
            scope: {
              offerType: 'protection',
            },
          },
          foreignKey: 'itemId',
          constraints: false,
        });
      },
    },
  });
}
