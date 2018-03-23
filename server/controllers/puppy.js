const Puppy = require('../models/puppy');

exports.onePuppyGet = (req, res) => {
  const { id } = req.params;
  Puppy.findOne({ _id: id }, (err, data) => {
    if (err) res.redirect('/');
    return res.json(data);
  });
};

exports.allPuppyGet = (req, res) => {
  Puppy.find({}, (err, data) => {
    if (err) res.send(err);
    return res.json(data);
  });
};

exports.savePuppy = (req, res) => {
  console.log(req.body)
  const { description } = req.body;  
  const puppy = new Puppy({
    description,
  })
  // const {
  //   puppyImage,
  //   kannel,
  //   sex,
  //   father,
  //   mother,
  //   birthday,
  //   description,
  // } = req.body;

  // const puppy = new Puppy({
  //   puppyImage,
  //   breed,
  //   breeder,
  //   kannel,
  //   sex,
  //   father,
  //   mother,
  //   birthday,
  //   description,
  // });

  return puppy.save()
    .then(data => res.json(data))
    .catch(err => res.send({ err }));
};
