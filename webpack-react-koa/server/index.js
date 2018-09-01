const Koa = require('koa');
const Router =require('koa-router')
const static=require('koa-static')

const app = new Koa();
const router = new Router();

var config=null
if(process.env.NODE_ENV=='dev'){
    config=require('./config.dev')
}else{
    config=require('./config')
}

/**
 * make routers
 */
require('./route/main')(app,router)
//add more routes here

//add more routes here
app.use(router.routes())

/**
 * static
 */
app.use(static(__dirname+'/public'))


app.listen(config.port,function(){
    console.log('koa listening port:'+config.port)
});