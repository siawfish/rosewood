import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import bg from '../../assets/img/aboutBg.png'

export default function Aboutus() {
    return (
        <div className="about">
            <Row>
                <Col>
                    <div className="aboutContent">
                        <small>WHAT DRIVES US</small>
                        <div className="biggerText">
                            Making your home search less painful as possible
                        </div>
                        <p>
                            Simple, straightforward, professional. We understand the process of buying or selling can be  stressful, 
                            so we work closely with our clients to make it as smooth as possible. We guide you through it all until 
                            it is completed. We believe this is about you, so we listen to your needs and tailor make a service that’s 
                            unique to every individual
                        </p>
                        <div className="bgWrapper">
                            <img src={bg} alt=""/>
                        </div>
                    </div>
                </Col>
            </Row>
            <Container className="aboutUsExtra">
                <Row>
                    <Col>
                        <div className="biggerText">
                            Problems we aim to solve
                        </div>
                    </Col>
                    <Col>
                        <div className="biggerText">
                            Our solutions
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <small>
                                Accra has become a home for millions of people from all over the world, and every year there is more and 
                                more diasporas and foreigners coming to Ghana to make a home for themselves. Most of these people do not 
                                know where to start so here at Rosewood we simplify everything for you by guiding you through the process 
                                from finding a home, an office, acquiring Land and documentation.
                            </small>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <small>
                                If it’s anything to do with Real Estate, we have the answer. Our advise to you is to inform us 
                                of every little thing to find the right solution for you.
                            </small>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
