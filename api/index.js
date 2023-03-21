const path = require('path');
const PocketBase = require('pocketbase');

const server = new PocketBase({
  configFile: path.join(__dirname, '..', 'pocketbase.config.js'),
});

require('./custom')(server);

server.start();
