import React from 'react'
import { Col, Card, Button } from "react-bootstrap";
import { BiBed, BiCar } from 'react-icons/bi'
import { FaShower } from 'react-icons/fa'
import numeral from 'numeral'
import { useHistory } from 'react-router-dom'
import SaleType from './SaleType';

export default function Item({
    property,
    containerStyle,
    seeMore=true,
    sm=12,
    lg=3
}) {
    const history = useHistory()

    const gotoDetails = ()=> {
        history.push('/property/'+property.id)
    }
    
    return (
        <Col style={containerStyle} sm={sm} lg={lg}>
            <Card onClick={gotoDetails} className="item">
                <div style={{position:"absolute",top:10,left:10}}>
                    <SaleType type={property?.type} />
                </div>
                <Card.Img variant="top" src={property?.images[0]} />
                <Card.Body>
                <div className="priceRow">
                    <Card.Title>&#8373; {numeral(property?.price).format('0,0')}</Card.Title>
                    <div className="statsContainer">
                        <div className="stats">
                            <span><BiBed /></span> {property?.bedrooms}
                        </div>
                        <div className="stats">
                            <span><FaShower /></span> {property?.bathrooms}
                        </div>
                        <div className="stats">
                            <span><BiCar /></span> {property?.parkingSpace}
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
