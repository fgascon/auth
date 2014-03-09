var fs = require('fs');

if(!process.argv[2]){
	console.error("config path missing");
	process.exit(1);
}

var configData = fs.readFileSync(process.argv[2], {encoding: 'utf8'});

try{
	var config = JSON.parse(configData);
	if(!config){
		throw new Error("Invalid config");
	}
	module.exports = config;
}catch(err){
	console.error("Invalid config format");
	process.exit(1);
}