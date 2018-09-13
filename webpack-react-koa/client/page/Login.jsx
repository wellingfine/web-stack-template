import React from 'react'

require('bulma/bulma.sass')
require('../../asset/css/login.scss')

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	onClickLogin(){

	}
	render() {
		return (
			<div id="login">
				<h1>Login</h1>
				<div class="field">
					<label class="label">Username</label>
					<div class="control has-icons-left has-icons-right">
						<input class="input is-success" type="text" placeholder="Text input" value="bulma" />
						<span class="icon is-small is-left">
							<i class="fas fa-user"></i>
						</span>
						<span class="icon is-small is-right">
							<i class="fas fa-check"></i>
						</span>
					</div>
					<p class="help is-success">This username is available</p>
				</div>

				<div class="field">
					<label class="label">Email</label>
					<div class="control has-icons-left has-icons-right">
						<input class="input is-danger" type="email" placeholder="Email input" value="hello@" />
						<span class="icon is-small is-left">
							<i class="fas fa-envelope"></i>
						</span>
						<span class="icon is-small is-right">
							<i class="fas fa-exclamation-triangle"></i>
						</span>
					</div>
					<p class="help is-danger">This email is invalid</p>
				</div>
		</div>
		);
	}
}