import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute';
import AuthWrapper from './pages/AuthWrapper';
import Error from './pages/Error';

class App extends Component {
    render() {
        return (
            <AuthWrapper>
                <BrowserRouter>
                    <Switch>
                        <PrivateRoute path='/' exact={true} >
                            <Dashboard />
                        </PrivateRoute>
                        <Route path='/login' exact component={Login} />
                        <Route path='*' component={Error} />
                    </Switch>
                </BrowserRouter>
            </AuthWrapper>
        )
    }
}

export default App;
