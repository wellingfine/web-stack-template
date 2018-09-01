var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

function resolve(p){
	return path.resolve(__dirname+'/../',p)
}

var config={
	entry:{
		//TODO dynamic read entry directory
		index:resolve('./client/entry/index.js')
	},
	output:{
		path:resolve('./server/public'),
		filename:'[name].js',
	},
	resolve:{
		extensions: ['.js', '.jsx', '.json'],
	},
	
	module:{
		rules:[{
			test:/\.css$/,
			use:'style-loader!css-loader'
		},{
			test:/\.scss$/,
			use:'style-loader!css-loader!scss-loader'
		},{
			test:/\.(js|jsx)$/,
			use:[{
				loader:'babel-loader',
				options:{
					presets:['@babel/preset-env','@babel/preset-react']
				}
			}]
		}]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:resolve('./client/entry/default.html')
		})
	]
}

module.exports=config