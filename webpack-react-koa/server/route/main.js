const ReactDOMServer=require('react-dom/server');


module.exports=function(app,router){
	

    router.get('/',(ctx,next)=>{
        ctx.redirect('/index.html')
    })
    router.get('/test',(ctx,next)=>{
        ctx.body='route works'
    })
	router.get('/ssr',(ctx,next)=>{
		const App = require('../../client/component/App.jsx');
		var index=new App()
		index.setState({
			title:'ssr'
		})
		var node = ReactDOMServer.renderToString(App)
		ctx.body=node
	})
}