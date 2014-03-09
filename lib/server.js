var path = require('path');
var express = require('express');
var config = require('./config');
var passport = require('passport');
var User = require('../models/user');

var app = express();

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'jade');
app.set('view options', {layout: false});
app.set('env', config.env);

app.use(express.bodyParser());
app.use(express.methodOverride());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.cookieParser(config.session.secret));
app.use(express.session());

app.use(passport.initialize());
app.use(passport.session());

app.use(app.router);
app.use(express.static(path.join(__dirname, '..', 'public')));

app.configure('dev', function(){
	app.use(express.logger());
	app.use(express.errorHandler({
		dumpExceptions: true,
		showStack: true
	}));
});

app.configure('prod', function(){
	app.use(express.errorHandler());
});

app.get('/', require('../routes/index').get);
app.get('/me', require('../routes/me').get);
app.get('/register', require('../routes/register').get);
app.post('/register', require('../routes/register').post);
app.get('/login', require('../routes/login').get);
app.post('/login', passport.authenticate('local'), require('../routes/login').post);
app.get('/logout', require('../routes/logout').get);

app.listen(config.port, function(){
	console.log("Server listening on port %d", config.port);
});