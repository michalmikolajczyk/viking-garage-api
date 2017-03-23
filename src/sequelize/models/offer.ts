import offerTypes from '../offertypes';

export default function (sequelize, Sequelize) {
  return sequelize.define('offer', {
    title: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    type: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: offerTypes,
    },
    coord: {
      allowNull: false,
      type: Sequelize.GEOMETRY,
    },
  }, {
    classMethods: {
      associate(db) {
        this.belongsToMany(db.accessorie, {
          through: {
            model: db.offeritem,
            unique: false,
          },
          foreignKey: 'offerId',
          constraints: false,
        });

        this.belongsToMany(db.helmet, {
          through: {
            model: db.offeritem,
            unique: false,
          },
          foreignKey: 'offerId',
          constraints: false,
        });

        this.belongsToMany(db.motorcycle, {
          through: {
            model: db.offeritem,
            unique: false,
          },
          foreignKey: 'offerId',
          constraints: false,
        });

        this.belongsToMany(db.protection, {
          through: {
            model: db.offeritem,
            unique: false,
          },
          foreignKey: 'offerId',
          constraints: false,
        });

        this.belongsToMany(db.service, {
          through: {
            model: db.offeritem,
            unique: false,
          },
          foreignKey: 'offerId',
          constraints: false,
        });
      },
    },
  });
}
