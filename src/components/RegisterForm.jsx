import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

export default function RegisterForm() {
    const location = useLocation()
    const { pathname } = location
    return (
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
                <div style={pathname.match('/admin')&&{color:"#f0f0f0"}} className="registerForm">
                    
                    <div className="bolderText">Create {pathname.match('/admin')?"an admin account":"a free account"}</div>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control style={pathname.match('/admin')&&{backgroundColor:"#333", color:"#fff"}} type="text" placeholder="John" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control style={pathname.match('/admin')&&{backgroundColor:"#333", color:"#fff"}} type="text" placeholder="Doe" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control style={pathname.match('/admin')&&{backgroundColor:"#333", color:"#fff"}} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control style={pathname.match('/admin')&&{backgroundColor:"#333", color:"#fff"}} type="password" placeholder="Password" />
                        </Form.Group>
                    </Form.Row>

                    <Button block variant="primary" type="submit">
                        Submit
                    </Button>
                    <small>Already have an account? <Link to="/admin">Login here.</Link></small>
                </div>
            </Col>
        </Row>
    )
}
