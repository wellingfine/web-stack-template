
const webpack=require('webpack')
var base=require('./base')


var config={
    ...base,
	mode:'development',
	devServer:{
		hot:true
	}
}
config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin())
config.plugins.push(new webpack.HotModuleReplacementPlugin())
// Use NoErrorsPlugin for webpack 1.x
config.plugins.push(new webpack.NoEmitOnErrorsPlugin())


module.exports=config