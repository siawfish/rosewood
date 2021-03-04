import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <Container>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <div className="form">
                        
                        <div className="bolderText">Welcome, login into your account</div>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button block variant="primary" type="submit">
                            Login
                        </Button>
                        <small>Don't have an account? <Link to="/register">Register here.</Link></small>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
