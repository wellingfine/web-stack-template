
const ReactDOM = require('react-dom')
import App from '../component/App'

// const HotApp=hot(module)(App)
if (typeof document != undefined) {
	ReactDOM.hydrate(<App />, document.getElementById('root'));
}

export default App