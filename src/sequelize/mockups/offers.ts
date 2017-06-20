import db from '../';

function createOffers() {
  db['offer'].findAll()
    .then(offers => offers.map(offer => offer.setOfferer(1)));
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
