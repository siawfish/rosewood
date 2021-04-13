import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Item from '../../components/Item'
import Map from '../../components/Map'
import PropertySearch from '../../components/PropertySearch'
import { useSelector } from 'react-redux'

export default function Properties() {
    const { listings } = useSelector(state => state.listings)
    return (
        <Container className="properties" fluid>
            <Row>
                <Col className="propertiesCol" style={{padding:0}} sm={12} lg={5}>
                    <div className="listContainer">
                        <PropertySearch />
                        <div className="listItemsContainer">
                            {
                                listings.map((item, i)=>{
                                    return (
                                        <Item 
                                            key={i}
                                            property={item}
                                            lg={6}
                                            seeMore={false}
                                            containerStyle={{
                                                padding:5
                                            }}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </Col>
                <Col style={{paddingRight:0}} sm={0} lg={7}>
                    <Map places={listings} />
                </Col>
            </Row>
        </Container>
    )
}
