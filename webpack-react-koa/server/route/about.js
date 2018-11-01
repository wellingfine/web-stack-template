
module.exports = function (app, router) {

	router.get('/about/me', (ctx, next) => {
		ctx.ssr('about/me', {
			message: 'from server'
		})
	})
}