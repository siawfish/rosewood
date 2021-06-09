import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Dashcard from './Dashcard'
import { useSelector } from 'react-redux'

export default function Dash() {
    const { listings } = useSelector(state=>state.listings)
    const { message } = useSelector(state => state.messages)
    const { interests } = useSelector(state => state.interests)

    return (
        <Container>
            <Row>
                <Col lg={4}>
                    <Dashcard 
                        type="settings"
                        containerStyle={{
                            backgroundColor:"#000",
                        }}
                        iconStyle={{
                            color:"#333",
                        }}
                        titleStyle={{
                            color:"#f0f0f0"
                        }}
                        statsContainerStyle={{
                            backgroundColor:"#5A995A63",
                            color:"#f0f0f0"
                        }}
                    />
                </Col>
                <Col lg={4}>
                    <Dashcard 
                        stats={listings?.length}
                        type="inventory"
                        // stats={products?.products?.length}
                        containerStyle={{
                            backgroundColor:"#000",
                        }}
                        iconStyle={{
                            color:"#333"
                        }}
                        titleStyle={{
                            color:"#f0f0f0"
                        }}
                        statsContainerStyle={{
                            backgroundColor:"#5A995A63",
                            color:"#f0f0f0"
                        }}
                    />
                </Col>
                <Col lg={4}>
                    <Dashcard 
                        type="interests"
                        stats={interests?.length}
                        containerStyle={{
                            backgroundColor:"#000",
                        }}
                        iconStyle={{
                            color:"#333"
                        }}
                        titleStyle={{
                            color:"#f0f0f0"
                        }}
                        statsContainerStyle={{
                            backgroundColor:"#5A995A63",
                            color:"#f0f0f0"
                        }}
                    />
                </Col>
                <Col lg={4}>
                    <Dashcard 
                        type="messages"
                        stats={message?.length}
                        containerStyle={{
                            backgroundColor:"#000",
                        }}
                        iconStyle={{
                            color:"#333"
                        }}
                        titleStyle={{
                            color:"#f0f0f0"
                        }}
                        statsContainerStyle={{
                            backgroundColor:"#5A995A63",
                            color:"#f0f0f0"
                        }}
                    />
                </Col>
            </Row>
        </Container>
    )
}
