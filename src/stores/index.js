import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';

const store = createStore(reducers, {});

window.s = store;
export default store;
