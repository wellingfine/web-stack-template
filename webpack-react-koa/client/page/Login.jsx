import React from 'react'

require('bulma/bulma.sass')
require('../asset/css/login.scss')

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			message:'from client',
			username:'',
			password:'',
		}
		this.onUsernameChange=this.onUsernameChange.bind(this)
		this.onPasswordChange=this.onPasswordChange.bind(this)
	}
	onUsernameChange(e){
		this.setState({username:e.target.value})
	}
	onPasswordChange(e){
		this.setState({ password: e.target.value })
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
					<div className="control">
						<input className="input is-success" type="text" placeholder="Text input" value={this.state.username} onChange={this.onUsernameChange}/>
					</div>
					{/* <p className="help is-success">This username is available</p> */}
				</div>

				<div className="field">
					<label className="label">Password</label>
					<div className="control">
						<input className="input is-danger" type="password" placeholder="input your password"  value={this.state.password} onChange={this.onPasswordChange}/>
					</div>
					<p className="help is-danger">This email is invalid1</p>
				</div>
		</div>
		);
	}
}