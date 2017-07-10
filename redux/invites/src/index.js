import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

const main = (
	<Provider store={store}>
		<App />
	</Provider>
)

ReactDOM.render(main, document.getElementById('root'))
registerServiceWorker()
