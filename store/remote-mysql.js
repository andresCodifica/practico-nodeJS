const remote = require('./remote')
const config = require('../config')

module.exports = new remote(config.mysqlservice.host, config.mysqlservice.port)