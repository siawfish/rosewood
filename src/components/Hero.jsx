import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import GroupButton from './GroupButton'
import ButtonDropdown from './ButtonDropdown'

export default function Hero() {
    const options = [
        {
            name:"Buy",
            value:"buy"
        },
        {
            name:"Rent",
            value:"rent"
        },
        {
            name:"Co-living",
            value:"coLiving"
        }
    ]
    return (
        <Container fluid className="hero">
            <Row>
                <Col lg={6}>
                    <div className="heroContent">
                        <div className="biggerText">
                            Properties to buy in <span className="veryBold">Accra</span>
                        </div>
                        <GroupButton 
                            options={options}
                        />
                        <div className="searchForm">
                            <ButtonDropdown />
                            <input placeholder="search for locality, landmark or project" />
                            <Button className="searchButton">&#128269; Search</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
