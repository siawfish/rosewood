import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import bg from '../assets/img/aboutBg.png'

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
                            Ea officia cillum laboris ex deserunt minim nisi velit cillum Lorem 
                            incididunt est. Ex nostrud ad fugiat consectetur cupidatat nulla 
                            elit cupidatat culpa dolor culpa amet. Ad nisi cupidatat non exercitation 
                            consequat mollit irure non nisi culpa labore. Consequat ipsum nulla tempor 
                            ipsum ut reprehenderit labore Lorem consequat ut. Culpa eu do in esse occaecat 
                            et laborum sunt veniam. Eiusmod id nostrud ex laborum laboris aliqua.
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
