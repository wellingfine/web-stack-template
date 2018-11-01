const util=require('./util')
const path=require('path')
const fs=require('fs')

//获取启动配置
var config=require('./entry.config')

var defaultEntryTpl=fs.readFileSync(path.join(__dirname,'./entry.tpl.js'),{encoding:'utf8'})

//获取所有文件列表
var files=util.flatDir(config['entryDirectory'])

//生成n个文件，或者直接做成插件，输入到webpack中
var entrys=[]
var cacheDir=path.join(__dirname,'.cache')
try{
	fs.mkdirSync(cacheDir)
}catch(e){}
var chunk={}
files.forEach((item,index)=>{
	var entry={
		file:'', //文件内容
		relPath:'', //相对路径
		path:item, //实际路径
		chunkName:'',//chunk的名字
	}
	entry.file=fs.readFileSync(item)
	entry.relPath=path.relative(config['entryDirectory'],item)
	entry.chunkName=util.encodeFlatPath(entry.relPath)
	entry.chunkName = entry.chunkName.substring(0, entry.chunkName.lastIndexOf('.'))
	entry.chunkName = entry.chunkName.toLowerCase()

	entry.cachePath = path.join(cacheDir,entry.chunkName+'.js')

	//计算相对路径，生成文件到cache
	var p = path.relative(cacheDir, entry.path)
	p=p.replace(/\\/g, '/')
	entry.file=defaultEntryTpl.replace(/"\!path"/g,p)

	fs.writeFileSync(entry.cachePath,entry.file,{encoding:'utf8'})

	// entry.file=''
	entrys.push(entry)
	chunk[entry.chunkName]=entry.cachePath
})
// console.log(entrys)

module.exports = chunk