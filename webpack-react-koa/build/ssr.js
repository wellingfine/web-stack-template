/**
 * ssr 专用build
 */

const webpack=require('webpack')
const nodeExternals = require('webpack-node-externals');
process.env.WEBPACK_MODE='ssr'


const u=require('./util')
const base= require('./base')
const config=require('./config')

var { jsFile } = u.parseEntry()

var config={
	entry: jsFile,
	output:{
		path: u.resolve('./server/ssr'),
		filename:'[name].js',
		libraryTarget:'commonjs2',
	},
	externals: [nodeExternals({
		//前端使用到的库，需要排除掉
		whitelist: config.ssrAssetPath
	})],
	target:'node',
	module:base.module,
	resolve:base.resolve,
	plugins:[],
}
config.plugins.push(
	base.plugins.pop()
)
if(process.env.NODE_ENV=='dev'){
	config.mode = 'development'
}else{
	config.mode = 'production'
}


webpack(config,(err,stats)=>{
	if(err){
		console.log(err)
		return ;
	}
	process.stdout.write(stats.toString({
		colors: true
	}))

})