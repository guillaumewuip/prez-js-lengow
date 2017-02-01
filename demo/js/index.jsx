
import React from 'react';
import ReactDOM from 'react-dom';

import { compose, createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import * as actions from './actions';
import reducer from './reducer';

import Grid from './components/Grid.jsx';

const CATALOG = 1; // first catalog

/*
 * Create store
 */

// Create the store using our reducer
const store = createStore(reducer, compose(
    // we can use as must reducer as we want
    // here thunk is used for async actions
    applyMiddleware(thunkMiddleware),
    // Chrome React Developer Tools
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Let's start by dispatching an init action to build the store
store.dispatch({
    type: actions.INIT,
});

/*
 * Attach our components to DOM
 */

const mapStateToProps = (state) => ({
    products: state.get('products'),
    fetching: state.get('loading'),
});

// Container React component
const AppContainer = connect(
    mapStateToProps,    // props
    actions             // actions to pass
)(Grid);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.querySelector('.js-catalog')
);

/*
 * Let's goooo ! 🚀
 */

// Start by fetching first products
store.dispatch(actions.fetchProducts(CATALOG));

