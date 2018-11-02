const axios = require('axios');
const News = require('./model');

const getNews = () => {
  return axios.get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs');
};

const index = (req, res) => {
  getNews()
    .then((response) => {
      const newsList = response.data.hits;
      const list = [];

      newsList.forEach((news) => {
        const newsFeed = {
          storyId: news.story_id,
          title: news.title || news.story_title,
          author: news.author,
          createdAt: news.created_at_i,
          active: true,
        };

        if (newsFeed.title) {
          list.push(newsFeed);
        }
      });

      News.collection.insertMany(list, (err, docs) => {
        if (err) {
          console.error(err);
        } else {
          res.status(200).json({
            message: 'Yeah!',
          });
        }
      });
    })
    .catch(err => console.error(err));
};

module.exports = {
  index,
};
