import React from 'react'
import { Navbar, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Nav() {
    const history = useHistory()
    const gotoLogin = ()=> {
        history.push('/login')
    }
    return (
        <Navbar>
            <Navbar.Brand href="/">Rosewood</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Properties
                </Navbar.Text>
                <Navbar.Text>
                    News
                </Navbar.Text>
                <Navbar.Text>
                    Favourites
                </Navbar.Text>
                <Button onClick={gotoLogin}  variant="outline-secondary">
                    Login
                </Button>
            </Navbar.Collapse>
        </Navbar>
    )
}
