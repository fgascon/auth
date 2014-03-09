
exports.get = function(req, res){
	res.render('index', {
		user: req.user
	});
};