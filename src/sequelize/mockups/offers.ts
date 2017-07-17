import db from '../';

function createOffers() {
  return Promise.all([
    db['offer'].findAll().then(offers => offers.map(offer => offer.setOfferer(1))),
    db['offer'].findById(1).then(offer => offer.addBooking(1)),
  ]);
}

export default function create() {
  Promise.all([
    db['accessorie'].findById(1),
    db['helmet'].findById(1),
    db['motorcycle'].findById(1),
    db['protection'].findById(1),
    db['service'].findById(1),
  ])
    .then(items => items.map(item => item.addOffer(1)))
    .then(createOffers)
    .then(() => process.exit());
}
