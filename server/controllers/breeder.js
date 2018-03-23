const Breeder = require('../models/breeder');
const Dog = require('../models/dog');

exports.findBreederGet = (req, res) => {
  const { id } = req.params;

  Dog.findOne({ _id: id })
    .then(findDog => {
      const { breederList } = findDog;
      const promises = [];
      
      breederList.map(breeder => {
        const { breederId } = breeder;
        promises.push(Breeder.findOne({ _id: breederId }))
      })
        
      return Promise.all(promises)
    })
    .then(findBreederList => res.json(findBreederList))
    .catch(err => res.send(err))

  // Breeder.find({ dogName }, (err, data) => {
  //   if (err) res.redirect('/');
  //   return res.json(data)
  // })
}

exports.oneBreederGet = (req, res) => {
  const { id } = req.params;
  Breeder.findOne({ _id: id }, (err, data) => {
    if (err) res.redirect('/');
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
    nameImage,
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
