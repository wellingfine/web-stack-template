
const webpack=require('webpack')
var base=require('./base')


var config={
    ...base,
	mode:'development',
	devServer:{
		hot:true
	}
}
config.plugins.push(
	new webpack.HotModuleReplacementPlugin()
)

module.exports=config