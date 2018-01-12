const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;

const Puppy = new Schema({
  puppyImage: [{
    type: String,
  }],
  breed: { type: String },
  breeder: { type: String },
  kannel: { type: String },
  sex: { type: String },
  father: { type: String },
  mother: { type: String },
  birthday: { type: String },
  description: { type: String }, 
});

module.exports = mongoose.model('Puppy', Puppy);

