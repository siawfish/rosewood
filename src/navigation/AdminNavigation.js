import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
  } from "react-router-dom";
import AdminAuth from '../pages/admin/AdminAuth'
import AdminRegister from '../pages/admin/AdminRegister'
import Dashboard from '../pages/admin/Dashboard'
import { useSelector } from 'react-redux'

export default function AdminNavigation() {
    let location = useLocation()
    const { isAuthenticated } = useSelector(state=>state.app)
    React.useEffect(() => {
        if(location.pathname.match('/admin')){
            document.body.style.backgroundColor = "#555"
        } else {
            document.body.style.backgroundColor = "#fff"
        }
    })
    return (
        <Router>
            {
                isAuthenticated ?
                <Route exact path="/admin">
                    <Dashboard />
                </Route> :
                <Switch>
                    <Route exact path="/admin">
                        <AdminAuth />
                    </Route>
                    <Route path="/admin/register">
                        <AdminRegister />
                    </Route>
                </Switch>
            }
        </Router>
    )
}
