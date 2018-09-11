
const React = require('react')
const ReactDOM = require('react-dom')
import { hot } from 'react-hot-loader'

import App from '../component/App'

// const HotApp=hot(module)(App)

ReactDOM.hydrate(<App />, document.getElementById('root'));
// ReactDOM.render(<HotApp />, document.getElementById('root'));
