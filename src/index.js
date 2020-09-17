import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history';
import configureStore from './configureStore';


const history = createBrowserHistory({ basename: "" });
const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
