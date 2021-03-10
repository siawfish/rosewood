import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Homepage from '../pages/Homepage'
import Login from '../pages/Login';
import Properties from '../pages/Properties';
import Register from '../pages/Register';

export default function Navigation() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/properties">
                    <Properties />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}
