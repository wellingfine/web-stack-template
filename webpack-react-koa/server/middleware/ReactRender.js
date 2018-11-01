/**
 * react render
 */
const reactDOMServer  =require('react-dom/server')
const path=require('path')
const fs=require('fs')

var isDev=process.env.NODE_ENV=='dev'?true:false
var dir='';
var cache={} //object cache
var cacheHtml={}
/**
 * 
 * @param {string} path page path
 * @param {object} state react state
 * @param {string} htmlTplPath html template for ssr
 */
async function render(path,state,htmlTplPath){
	path=path.replace(/\//g,'~')
	
	var htmlStr=null;
	var webpackStats=(this.res.locals||{}).webpackStats
	if(webpackStats){
		//get html from memory
		cacheHtml[path]=webpackStats.compilation.assets[path+'.html'].source()
		//TODO: generate ssr in runtime
	}
	
	var inst, mp, renderStr
	try{
		mp = `${dir}/${path}.js`
		if(isDev){
			delete require.cache[mp]
		}
		var Com=require(mp)

		if (Com.default) {
			inst = new Com.default()
		} else {
			inst = new Com()
		}
		//set state
		for (var i in state) {
			inst.state[i] = state[i]
		}
		//TODO use renderToStream
		renderStr = reactDOMServer.renderToString(inst.render())

	}catch(e){
		//use normal renderStr if error
		console.log(e)
		renderStr=''
	}

	var wrap =
		'<div id="root">'+renderStr+'</div>'+
		'<script>window.__INIT_STATE__='+JSON.stringify(state)+'</script>'

	//get html
	htmlStr=cacheHtml[path]
	if(!htmlStr){
		// sync is ok becauseof cacheHtml
		htmlStr = fs.readFileSync(`${dir}/${path}.html`,'utf8')
		cacheHtml=htmlStr
	}

	this.body=htmlStr.replace('<div id="root"></div>',wrap)
}


module.exports=function(app,options){

	app.context.ssr=render

	dir = options.viewDir||''
	if(!dir){
		throw new Error('Must specify SSR directory!')
	}

}