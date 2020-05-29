import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, Link,
} from 'react-router-dom';

import './App.css';

import Header from './components/parts/header';
import Footer from './components/parts/footer';
import HomePage from './views/HomePage';
import RegisterPage from './views/auth/Register';
import LogoutPage from './views/auth/Logout';
import AuthPage from './views/auth/auth';
import {isAuthenticated} from "./service/auth/login";

function App () {
    const isAuth = isAuthenticated();

    return (
        <div>
            {!isAuth && (
                <AuthPage />
            )}

            {isAuth && (
                <Router>
                    <Header />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Switch>
                                    <Route exact path="/">
                                        <HomePage />
                                    </Route>
                                    <Route path="/logout">
                                        <LogoutPage />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </Router>
            )}

        </div>
    );
}

export default App;