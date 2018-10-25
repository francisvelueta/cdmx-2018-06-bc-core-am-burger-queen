import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './components/Signin'
import { createStore } from 'redux';
import combineReducers from './reducers/combineReducers';
import { Provider } from 'react-redux';

const store = createStore(combineReducers)
<<<<<<< HEAD
// this.props.history.goBack()
//
// const withRouter=() => (
//   <BrowserRouter>
//   <App/>
//   </BrowserRouter>
// )
=======
>>>>>>> 62002bf8083af623ca5da7d3dcddb1b23d8b40ec

ReactDOM.render(
  <Provider store = {store}>
  <BrowserRouter basename = { process.env.PUBLIC_URL } >
    <Switch>
            <Route exact path = '/' component = { App } />
            <Route  path = '/signin' component = { SignIn } />
<<<<<<< HEAD

=======
>>>>>>> 62002bf8083af623ca5da7d3dcddb1b23d8b40ec
      </Switch>
    </BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
