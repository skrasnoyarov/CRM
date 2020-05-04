import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from "react-redux";
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk'
import rootReducers from "./reducers/rootReducers";
import * as serviceWorker from './serviceWorker';

import App from './App';
import './index.css';
import "materialize-css/dist/js/materialize";


const composeEnhancers = // Для отображения в плагине devtools
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const loggerMiddleware = store => next => action => {
    const result = next(action);
    console.log('Middleware', store.getState());

    return result
};

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(
    loggerMiddleware,
    reduxThunk
)));


const Application: React.TC = () => {
  return (
      <Provider store={store}>
          <Router>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <App />
                </Switch>
              </Suspense>
          </Router>
      </Provider>
  )
};

ReactDOM.render(<Application />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
