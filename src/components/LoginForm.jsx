import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

export default function LoginForm() {
    const location = useLocation()
    const { pathname } = location
    return (
        <Row>
            <Col md={{ span: 4, offset: 4 }}>
                <div style={pathname.match('/admin')&&{color:"#f0f0f0"}} className="form">
                    
                    <div className="bolderText">Welcome, login into {pathname.match('/admin')?"admin portal" : "your account"}</div>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control style={pathname.match('/admin')&&{backgroundColor:"#333", color:"#fff"}} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control style={pathname.match('/admin')&&{backgroundColor:"#333", color:"#fff"}} type="password" placeholder="Password" />
                    </Form.Group>

                    <Button block variant="primary" type="submit">
                        Login
                    </Button>
                    <small>{pathname.match('/admin')?"Are you an employee":"Don't have an account"}? <Link to={pathname.match('/admin')?"/admin/register":"/register"}>{pathname.match('/admin')?"Create an admin account":"Register here"}.</Link></small>
                </div>
            </Col>
        </Row>
    )
}
