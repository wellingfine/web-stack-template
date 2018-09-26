import React from 'react'

require('../asset/css/footer.scss')

export default class App extends React.Component {
	constructor(props){
		super(props)
	}
	render() { 
		return (
			<div id="footer">
				dev by <a href="http://wellingfine.github.io">wellingfine</a>
			</div>
		);
	}
}