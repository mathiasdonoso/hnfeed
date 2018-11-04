const axios = require('axios');
const News = require('./model');

const call = async () => {
  const response = await axios.get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs');
  const newsList = response.data.hits;
  const list = [];

  await Promise.all(newsList.map(async (news) => {
    const newsFeed = {
      objectId: news.objectID,
      title: news.title || news.story_title,
      author: news.author,
      url: news.url || news.story_url,
      createdAt: news.created_at_i,
      active: true,
    };

    const count = await News.where({ objectId: newsFeed.objectId }).countDocuments().count();
    if (newsFeed.title && newsFeed.url && count === 0) {
      list.push(newsFeed);
    }
  }));

  if (list.length > 0) {
    await News.collection.insertMany(list);
  }
};

module.exports = {
  call,
};
