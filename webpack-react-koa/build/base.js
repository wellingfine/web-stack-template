var HtmlWebpackPlugin = require('html-webpack-plugin');

const u=require('./util')

var base={
	entry:{
		//TODO dynamic read entry directory
		index:u.resolve('./client/entry/index.js')
	},
	output:{
		path:u.resolve('./server/public'),
		filename:'[name].js',
		publicPath:'/'
	},
	resolve:{
		extensions: ['.js', '.jsx', '.json'],
	},
	
	module:{
		rules:[{
			test:/\.css$/i,
			use:'style-loader!css-loader'
		},{
			test:/\.scss$/i,
			loader:'style-loader!css-loader!sass-loader'
		},{
			test: /\.(png|jpe?g|gif)$/i,
			use: [{
				loader: 'url-loader',
				options: {
					name:'[name].[hash:4].[ext]',
					limit: 2048,
					outputPath:'asset/image/'
				}
			}]
		},{
			test:/\.(js|jsx)$/i,
			use:[{
				loader:'babel-loader',
				options:{
					presets:['@babel/preset-env','@babel/preset-react'],
					plugins: ['react-hot-loader/babel'],
				},
			}]
		}]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:u.resolve('./client/entry/default.html')
		})
	]
}

module.exports = base