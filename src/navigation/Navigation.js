import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Aboutus from '../pages/user/Aboutus';
import Contactus from '../pages/user/Contactus';
import Homepage from '../pages/user/Homepage'
import Login from '../pages/user/Login';
import Properties from '../pages/user/Properties';
import Property from '../pages/user/Property';
import Register from '../pages/user/Register';
import AdminNavigation from './AdminNavigation'

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
                <Route exact path="/property/:id">
                    <Property />
                </Route>
                <Route exact path="/properties">
                    <Properties />
                </Route>
                <Route exact path="/aboutus">
                    <Aboutus />
                </Route>
                <Route exact path="/contactus">
                    <Contactus />
                </Route>
                <Route exact path="/admin">
                    <AdminNavigation />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}
