import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Homepage from '../pages/Homepage'

export default function Navigation() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}
