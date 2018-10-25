import React from 'react'
import {Switch, Route} from 'react-router-dom'

import SignIn from './components/Signin'
import App from './App';

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/" component={App} />
        </Switch>
    )
}

export default Routes;
