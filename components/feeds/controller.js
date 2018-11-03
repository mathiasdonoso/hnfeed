const News = require('./../news/model');

const index = (req, res) => {
  News.find({ active: true })
    .then((newsList) => {
      res.render('index.pug', {
        newsList,
      });
    });
};

const destroy = (req, res) => {
  News.findByIdAndUpdate(
    req.params.id,
    { $set: { active: false } },
    { new: false },
  ).then(() => {
    res.redirect('/');
  });
};

module.exports = {
  index,
  destroy,
};
