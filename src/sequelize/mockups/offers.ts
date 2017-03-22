import db from '../';

export default function create() {
  db['motorcycle'].findById(1)
    .then((moto) => {
      Promise.all([
        moto.setMake('KTM'),
        moto.setModel('SX 125'),
      ])
      // .then(() => console.log(moto.dataValues));
    })
    .catch(err => console.log('All error', err));

  db['accessorie'].findById(1)
    .then((item) => {
      item.addOffer(1)
    });

  db['service'].findById(1)
    .then((item) => {
      item.addOffer(1)
    });

  // motorcycle.findById(2)
  //   .then((moto) => {
  //     Promise.all([
  //       moto.setAccessorie(1),
  //       moto.setMake('Husaberg'),
  //       moto.setModel('FE 390'),
  //       moto.setModelspec(1),
  //       moto.setMotorspec(1),
  //       moto.setProtection(1),
  //       moto.setService(1),
  //     ]).then(() => console.log(moto.dataValues));
  //   })
  //   .catch(err => console.log('All error', err));

  // motorcycle.findById(3)
  //   .then((moto) => {
  //     Promise.all([
  //       moto.setAccessorie(1),
  //       moto.setMake('KTM'),
  //       moto.setModel('Freeride 250R'),
  //       moto.setModelspec(1),
  //       moto.setMotorspec(1),
  //       moto.setProtection(1),
  //       moto.setService(1),
  //     ]).then(() => console.log(moto.dataValues));
  //   })
  //   .catch(err => console.log('All error', err));
}
