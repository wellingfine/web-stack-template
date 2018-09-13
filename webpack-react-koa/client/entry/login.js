const ReactDOM = require('react-dom')

import App from '../page/Login'

if (typeof document != undefined) {
	ReactDOM.hydrate(<App />, document.getElementById('root'));
}

/**
 * export for ssr
 */
export default App
