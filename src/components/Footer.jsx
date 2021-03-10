import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa'

export default function Footer() {
    return (
        <Container fluid className="footer">
            <Container fluid className="footerContainer">
                <Row>
                    <Col lg={5}>
                        <div className="logo">Rosewood</div>
                        <p>
                            Quis dolor laboris sunt ex excepteur laborum elit. Aliquip voluptate dolor officia amet sunt aliqua. 
                            Ex minim cupidatat nulla amet mollit sit excepteur aute consequat cillum. Minim do reprehenderit 
                        </p>
                    </Col>
                    <Col lg={2}>
                        <div className="heading">Company</div>
                        <ul>
                            <li>About design</li>
                            <li>Contact</li>
                            <li>Career</li>
                            <li>Blog</li>
                        </ul>
                    </Col>
                    <Col lg={2}>
                        <div className="heading">About</div>
                        <ul>
                            <li>About Anyplace</li>
                            <li>Contact</li>
                            <li>Career</li>
                            <li>Blog</li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <div className="heading">Support</div>
                        <ul>
                            <li>FAQ</li>
                            <li>Group Booking</li>
                            <li>City Guide</li>
                            <li>Cancellation Option</li>
                        </ul>
                    </Col>
                </Row>
                <Row style={{marginTop:"5%",paddingBottom:"2%"}}>
                    <Col>
                        <small>&#x000A9; 2020 Rosewood</small>
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
