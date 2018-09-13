	
const React= require('react')
const ReactDOM=require('react-dom')
import { hot } from 'react-hot-loader'

import App from '../page/Home'

// const HotApp=hot(module)(App)
if(typeof document!='undefined'){
	ReactDOM.hydrate(<App />, document.getElementById('root'));
}

// ReactDOM.render(<HotApp />, document.getElementById('root'));

/**
 * export for ssr
 */
export default App
