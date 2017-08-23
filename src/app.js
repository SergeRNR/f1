import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import Nav from './containers/Nav';
import Main from './containers/Main';

import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const middleware = applyMiddleware(thunk);
const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(middleware)
);

render((
  <Provider store={store}>
    <Router>
      <div className='f1-wrapper'>
        <Nav />
        <Main />
      </div>
    </Router>
  </Provider>
), document.getElementById('f1-app'));
