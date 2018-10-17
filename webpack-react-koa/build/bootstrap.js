

//获取启动配置
var config=require('./entry.config')


//递归检测 client/page/ 文件，jsx格式
function flatDir(){

	return [
		'/dir/path1/path2/A.jsx',
		'/dir/path1/path2/B.jsx',
	]
}
var files=flatDir(config['pageDirectory'])

//生成n个文件，或者直接做成插件，输入到webpack中

//入口模版
var entryTpl=``
//遍历 files 替换模板，变量命名 => "!name"，简单做下替换


//计算相对路径，生成文件到其它目录


//


//加载对应ENV启动构建



