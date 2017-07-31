import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import Nav from './containers/Nav';
import Main from './containers/Main';

require('./styles/app.scss');

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
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
