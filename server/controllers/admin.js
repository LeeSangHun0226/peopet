const Dog = require('../models/dog');
const Breeder = require('../models/breeder');

exports.allDataGet = (req, res) => {
  const p1 = Dog.find({}, { dogName: 1 });
  const p2 = Breeder.find({}, { breederName: 1 });

  Promise
    .all([p1, p2])
    .then(data => res.json(data))
    .catch(err => res.send(err));
};

exports.oneDogDataGet = (req, res) => {
  const { _id } = req.params;
  
  Dog.findOne({ _id })
    .then(data => res.json(data))
    .catch(err => res.send(err))
}

exports.oneBreederDataGet = (req, res) => {
  const { _id } = req.params;

  Breeder.findOne({ _id })
    .then(data => res.json(data))
    .catch(err => res.send(err))
}