import React from 'react'

import '../asset/css/direct-style.scss'
import cssModule from '../asset/css/module-style.scss'
import { hot } from 'react-hot-loader'

export default class App extends React.Component {
	constructor(props){
		super(props)
		this.state={
			count:0
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
				<h1>Hello React! </h1>
				<a onClick={()=>this.clickMe()}>Click me {this.state.count}</a>
				<div className={cssModule['module']}>.module-a style</div>
			</div>
		);
	}
};

