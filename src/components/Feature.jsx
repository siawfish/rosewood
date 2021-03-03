import React from 'react'
import { Col, Card, Button } from "react-bootstrap";

export default function Feature({
    property
}) {
    return (
        <Col sm={12} lg={3}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={property.img} />
                <Card.Body>
                <Card.Title>&#8373; {property.price}</Card.Title>
                <Card.Text>
                    {property.caption}
                </Card.Text>
                <Button variant="primary">See more</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
