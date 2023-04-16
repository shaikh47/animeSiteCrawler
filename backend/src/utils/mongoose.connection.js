const mongoose = require('mongoose');
const logger = require('../config/logger');
const app = require('../../app');
const config = require('../config/config');

function connect() {
  mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
    logger.info('Connected to MongoDB');
    app.listen(config.port, () => {
      logger.info(`Listening to port ${config.port}`);
    });
  });
}

module.exports = { connect };