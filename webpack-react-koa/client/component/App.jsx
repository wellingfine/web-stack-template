import React from 'react'
const ReactDOMServer = require('react-dom/server');
import '../asset/css/direct-style.scss'
import cssModule from '../asset/css/module-style.scss'

export default class App extends React.Component {
	constructor(props){
		super(props)
		this.state={
			count:0,
			title:'init ReactComponent'
		}
	}
	clickMe(){
		console.log(this)
		this.setState({
			count:this.state.count+1
		})
	}
	render() { 
		return (
			<div>
				<span>123</span>
				<h1>Hello React! {this.state.title}</h1>
				<a onClick={()=>this.clickMe()}>Click me {this.state.count}</a>
				<div className={cssModule['module']}>.module-a style</div>
			</div>
		);
	}
};
var a=new App()
a.state.title='App title'
console.log(a)
console.log(ReactDOMServer.renderToString(a.render()))