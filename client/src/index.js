import Auth from './Components/Auth';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Components/Login';
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'materialize-css/dist/js/materialize';

const Application = () => {
  return (
      <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path ="/auth" component={Auth}/>
                <Route excat path="/login" component={Login}/>
            </Switch>
          </Suspense>
      </Router>
  )
};

ReactDOM.render(<Application />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
