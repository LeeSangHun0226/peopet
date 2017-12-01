const Breeder = require('../models/breeder');

exports.oneBreederGet = (req, res) => {
  const { id } = req.params;
  Breeder.findOne({ _id: id }, (err, data) => {
    if (err) res.send(err);
    return res.json(data);
  });
};

exports.allBreederGet = (req, res) => {
  Breeder.find({}, (err, data) => {
    if (err) res.send(err);
    return res.json(data);
  });
};

exports.saveBreeder = (req, res) => {
  const {
    breederImage,
    breederName,
    breederDescription,
    kannelName,
    kannelDescription,
    kannelLocation,
    kannelManage,
    kannelBreed,
    kannelImage,
    question_start,
    question_manage,
    question_mind,
    question_word,
    dogImage,
    dogWord,
    dogDescription,
  } = req.body;

  const breeder = new Breeder({
    breederImage,
    breederName,
    breederDescription,
    kannelName,
    kannelDescription,
    kannelLocation,
    kannelManage,
    kannelBreed,
    kannelImage,
    question_start,
    question_manage,
    question_mind,
    question_word,
    dogImage,
    dogWord,
    dogDescription,
  });

  return breeder.save()
    .then(data => res.json(data))
    .catch(err => res.send({ err }));
};
