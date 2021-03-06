import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
  } from "react-router-dom";
import AdminAuth from '../pages/admin/AdminAuth'
import AdminRegister from '../pages/admin/AdminRegister'

export default function AdminNavigation() {
    let location = useLocation()
    React.useEffect(() => {
        if(location.pathname.match('/admin')){
            document.body.style.backgroundColor = "#333"
        } else {
            document.body.style.backgroundColor = "#fff"
        }
    })
    return (
        <Router>
            <Switch>
                <Route exact path="/admin">
                    <AdminAuth />
                </Route>
                <Route path="/admin/register">
                    <AdminRegister />
                </Route>
            </Switch>
        </Router>
    )
}
