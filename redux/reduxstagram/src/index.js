import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/home/index.js'
import Single from './components/single/index.js'

import store from './store.js'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path='/' component={Home} />
        <Route path='/view/:postId' component={Single} />
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root'))
registerServiceWorker()
