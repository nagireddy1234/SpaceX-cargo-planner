import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState } from '../../helper/loadStateFromStorage';

const loggerMiddleware = createLogger();
console.log(loggerMiddleware)

const persistedState = loadState();

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware));
const store = createStore(rootReducer, persistedState, middleware);


const dispatch = store.dispatch;

export { store, dispatch };
