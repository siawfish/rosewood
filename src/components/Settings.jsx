import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FeatureCard from './FeatureCard'
import FeatureDialog from './FeatureDialog'

export default function Settings() {
    const [show,setShow] = React.useState({
        status:false,
        type:null
    })
    return (
        <Container>
            <Row>
                <Col lg={6}>
                    <FeatureCard 
                        feature="address"
                        onButtonPress={()=>setShow({
                            status:true,
                            type:"address"
                        })}
                    />
                </Col>
                <Col lg={6}>
                    <FeatureCard 
                        feature="carousel"
                        onButtonPress={()=>setShow({
                            status:true,
                            type:"carousel"
                        })}
                    />
                </Col>
            </Row>
            <FeatureDialog 
                type={show.type}
                show={show.status}
                handleClose={()=>setShow({
                    status:false,
                    type:null
                })}
            />
        </Container>
    )
}
