const mongoose = require('mongoose');
const moment = require('moment');

const { Schema } = mongoose;

const displayCreatedAt = (createdAt) => {
  const prettyDate = moment.unix(createdAt);
  return prettyDate.fromNow();
};

const NewsSchema = new Schema({
  objectId: {
    type: String,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
    get: displayCreatedAt,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

module.exports = mongoose.model('News', NewsSchema);
