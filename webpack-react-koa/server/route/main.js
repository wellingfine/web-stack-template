const ReactDOMServer=require('react-dom/server');


module.exports=function(app,router){
	

    router.get('/',(ctx,next)=>{
        ctx.redirect('/index.html')
    })
    router.get('/test',(ctx,next)=>{
		
        ctx.ssr('index',{
			message:'I am Server'
		})
    })
	router.get('/ssr',(ctx,next)=>{
		//get html layout

		//get element
		var element=require('../ssr/app')
		console.log(element)
		var app=new element.default()
		app.state.title='ssr'
		var str=ReactDOMServer.renderToString(app.render())
		


		var tpl=`
		<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hello Web React</title>
</head>
<body>
	<div id="root">${str}</div>
    
<script type="text/javascript" src="/index.js"></script></body>
</html>
		`
		ctx.body = tpl
		return ;
		const App = require('../../client/component/App.jsx');
		var index=new App()
		index.setState({
			title:'ssr'
		})
		var node = ReactDOMServer.renderToString(App)
		ctx.body=node
	})
}