import React from 'react'
import { Row, Col, Accordion, Card } from 'react-bootstrap'
import { FaUser, FaTrashAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { IoMdEye } from 'react-icons/io'
import dayjs from 'dayjs'

export default function User({
    message
}) {
    return (
        <Row>
            <Col style={{padding:0}} sm={12}>
                <Accordion>
                    <Card className="list" style={{marginBottom:10}}>
                        <Card.Header  className="user">
                            <div style={{color:message.read?"#333":undefined}} className="block">
                                <FaUser />
                                <div className="name">
                                    {message?.sender}
                                </div>
                            </div>
                            <div className="block">
                                <Accordion.Toggle className="customBtn" eventKey="0">
                                    <button>
                                        <IoMdEye />
                                    </button>
                                </Accordion.Toggle>
                                <button>
                                    {
                                        message.read ? 
                                        <MdEmail /> :
                                        <HiOutlineMailOpen />    
                                    }
                                </button>
                                <button>
                                    <FaTrashAlt />
                                </button>
                            </div>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Row>
                                    <Col lg={4}>
                                        <div className="details">
                                            email: <br/><span className="email">{message?.email}</span>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="details">
                                            phone: <br/><span>{message?.phone}</span>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="details">
                                            Sent At: <br/><span>{dayjs(message?.sentAt).format('DD/MM/YYYY')}</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="details">
                                            message: <br/><span>{message?.message}</span>
                                        </div>
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
