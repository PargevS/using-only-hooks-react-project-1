import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
// *******************************************************
import {AuthPage, HomePage, PostPage} from "./containers/pages";

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/login' exact component={AuthPage} />
            <Route path='/register' exact component={AuthPage} />
            <Route path='/posts/:id' component={PostPage} />
            <Redirect to='/' />
        </Switch>
    );
};

export default Routes;
