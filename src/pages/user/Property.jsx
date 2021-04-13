import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Map from '../../components/Map'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../utils/data'

export default function Property() {
    const { listings } = useSelector(state=>state.listings)
    const { id } = useParams()
    const propertyArr = listings.filter(pro=>{
        return pro.id === id
    })
    const property = propertyArr[0]
    return (
        <Container className="property" fluid>
            <Row>
                <Col lg={10}>
                    <Container className="listing">
                        <Row>
                            <Col style={{padding:0}}>
                                {/* <Text 
                                    text="East Cantoments, Accra, Ghana"
                                    style={{color:"#777", marginBottom:20}}
                                /> */}
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{padding:0}} lg={10}>
                                <img src={baseUrl+"/listings/image/"+property?.images[0]} alt="" />
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
                </Col>
                <Col style={{padding:0}} lg={2}>
                   <Map />
                </Col>
            </Row>
        </Container>
    )
}
