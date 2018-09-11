import React from 'react'

import '../../asset/css/direct-style.scss'
import cssModule from '../../asset/css/module-style.scss'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			title: 'init ReactComponent'
		}
	}
	clickMe() {
		console.log(this)
		this.setState({
			count: this.state.count + 1
		})
	}
	render() {
		return (
			<div>
				<h1>Hello React! {this.state.title}</h1>
				<a onClick={() => this.clickMe()}>Click me {this.state.count}</a>
				{/* <div className={cssModule['module']}>.module-a style</div> */}
				<div id="face-bar">
					<span className="face cool"></span>
					<span className="face smile"></span>
					<span className="face what"></span>
				</div>
			</div>
		);
	}
}