import React from 'react'
import { Container, Row } from 'react-bootstrap'
import IntroCard from './IntroCard'

export default function Intro() {
    return (
        <Container className="intro" fluid>
            <div className="logo">Rosewood</div>
            <small>The most rewarding destination for all home/commercial related services</small>
            <Row>
                <IntroCard search />
                <IntroCard book />
                <IntroCard verify />
                <IntroCard sale />
            </Row>
        </Container>
    )
}
