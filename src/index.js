import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { get } from 'lodash';

const devTools = get(window, '__REDUX_DEVTOOLS_EXTENSION__', () => a => a);

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(logger, thunk),
        devTools()
    )
);


ReactDOM.render(
    <Provider store={ store } >
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
