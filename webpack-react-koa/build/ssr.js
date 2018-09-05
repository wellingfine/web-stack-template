/**
 * ssr 专用build
 */

const webpack=require('webpack')
const nodeExternals = require('webpack-node-externals');


const u=require('./util')
const base= require('./base')

var config={
	entry:{
		app:u.resolve('./client/component/App.jsx'),
	},
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