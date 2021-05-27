import React from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom' ;
import history from '../history';

import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/login/LoginPage';

class MainLayout extends React.Component{

    render(){
        return (
            <Router history={history}>
                <p><Link to="/login"> Página de Login </Link></p>
                <p><Link to="/"> Página Home </Link></p>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </Router>
        )
    }
}

export default MainLayout;