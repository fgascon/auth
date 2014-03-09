var User = require('../models/user');

exports.get = function(req, res){
	res.render('register', {});
};

exports.post = function(req, res){
	var user = new User({
		username: req.body.username
	});
	User.register(user, req.body.password, function(err, user) {
		if(err){
			return res.render('register', {
				user: user
			});
		}
		res.redirect('/');
	});
};