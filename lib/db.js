var mongoose = require('mongoose');
var config = require('./config').db;

mongoose.connect(config.connection);

module.exports = mongoose;