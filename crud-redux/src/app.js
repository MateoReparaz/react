import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Router from './components/router'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import reducer from './reducers/reducer'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

const data = window.__data__

delete window.__data__

const middleware = applyMiddleware(thunk, createLogger())

const store = createStore(reducer, data, middleware)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
document.getElementById('content')
)
