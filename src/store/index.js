import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers';
import ThunMiddleware from 'redux-thunk';
const store = createStore(reducer,applyMiddleware(ThunMiddleware));

if(process.env.NODE_ENV==='development'){
    window.store = store;
}

export default store;