export function createRelations(db) {
  /**
   * ACCESSORIE
   */
  db.accessorie.belongsToMany(db.offer,  {
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

  /**
   * HELMET
   */
  // db.helmet.belongsTo(db.make);
  // db.helmet.belongsTo(db.modelhelmet);
  db.helmet.belongsToMany(db.offer,  {
    through: {
      model: db.offeritem,
      unique: false,
      scope: {
        offerType: 'helmet',
      },
    },
    foreignKey: 'itemId',
    constraints: false,
  });


  /**
   * MOTORCYCLE
   */
  // db.motorcycle.belongsTo(db.make);
  // db.motorcycle.belongsTo(db.modelmoto);
  db.motorcycle.belongsToMany(db.offer,  {
    through: {
      model: db.offeritem,
      unique: false,
      scope: {
        offerType: 'motorcycle',
      },
    },
    foreignKey: 'itemId',
    constraints: false,
  });


  /**
   * OFFER
   */
  db.offer.belongsTo(db.offerer);
  db.offer.belongsToMany(db.accessorie, {
    through: {
      model: db.offeritem,
      unique: false,
    },
    foreignKey: 'offerId',
    constraints: false,
  });
  db.offer.belongsToMany(db.helmet, {
    through: {
      model: db.offeritem,
      unique: false,
    },
    foreignKey: 'offerId',
    constraints: false,
  });
  db.offer.belongsToMany(db.motorcycle, {
    through: {
      model: db.offeritem,
      unique: false,
    },
    foreignKey: 'offerId',
    constraints: false,
  });
  db.offer.belongsToMany(db.protection, {
    through: {
      model: db.offeritem,
      unique: false,
    },
    foreignKey: 'offerId',
    constraints: false,
  });
  db.offer.belongsToMany(db.service, {
    through: {
      model: db.offeritem,
      unique: false,
    },
    foreignKey: 'offerId',
    constraints: false,
  });

  /**
   * PROTECTION
   */
  db.protection.belongsToMany(db.offer,  {
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

  /**
   * SERVICE
   */
  db.service.belongsToMany(db.offer,  {
    through: {
      model: db.offeritem,
      unique: false,
      scope: {
        offerType: 'service',
      },
    },
    foreignKey: 'itemId',
    constraints: false,
  });

  /**
   * USER
   */
  db.account.hasOne(db.user)
  db.user.belongsTo(db.account)

  /**
   * BOOKING
   */
  db.booking.hasMany(db.payment, {
    foreignKey: 'paymentId'
  })
  db.payment.belongsTo(db.booking, {
    foreignKey: 'paymentId'
  })
  db.booking.belongsTo(db.offer)

  /**
   * ROLES
   */
}
