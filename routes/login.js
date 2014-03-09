
exports.get = function(req, res){
	res.render('login', {
		user: req.user
	});
};

exports.post = function(req, res){
	res.redirect('/');
};
