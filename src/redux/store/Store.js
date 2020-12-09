import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from '../../helper/loadStateFromStorage';

const loggerMiddleware = createLogger();

const persistedState = loadState();

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware));
const store = createStore(rootReducer, persistedState, middleware);

// store.subscribe(() => {
//     saveState({
//       cargoBaysReducer: store.getState().cargoBaysReducer
//     });
//   });

const dispatch = store.dispatch;

export { store, dispatch };
