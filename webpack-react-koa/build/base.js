var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var isDev=false
if(process.env.NODE_ENV=='dev'){
	isDev=true
}

const u=require('./util')

/**
 * 获取入口点所有文件
 */
var dir = u.resolve('./client/entry')
var entrys=u.readFileList(dir)
entrys=entrys.filter(function(item){
	if (/\.js$/.test(item)){
		return true
	}
	return false
})
var entryObj={}
for(var i=0;i<entrys.length;i++){
	var file = entrys[i]
	var name=file.substring(0,file.length-3)
	entryObj[name]=u.resolve(dir+'/'+file)
}

/**
 * 生成各个入口点自己的html
 */
var hwp=[]
for(var i in entryObj){

	hwp.push(
		new HtmlWebpackPlugin({
			chunks:[i],
			filename: i+'.html',
			//TODO 各个 chunk给不同名字的html模板
			template: u.resolve('./client/entry/default.html')
		})
	);
}

var base={
	entry: entryObj,
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
			test:/\.(sa|sc|c)ss$/i,
			use:[
				isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
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

		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			// css file name should be named by hash ,so can be use between chunks
			filename: isDev ? '[name].css' : '[contenthash:7].css',
			chunkFilename: isDev ? '[id].css' : '[contenthash:7].css',
		}),

	]
}

module.exports = base