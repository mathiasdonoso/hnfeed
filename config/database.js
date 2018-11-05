const mongoose = require('mongoose');

const database = () => {
  mongoose.set('debug', true);
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost:27017/hnfeed', {
    useCreateIndex: true,
    useNewUrlParser: true,
  }).then(() => console.log('MongoDB running...'))
    .catch(err => console.error(err));
};

module.exports = database;
