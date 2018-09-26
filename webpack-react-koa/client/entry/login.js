const React = require('react')
const ReactDOM = require('react-dom')

import App from '../page/Login'

if (typeof document != 'undefined') {
	ReactDOM.hydrate(<App />, document.getElementById('root'));
}

if(module.hot){
	/**
	 * enable hot reload
	 */
	module.hot.accept('../page/Login', () => {
		ReactDOM.render(
			<App />,
			document.getElementById('root')
		)
	})
}
/**
 * export for ssr
 */
export default App
