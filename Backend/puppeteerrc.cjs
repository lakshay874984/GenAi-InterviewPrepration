const { join } = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Tells Puppeteer to install and find Chrome inside a local project directory 
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};
