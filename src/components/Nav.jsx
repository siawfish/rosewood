import React from 'react'
import { Navbar, Button } from 'react-bootstrap';

export default function Nav() {
    return (
        <Navbar>
            <Navbar.Brand href="#home">Rosewood</Navbar.Brand>
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
                <Button  variant="outline-secondary">
                    Login
                </Button>
            </Navbar.Collapse>
        </Navbar>
    )
}
