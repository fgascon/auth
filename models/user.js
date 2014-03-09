var db = require('../lib/db');
var passportLocalMongoose = require('passport-local-mongoose');

var schema = db.Schema({});

schema.plugin(passportLocalMongoose);

module.exports = db.model('user', schema);