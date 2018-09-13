/**
 * ssr 专用build
 */

const webpack=require('webpack')
const nodeExternals = require('webpack-node-externals');
process.env.WEBPACK_MODE='ssr'


const u=require('./util')
const base= require('./base')

var { jsFile } = u.parseEntry()

var config={
	entry: jsFile,
	output:{
		path: u.resolve('./server/ssr'),
		filename:'[name].js',
		libraryTarget:'commonjs2',
	},
	externals: [nodeExternals()],
	target:'node',
	module:base.module,
	resolve:base.resolve,
	mode:'development',
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