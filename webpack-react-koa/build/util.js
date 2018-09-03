var path = require('path');

function resolve(p) {
	return path.resolve(__dirname + '/../', p)
}


var config={
    publicPath:'',
    assetPath:'',
    
}


module.exports={
	config,
	resolve
}
