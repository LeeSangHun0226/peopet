const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;

const Example = new Schema({
  image: { type: String },
});

module.exports = mongoose.model('Example', Example);