import React from 'react';
import { render } from 'react-dom';
// import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
//
// import rootReducer from './reducers';
// import App from './components/App';
// import ListContainer from './components/ListContainer';
// import CompareContainer from './components/CompareContainer';
//
// const store = createStore(
//     rootReducer,
//     applyMiddleware(thunk)
// );
//
// render((
//     <Provider store={store}>
//         <Router history={hashHistory}>
//             <Route path="/" component={App}>
//                 <IndexRedirect to="/list" />
//                 <Route path="/list" component={ListContainer} />
//                 <Route path="/compare" component={CompareContainer} />
//             </Route>
//         </Router>
//     </Provider>
// ), document.getElementById('app'));

import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

render((
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <hr/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </div>
    </Router>
), document.getElementById('f1-app'));
