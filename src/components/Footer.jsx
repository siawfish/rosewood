import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/img/logo.png'

export default function Footer() {
    const location = useLocation()
    const { pathname } = location

    return (
        <Container style={pathname.match('/admin')&&{backgroundColor:"#000", color:"#f0f0f0"}} fluid className="footer">
            <Container className="footerContainer">
                <Row>
                    <Col lg={5}>
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <p>
                            Simple, straightforward, professional. We understand the process of buying or selling can be  
                            stressful, so we work closely with our clients to make it as smooth as possible. 
                            We guide you through it all until it is completed. We believe this is about you, so we 
                            listen to your needs and tailor make a service that’s unique to every individual
                        </p>
                    </Col>
                    <Col lg={2}>
                        <div className="heading">Company</div>
                        <ul>
                            <li><Link to="/admin">Admin</Link></li>
                            <li><Link to="/contactus">Contact</Link></li>
                        </ul>
                    </Col>
                    <Col lg={2}>
                        <div className="heading">About</div>
                        <ul>
                            <li><Link to="/contactus">Contact</Link></li>
                            <li><Link to="/aboutus">About us</Link></li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <div className="heading">Support</div>
                        <ul>
                            <li><Link to="/contactus">Contact</Link></li>
                            <li><Link to="/guide-to-investing">Guide to investing</Link></li>
                        </ul>
                    </Col>
                </Row>
                <Row style={{marginTop:"5%",paddingBottom:"2%"}}>
                    <Col>
                        <small>&#x000A9; {new Date().getFullYear()} Rosewood</small>
                    </Col>
                    <Col>
                        <div className="socialWrapper">
                            <div className="icon"><FaFacebookSquare /></div>
                            <div className="icon"><FaTwitterSquare /></div>
                            <div className="icon"><FaInstagramSquare /></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
