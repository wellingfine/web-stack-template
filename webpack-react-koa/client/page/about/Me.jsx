import React from 'react'

export default class Me extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			title: 'init ReactComponent',
			message: 'I am client.'
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
				<h1>About me</h1>
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