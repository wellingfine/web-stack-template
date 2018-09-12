const Koa = require('koa');
const Router =require('koa-router')
const static=require('koa-static')
const path=require('path')

const app = new Koa();
const router = new Router();

var config=null,isDev=false
if(process.env.NODE_ENV=='dev'){
	config=require('./config.dev')
	isDev=true
}else{
    config=require('./config')
}



require('./middleware/ReactRender')(app, {
	viewDir: path.resolve(__dirname, 'ssr')
})
/**
 * install local dev middleware
 */
if (isDev) {
	require('./middleware/ReactDev')(app)
}



/**
 * make routers
 */
require('./route/main')(app, router)
//add more routes here

//add more routes here
app.use(router.routes())

/**
 * static plugin
 * 
 * !!Must be the last middleware!!
 */
app.use(static(__dirname + '/public'))

app.listen(config.port,function(){
    console.log('koa listening port:'+config.port)
});