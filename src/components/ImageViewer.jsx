import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { baseUrl } from '../utils/data'

export default function ImageViewer({
    property
}) {
    return (
        <Container fluid className="listing">
            <Row>
                <Col style={{padding:0}} lg={10}>
                    <img className="imageView" src={baseUrl+"/listings/image/"+property?.images[0]} alt="" />
                </Col>
                <Col lg={2}>
                    <Container className="thumbnails">
                        <Row>
                            {
                                property?.images.map((pro, i)=>{
                                    return (
                                        <Col key={"img-"+i} style={{padding:0}} lg={12}>
                                            <img src={baseUrl+"/listings/image/"+pro} alt="" />
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
