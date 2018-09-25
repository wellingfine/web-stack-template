const React = require('react')
const ReactDOM = require('react-dom')

import App from '../page/Login'

if (typeof document != 'undefined') {
	ReactDOM.hydrate(<App />, document.getElementById('root'));
}

if(module.hot){
	console.log('x hot',module.hot)
	module.hot.accept('../page/Login', () => {
		console.log('update.')
		const NextApp = require('../page/Login').default
		ReactDOM.render(
			<NextApp />,
			document.getElementById('root')
		)
	})
}
/**
 * export for ssr
 */
export default App
