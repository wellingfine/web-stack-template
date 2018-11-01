var path = require('path');
const fs=require('fs')

var isDev = false
if (process.env.NODE_ENV == 'dev') {
	isDev = true
}

function resolve(p) {
	return path.resolve(__dirname + '/../', p)
}
/**
 * 转换文件名 \\/ 转为 ~
 * ~转为 ~~
 */
function encodeFlatPath(file){
	return file.replace(/[\\\/]+/g,'~')
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
			if(isDev){
				jsFile[name] = [resolve(dir + '/' + f), 'webpack-hot-middleware/client']
			}else{
				jsFile[name] = [resolve(dir + '/' + f)]
			}
			
		} else if (/\.html$/.test(f)) {
			var name = f.substring(0, f.length - 5)
			htmlFile[name] = resolve(dir + '/' + f)
		}
	}

	return {
		jsFile,htmlFile
	}
}

/**
 * 获取相对目录的所有文件
 */
function flatDir(dir){
	var paths = fs.readdirSync(dir);
	var files=[]
	paths.forEach(function (item, index) {
		var p = dir + path.sep + item
		var info = fs.statSync(p)
		if (info.isDirectory()) {
			files = files.concat(flatDir(p))
		} else {
			files.push(p)
		}
	})
	return files
}

module.exports={
	resolve,
	parseEntry,
	isDev,
	flatDir,
	encodeFlatPath,
	
}
