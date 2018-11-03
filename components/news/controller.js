const axios = require('axios');
const News = require('./model');

const getNews = () => axios.get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs');

const call = () => {
  getNews()
    .then((response) => {
      const newsList = response.data.hits;
      const list = [];

      newsList.forEach((news) => {
        const newsFeed = {
          objectId: news.objectID,
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
        }
      });
    })
    .catch(err => console.error(err));
};

module.exports = {
  call,
};
