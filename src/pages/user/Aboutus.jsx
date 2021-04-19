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
                        <div className="boldText">
                            Minim laborum nulla adipisicing irure ut anim cillum sunt anim esse.
                        </div>
                        <div>
                            <small>Irure anim nulla adipisicing sunt ea consequat pariatur incididunt veniam occaecat exercitation nulla in et.</small>
                        </div>
                    </Col>
                    <Col>
                        <div className="boldText">
                            Nostrud dolor aliqua duis nostrud.
                        </div>
                        <div>
                            <small>
                                Cupidatat irure enim deserunt consectetur dolore aliqua nisi reprehenderit esse enim. 
                                Sint ullamco excepteur fugiat commodo deserunt laborum anim culpa voluptate commodo 
                                laborum occaecat Lorem. Occaecat laboris magna nostrud consequat non.
                            </small>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
