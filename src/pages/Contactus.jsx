import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa'

export default function Contactus() {
    return (
        <div className="contact">
            <Container className="contactCard">
                <Row>
                    <Col style={{paddingLeft:0}} lg={5}>
                        <div className="left">
                            <div className="biggerText">
                                Contact Information
                            </div>
                            <small>Kindly complete the form and our team will get back to you with 24 hours</small>
                            <div style={{marginTop:40}} className="listItem"><span><FaPhoneAlt /></span> +233 24 793 8888</div>
                            <div className="listItem"><span><MdEmail /></span> Info@rosewoodghana.com</div>
                            <div className="listItem"><span><MdLocationOn /></span> Suncity Apartments, Osu, Accra</div>
                            <div className="socialRow">
                                <div className="icon"><FaFacebookSquare /></div>
                                <div className="icon"><FaTwitterSquare /></div>
                                <div className="icon"><FaInstagramSquare /></div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="right">
                        <div className="title">Any questions or remarks? Just write us a message.</div>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" placeholder="John" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" placeholder="Doe" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="xyz@mail.com" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="number" placeholder="+233 050 000 0000" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Send message
                            </Button>
                        </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
