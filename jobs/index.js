const cron = require('node-cron');
const getNews = require('./news');

const jobs = cron.schedule('0 * * * *', () => {
  getNews.job();
}, {
  scheduled: true,
  timezone: 'America/Santiago',
});

module.exports = jobs;
