
module.exports = function (app, router) {

	router.get('/do/login', (ctx, next) => {
		console.log('start login',ctx.request)
	})
	router.get('/login',(ctx,next)=>{
		ctx.ssr('login',{
			message:'from server'
		})
	})
}