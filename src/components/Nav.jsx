import React from 'react'
import { Navbar, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.png'

export default function Nav() {
    const history = useHistory()
    const location = useLocation()
    const gotoLogin = ()=> {
        history.push('/login')
    }
    const gotoProperties = ()=> {
        history.push('/properties')
    }
    const gotoAboutus = ()=> {
        history.push('/aboutus')
    }
    const gotoContactus = ()=> {
        history.push('/contactus')
    }
    const path = location.pathname
    return (
        <Navbar className={path.match('/admin')?"inAdmin":null} style={path.match('/admin')&&{backgroundColor:"#000"}}>
            <Navbar.Brand href="/">
                <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text onClick={gotoProperties}>
                    Call us on: <span>+233 24 793 8888</span>
                </Navbar.Text>
                <Navbar.Text style={path.match('/properties')&&{color:'#5A995A'}} onClick={gotoProperties}>
                    Properties
                </Navbar.Text>
                <Navbar.Text style={path.match('/aboutus')&&{color:'#5A995A'}} onClick={gotoAboutus}>
                    About Us
                </Navbar.Text>
                <Navbar.Text style={path.match('/contactus')&&{color:'#5A995A'}} onClick={gotoContactus}>
                    Contact Us
                </Navbar.Text>
                {
                    !path.match('/admin') &&
                    <Button className="borderBtn" onClick={gotoLogin}>
                        Login
                    </Button>
                }
            </Navbar.Collapse>
        </Navbar>
    )
}
