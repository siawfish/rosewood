import React from 'react'
import { Navbar, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';

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
            <Navbar.Brand href="/">Rosewood</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text onClick={gotoProperties}>
                    Call us on: <span>+233 24 793 8888</span>
                </Navbar.Text>
                <Navbar.Text style={path.match('/properties')&&{color:'#8e1fc2'}} onClick={gotoProperties}>
                    Properties
                </Navbar.Text>
                <Navbar.Text style={path.match('/aboutus')&&{color:'#8e1fc2'}} onClick={gotoAboutus}>
                    About Us
                </Navbar.Text>
                <Navbar.Text style={path.match('/contactus')&&{color:'#8e1fc2'}} onClick={gotoContactus}>
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
