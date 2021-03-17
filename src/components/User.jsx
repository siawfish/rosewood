import React from 'react'
import { Row, Col, Accordion, Card } from 'react-bootstrap'
import { FaUser,
    FaUserCheck,
    FaTrashAlt } from 'react-icons/fa'
import { IoMdEye } from 'react-icons/io'
import dayjs from 'dayjs'

export default function User({
    user
}) {
    return (
        <Row>
            <Col style={{padding:0}} sm={12}>
                <Accordion>
                    <Card className="list" style={{marginBottom:10}}>
                        <Card.Header  className="user">
                            <div className="block">
                                <FaUser />
                                <div className="name">
                                    {user?.name}
                                </div>
                            </div>
                            <div className="block">
                                <Accordion.Toggle className="customBtn" eventKey="0">
                                    <button>
                                        <IoMdEye />
                                    </button>
                                </Accordion.Toggle>
                                <button>
                                    <FaUserCheck />
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
                                            email: <br/><span className="email">{user?.email}</span>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="details">
                                            phone: <br/><span>{user?.phone}</span>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="details">
                                            location: <br/><span>{user?.location||"Not set"}</span>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="details">
                                            verified: <br/><span>{user?.isVerified?"Yes":"No"}</span>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="details">
                                            created At: <br/><span>{dayjs(user?.createdAt).format('DD/MM/YYYY')}</span>
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
