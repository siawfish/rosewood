import React from 'react'
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap'
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa'
import { IoMdEye } from 'react-icons/io'
import Thumbnail from './Thumbnail'
import dayjs from 'dayjs'
import numeral from 'numeral'

export default function List({
    list
}) {
    const amenitiesArr = list?.amenities.split(',')
    return (
        <Row>
            <Col style={{padding:0}} sm={12}>
                <Accordion>
                    <Card className="list" style={{marginBottom:10}}>
                        <Card.Header  className="inventory" eventKey="0">
                            <div className="left">
                                <img src={list?.images[0]} alt="" />
                                <div className="info">
                                    <div className="name">
                                        {list?.title}
                                    </div>
                                    <div className="desc">
                                       {list?.desc}
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <div className="price">
                                    <small>$</small><h3>{numeral(list?.price).format('0,0')}</h3><small>{list?.type==="rent" && '/m'}</small>
                                </div>
                                <div className="actionButtons">
                                    <Accordion.Toggle className="customBtn" eventKey="0">
                                        <button>
                                            <IoMdEye />
                                        </button>
                                    </Accordion.Toggle>
                                    <button>
                                        <FaRegEdit />
                                    </button>
                                    <button>
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </div>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Row>
                                    <Col sm={12} lg={5}>
                                        <Container className="thumbnails">
                                            <div className="details">
                                                Images:
                                            </div>
                                            <Row>
                                                {
                                                    list?.images.map((image,i)=>{
                                                        return (
                                                            <Thumbnail 
                                                                key={"image-"+i}
                                                                img={image}  
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Container>
                                    </Col>
                                    <Col sm={12} lg={7}>
                                        <Container>
                                            <Row>
                                                <Col sm={12} lg={4}>
                                                    <div className="details">
                                                        Bedrooms: <br/><span>{list?.bedrooms}</span>
                                                    </div>
                                                </Col>
                                                <Col sm={12} lg={4}>
                                                    <div className="details">
                                                        Bathrooms: <br/><span>{list?.bathrooms}</span>
                                                    </div>
                                                </Col>
                                                <Col sm={12} lg={4}>
                                                    <div className="details">
                                                        Parking space: <br/><span>{list?.parkingSpace}</span>
                                                    </div>
                                                </Col>
                                                <Col sm={12} lg={4}>
                                                    <div className="details">
                                                        Featured listing: <br/><span>{list?.featuredListing}</span>
                                                    </div>
                                                </Col>
                                                <Col sm={12} lg={4}>
                                                    <div className="details">
                                                        Developer: <br/><span>{list?.developer}</span>
                                                    </div>
                                                </Col>
                                                <Col sm={12} lg={4}>
                                                    <div className="details">
                                                        Type: <br/><span>For {list?.type}</span>
                                                    </div>
                                                </Col>
                                                <Col sm={12} lg={4}>
                                                    <div className="details">
                                                        location: <br/><span>{list?.location}</span>
                                                    </div>
                                                </Col>
                                                <Col sm={12} lg={4}>
                                                    <div className="details">
                                                        category: <br/><span>{list?.category}</span>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="details">
                                                        Added on: <br/><span>{dayjs.unix(list?.createdAt?.seconds).format('DD/MM/YYYY')}</span>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="details">
                                                        Updated on: <br/><span>{dayjs.unix(list?.updatedAt?.seconds).format('DD/MM/YYYY')}</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className="details">Amenities</div>
                                            <Row>
                                                {
                                                    amenitiesArr?.map((amenity, i)=>{
                                                        return (
                                                            <Col key={"amenity-"+i} lg={4}>
                                                                <div className="details">
                                                                    <span>{amenity}</span>
                                                                </div>
                                                            </Col>
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Container>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Col>
        </Row>
    )
}
