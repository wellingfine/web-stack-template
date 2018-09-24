import React from 'react'

require('bulma/bulma.sass')
require('../../asset/css/login.scss')

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			message:'from client'
		}
	}
	componentWillMount(){
		//for ssr
		Object.assign(this.state, window.__INIT_STATE__)
	}
	onClickLogin(){

	}
	render() {
		return (
			<div id="login">
				<h1>Login {this.state.message}</h1>
				<div className="field">
					<label className="label">Username</label>
					<div className="control has-icons-left has-icons-right">
						<input className="input is-success" type="text" placeholder="Text input" value="bulma" />
						<span className="icon is-small is-left">
							<i className="fas fa-user"></i>
						</span>
						<span className="icon is-small is-right">
							<i className="fas fa-check"></i>
						</span>
					</div>
					{/* <p className="help is-success">This username is available</p> */}
				</div>

				<div className="field">
					<label className="label">Email</label>
					<div className="control has-icons-left has-icons-right">
						<input className="input is-danger" type="email" placeholder="Email input" value="hello@" />
						<span className="icon is-small is-left">
							<i className="fas fa-envelope"></i>
						</span>
						<span className="icon is-small is-right">
							<i className="fas fa-exclamation-triangle"></i>
						</span>
					</div>
					<p className="help is-danger">This email is invalid</p>
				</div>
		</div>
		);
	}
}