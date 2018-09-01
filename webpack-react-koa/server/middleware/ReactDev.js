const middleware = require("webpack-dev-middleware")
const hm = require("webpack-hot-middleware")
var webpack = require('webpack')
var config = require('../../build/dev')

/**
 * https://github.com/leecade/koa-webpack-middleware
 * make it compatiable with koa middleware
 */
function koaDevMiddleware(mw) {
	return function (ctx, next) {
		return new Promise((resolve) => {
			mw(ctx.req, {
				end: (content) => {
					ctx.body = content;
					resolve(false);
				},
				setHeader: (name, value) => {
					ctx.set(name, value);
				},
			}, () => {
				resolve(true);
			});
		}).then((err) => {
			if (err) { return next(); }
			return null;
		});
	};
}
function koaHotMiddleware(mw) {
	return function (ctx, next) {
		return new Promise((resolve) => {
			mw(ctx.req, ctx.res, resolve);
		}).then(next);
	};
}



function main(app){
	console.log('install webpack-dev-middleware\n')
	var compiler = webpack(config)

	app.use(koaDevMiddleware(
		middleware(compiler,{
			logLevel:'info',
			headers:{
				"X-Custom-Header": "yes" 
			},
			publicPath:config.output.publicPath
		})
	))
	
	app.use(koaHotMiddleware(
		hm(compiler,{

		})
	));
}
module.exports=main