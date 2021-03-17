import React from 'react'
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap'
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa'
import { IoMdEye } from 'react-icons/io'
import Thumbnail from './Thumbnail'
import dayjs from 'dayjs'
// import { baseURL } from '../../assets/utils/constants'

export default function List({
    list
}) {
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
                                    <small>&#8373;</small><h3>{list?.price}</h3>
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
                                                        category: <br/><span className="email">{list?.category}</span>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="details">
                                                        Added on: <br/><span>{dayjs(list?.createdAt).format('DD/MM/YYYY')}</span>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="details">
                                                        Updated by: <br/><span>{list?.updatedBy.name}</span>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="details">
                                                        Updated on: <br/><span>{dayjs(list?.updatedAt).format('DD/MM/YYYY')}</span>
                                                    </div>
                                                </Col>
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
