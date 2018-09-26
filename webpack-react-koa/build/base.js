var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const u=require('./util')

var {jsFile,htmlFile}= u.parseEntry()

/**
 * 生成各个入口点自己的html
 */
var hwp=[]
for (var i in jsFile){
	//找不到就给默认模板
	var tplPath = htmlFile[i] || u.resolve('./client/entry/default.html');
	
	hwp.push(
		new HtmlWebpackPlugin({
			chunks: [i],//TODO: common chunks option.
			filename: u.isDev?i+'.html':'../ssr/' + i + '.html',
			template: tplPath
		})
	);
}

var base={
	entry: jsFile,
	output:{
		path:u.resolve('./server/public'),
		filename:'[name].[hash:5].js',
		publicPath:'/'
	},
	resolve:{
		extensions: ['.js', '.jsx', '.json'],
	},
	
	module:{
		rules:[{
			test:/\.(sass|scss|css)$/i,
			use:[
				u.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
				'css-loader',
				'sass-loader',
			]
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
			exclude: u.resolve('./node_modules'),
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
		...hwp,
	]
}
if(!u.isDev){
	base.plugins.push(
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			// css file name should be named by hash ,so can be use between chunks
			filename: 'asset/css/[contenthash:5].css',
			chunkFilename: 'asset/css/[contenthash:5].css',
		})
	);
}

module.exports = base