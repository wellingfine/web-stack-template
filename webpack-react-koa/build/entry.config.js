/**
 * 入口点配置
 * 
 */
/**
 * {name}:{
 * 	common
 * 	html:''
 * }
 */
module.exports={
	ext:'jsx',
	pageDirectory:'/client/page/',
	tmp:'/tmp/',
	htmlTpl:'',//默认模板
	page:{
		'/path/to/name.jsx':{
			//自定义模板，默认是在page目录下与jsx同名
			html:'',
			// $ 表示当前的页面的位置，可以任意设置加载顺序
			extraChunk:'chunk1,$,chunk2,chunk3'
		}
	}
}