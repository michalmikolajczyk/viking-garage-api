export default function(sequelize, Sequelize) {
  return sequelize.define('accessorie', {
    travelBoxes: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    lock: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    camera: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    basicTools: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    firstAidKit: {
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
              offerType: 'accessorie',
            },
          },
          foreignKey: 'itemId',
          constraints: false,
        });
      }
    }
  });
}
