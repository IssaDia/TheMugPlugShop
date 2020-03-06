import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { getProducts } from './actions/getProducts';

const initialState ={};
const middleware = [thunk];

const store = createStore(rootReducer,
     initialState,
     composeWithDevTools(applyMiddleware(...middleware))
);

store.dispatch(getProducts());

export default store;

