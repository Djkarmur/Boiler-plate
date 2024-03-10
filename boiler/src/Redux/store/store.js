import {createStore} from 'redux'
import { Provider } from 'react-redux'
import {composeWithDevTools} from '@redux-devtools/extension';
import rootReducer from '../Reducers/rootReducer';
import {thunk} from 'redux-thunk'
import { applyMiddleware } from "redux";

//// saga middleware
import createSagaMiddleware from 'redux-saga'
import mySaga from '../Sagas';

const sagaMiddleware  = createSagaMiddleware();


const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(mySaga)   // method to start a redux saga

export default store 