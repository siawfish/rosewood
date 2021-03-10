import React from 'react'
import { Col, Card, Button } from "react-bootstrap";
import { BiBed, BiCar } from 'react-icons/bi'
import { FaShower } from 'react-icons/fa'

export default function Item({
    property,
    containerStyle,
    seeMore=true,
    sm=12,
    lg=3
}) {
    return (
        <Col style={containerStyle} sm={sm} lg={lg}>
            <Card className="item">
                <Card.Img variant="top" src={property?.img} />
                <Card.Body>
                <div className="priceRow">
                    <Card.Title>&#8373; {property?.price}</Card.Title>
                    <div className="statsContainer">
                        <div className="stats">
                            <span><BiBed /></span> 3
                        </div>
                        <div className="stats">
                            <span><FaShower /></span> 3
                        </div>
                        <div className="stats">
                            <span><BiCar /></span> 3
                        </div>
                    </div>
                </div>
                <Card.Text className="title">
                    {property?.title}
                </Card.Text>
                <Card.Text>
                    {property?.caption}
                </Card.Text>
                {
                    seeMore &&
                    <Button variant="primary">See more</Button>
                }
                </Card.Body>
            </Card>
        </Col>
    )
}
