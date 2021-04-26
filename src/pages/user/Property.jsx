import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Map from '../../components/Map'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ImageViewer from '../../components/ImageViewer'
import { BiBed, BiCar } from 'react-icons/bi'
import { FaShower } from 'react-icons/fa'
import SaleType from '../../components/SaleType'
import numeral from 'numeral'

export default function Property() {
    const { listings } = useSelector(state=>state.listings)
    const { id } = useParams()
    const propertyArr = listings.filter(pro=>{
        return pro.id === id
    })
    const property = propertyArr[0]
    const amenitiesArr = property.amenities.split(', ')
    return (
        <Container className="property" fluid>
            <Row>
                <Col lg={10}>
                    <ImageViewer property={property} />
                </Col>
                <Col style={{padding:0}} lg={2}>
                    <Map 
                        places={[property]} 
                        defaultCenter={property?.cordinates} 
                        containerStyle={{height:670}} 
                    />
                </Col>
            </Row>
            <Row>
                <Container className="propertyInfo">
                    <Row>
                        <Col lg={8}>
                            <div className="infoSection">
                                <div className="titleSection">
                                    <div className="title">{`${property.title.toLowerCase()} by ${property.developer}`}</div>
                                    <div className="statsContainer">
                                        <div className="statsWrapper">
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

                                        <SaleType type={property?.type} />
                                    </div>
                                </div>
                            </div>
                            <div className="infoSection">
                                <div className="heading">Description</div>
                                <div className="desc">
                                    {property?.desc}
                                </div>
                            </div>
                            <div className="infoSection">
                                <div className="heading">Amenities</div>
                                <Row>
                                    {
                                        amenitiesArr.map((amenity,i)=>{
                                            return (
                                                <Col lg={3}>
                                                    <div key={`key-${i}`} className="desc">{amenity}</div>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </div>
                            <div className="infoSection">
                                <div className="heading">Location</div>
                                <div className="desc">{property?.location}</div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <Card className="priceCard">
                                <div className="title">Price</div>
                                <div className="amount">&#8373; {numeral(property?.price).format('0,0')}{property?.type==="rent"&&<small>/month</small>}</div>
                                <Button block>
                                    Register interest
                                </Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    )
}