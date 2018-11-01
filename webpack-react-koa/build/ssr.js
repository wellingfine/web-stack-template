/**
 * ssr 专用build
 */

const webpack=require('webpack')
const nodeExternals = require('webpack-node-externals');
process.env.WEBPACK_MODE='ssr'

class FilterPlugin{
	constructor(opts){
		this.save=opts.save
	}
	apply(compiler){
		compiler.hooks.emit.tapAsync('FilterPlugin',(compilation, callback) => {
			var assets=compilation.assets
			for(var path in assets){
				var del=true
				for (let i = 0; i < this.save.length; i++) {
					const reg = this.save[i];
					if(reg.test(path)==true){
						del=false
						break;
					}
				}
				if(del){
					delete compilation.assets[path]
				}
			}

			callback();
		});
	}
}
const u=require('./util')
const base= require('./base')
const cfg=require('./config')

var chunkObj = require('./bootstrap')

var config={
	entry: chunkObj,
	output:{
		path: u.resolve('./server/ssr'),
		filename:'[name].js',
		libraryTarget:'commonjs2',
	},
	externals: [nodeExternals({
		//前端使用到的库，需要排除掉
		whitelist: cfg.ssrAssetPath
	})],
	target:'node',
	module:base.module,
	resolve:base.resolve,
	plugins:[
		new FilterPlugin({
			save:[
				/\.js$/
			]
		})
	],
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