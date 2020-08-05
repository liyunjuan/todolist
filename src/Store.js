import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { reducer as todoReducer } from './todos';
import { reducer as filterReducer } from './filters';

const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});

const middlewares = [];
if(process.env.NODE_ENV !== 'production') {
    middlewares.push(require('redux-immutable-state-invariant')());
}

const storeEnhancers = compose(
    applyMiddleware(...middlewares)
);

export default createStore(reducer, {}, storeEnhancers);