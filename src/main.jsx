import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from "./redux/store"
import App from './App'
import "./App.css"
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path={["/palettes/:filled","/:page", "/"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
