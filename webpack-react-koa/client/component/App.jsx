import React from 'react'

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
				<h1>Hello React!</h1>
				<a onClick={()=>this.clickMe()}>Click me {this.state.count}</a>
			</div>
		); 
	} 
};
