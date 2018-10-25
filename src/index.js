import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './components/Signin'

// this.props.history.goBack()
//
// const withRouter=() => (
//   <BrowserRouter>
//   <App/>
//   </BrowserRouter>
// )
ReactDOM.render(
  <BrowserRouter basename = { process.env.PUBLIC_URL } >
    <Switch>
            <Route exact path = '/' component = { App } />
            <Route  path = '/signin' component = { SignIn } />

      </Switch>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
