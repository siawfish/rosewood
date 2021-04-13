import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Dashcard from './Dashcard'

export default function Dash() {
    return (
        <Container>
            <Row>
                <Col lg={4}>
                    <Dashcard 
                        stats="30"
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
                        type="users"
                        // stats={customers?.customers?.length}
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
                        // stats={customers?.customers?.length}
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
