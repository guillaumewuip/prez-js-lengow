
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import * as actions from './actions';
import reducer from './reducer';

import { CATALOG } from './constants.json';

import Grid from './components/Grid.jsx';

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
);

store.dispatch({
    type: actions.INIT,
});

const mapStateToProps = (state) => ({
    products: state.get('products'),
    fetching: state.get('loading'),
});

const AppContainer = connect(
    mapStateToProps,
    actions
)(Grid);

store.dispatch(actions.fetchProducts(CATALOG));

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.querySelector('.js-catalog')
);

