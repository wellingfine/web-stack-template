var path = require('path');
const fs=require('fs')

function resolve(p) {
	return path.resolve(__dirname + '/../', p)
}

/**
 * 获取入口点所有支持的文件
 */
function parseEntry(){
	var jsFile, htmlFile
	
	var dir = resolve('./client/entry')
	var entrys = fs.readdirSync(dir)
	var jsFile = {}, htmlFile = {}
	for (var i = 0; i < entrys.length; i++) {
		var f = entrys[i]

		if (/\.js$/.test(f)) {
			var name = f.substring(0, f.length - 3)
			jsFile[name] = [resolve(dir + '/' + f),'webpack-hot-middleware/client']
		} else if (/\.html$/.test(f)) {
			var name = f.substring(0, f.length - 5)
			htmlFile[name] = resolve(dir + '/' + f)
		}
	}

	return {
		jsFile,htmlFile
	}
}

var config={
    publicPath:'',
    assetPath:'',
    
}


module.exports={
	config,
	resolve,
	parseEntry,
}
