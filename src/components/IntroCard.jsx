import React from 'react'
import { Col, Card, Row } from "react-bootstrap";
import process from '../assets/img/process.jpeg'

export default function IntroCard({
    children,
    image=process,
    containerStyle,
    imageStyle
}) {
    return (
        <Row>
            <Col sm={12} lg={12}>
                <Card className="introCard">
                    <Card.Body style={containerStyle}>
                        <img style={imageStyle} alt="" src={image} />
                        <div className="introCardContent">
                            {children}
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}
