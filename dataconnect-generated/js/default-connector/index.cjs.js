const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'foodi-client',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;
