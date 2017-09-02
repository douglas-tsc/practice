import React from 'react'
import ReactDOM from 'react-dom'
import App from './Routes.js'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import configureStore from './store'

// Initialize store
const store = configureStore()

ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	document.getElementById('root')
)
registerServiceWorker()
