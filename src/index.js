import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from './redux/store/Store';
import App from './App';
import 'regenerator-runtime/runtime';
import './Styles/css/style.css';
import './Styles/scss/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';


ReactDOM.render(
    <Provider store={Store}>
            <App />
    </Provider>,
    document.getElementById('root')
);
