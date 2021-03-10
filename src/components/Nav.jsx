import React from 'react'
import { Navbar, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Nav() {
    const history = useHistory()
    const gotoLogin = ()=> {
        history.push('/login')
    }
    const gotoProperties = ()=> {
        history.push('/properties')
    }
    return (
        <Navbar>
            <Navbar.Brand href="/">Rosewood</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text onClick={gotoProperties}>
                    Call us on: <span>+233 24 793 8888</span>
                </Navbar.Text>
                <Navbar.Text onClick={gotoProperties}>
                    Properties
                </Navbar.Text>
                <Navbar.Text>
                    About Us
                </Navbar.Text>
                <Navbar.Text>
                    Contact Us
                </Navbar.Text>
                <Button className="borderBtn" onClick={gotoLogin}>
                    Login
                </Button>
            </Navbar.Collapse>
        </Navbar>
    )
}
