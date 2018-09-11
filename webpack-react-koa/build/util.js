var path = require('path');
const fs=require('fs')

function resolve(p) {
	return path.resolve(__dirname + '/../', p)
}

function readFileList(dir,recurse){
	if (recurse){
		
	}
	return fs.readdirSync(dir)
}

var config={
    publicPath:'',
    assetPath:'',
    
}


module.exports={
	config,
	resolve,
	readFileList,
}
