import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import loader from '../assets/img/loader.gif'

export default function Loading() {
    return (
        <Container className="loader">
            <Row className="justify-content-center">
                <Col>
                   <div className="loaderWrap">
                        <img src={loader} alt="" />
                   </div>
                </Col>
            </Row>
        </Container>
    )
}
