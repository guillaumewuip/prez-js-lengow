
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
 * Création du Store
 */

// On crée le store utilisant notre reducer
const store = createStore(reducer, compose(
    // on peut ajouter autant de middleware que l'on veut
    // ici thunk pour faire des actions asynchrones
    applyMiddleware(thunkMiddleware),
    // Pour Chrome React Developer Tools
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// On dispatche une première action d'init au store
store.dispatch({
    type: actions.INIT,
});

/*
 * On attache nos composants au DOM
 */

const mapStateToProps = (state) => ({
    products: state.get('products'),
    fetching: state.get('loading'),
});

// on crée un composant React "container"
const AppContainer = connect(
    mapStateToProps,    // on déclare les props du composants
    actions             // on peut passer directement les actions
)(Grid);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.querySelector('.js-catalog')
);

/*
 * C'est partiiii ! 🚀
 */

// On va chercher les premiers produits
store.dispatch(actions.fetchProducts(CATALOG));
