const multer = require('multer');
const AWS = require('../config');

const Example = require('../models/example');

const storage = multer.memoryStorage();
const upload = multer({ storage });

const s3 = new AWS.S3();

exports.allImageGet = (req, res) => {
  Example.find({})
    .then(data => res.json(data))
    .catch(err => res.send(err))
}

exports.saveImage = (upload.single('file'), (req, res) => {
  const {
    filename,
    data_uri,
  } = req.body.image;

  const Bucket = 'peopet';
  const userKey = `example/${filename}`;

  const buf = new Buffer(data_uri.replace(/^data:image\/\w+;base64,/, ''), 'base64');

  const start = data_uri.indexOf(":");
  const end = data_uri.indexOf(";base64", start + 1);
  const ContentType = data_uri.substring(start + 1, end);
  // content-type이 기본으로 'application/octet-stream' 설정되어있어서 원본 파일 형식으로 바꿔줌

  const params = {
    Bucket,
    Key: userKey,
    ACL: 'public-read',
    Body: buf,
    ContentType,    
  };

  s3.upload(params, (err, result) => {
    if(err) res.send(err);
    const example = new Example({
      image: result.Location,
    });

    example.save()
      .then(data => res.json(data))
      .catch(error => res.send(error))
  })
});

exports.modifyAcademicPhoto = (req, res) => {
  const { email } = req.params;
  const { data } = req.body;

  Register.update({ email }, { $set: { 'academic.photo': data } }, (err) => {
    if (err) res.send({ err });
    res.send({ update: 'success' });
  });
}


