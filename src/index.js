import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

const store = legacy_createStore(reducer);

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <Provider store ={ store }>
     <App />
  </Provider>,
  document.getElementById('root')
);
