
exports.get = function(req, res){
	var user = req.user;
	if(user){
		res.json({
			id: user.id,
			username: user.username
		});
	}else{
		res.json({
			err: "Unauthentified"
		});
	}
};
