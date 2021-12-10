const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  originalUrl: String,
  shortUrl: String
}, {timestamps: true});

module.exports = mongoose.model('shortURL', urlSchema);
