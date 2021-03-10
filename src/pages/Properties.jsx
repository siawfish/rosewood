import React from 'react'
import { Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap'
import Item from '../components/Item'
import Map from '../components/Map'
import PropertySearch from '../components/PropertySearch'
import hse1 from '../assets/img/hse1.jpg';
import hse2 from '../assets/img/hse2.jpg';
import hse3 from '../assets/img/hse3.jpg';
import hse4 from '../assets/img/hse4.jpg';
import hse5 from '../assets/img/hse5.jpg';

export default function Properties() {
    const property = [
        {
            caption:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            price:"500,000",
            img:hse1,
            title:"This is the title",
            lat:5.6731,
            lng:-0.1664
        },
        {
            caption:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            price:"250,000",
            img:hse2,
            title:"This is the title",
            lat:5.7542,
            lng:-0.2034
        },
        {
            caption:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            price:"570,000",
            img:hse3,
            title:"This is the title",
            lat:5.7348,
            lng:-0.0302
        },
        {
            caption:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            price:"100,000",
            img:hse5,
            title:"This is the title",
            lat:5.5570,
            lng:-0.1763
        },
        {
            caption:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            price:"800,000",
            img:hse4,
            title:"This is the title",
            lat:5.5344,
            lng:-0.4253
        }
    ]
    return (
        <Container className="properties" fluid>
            <Row>
                <Col className="propertiesCol" style={{padding:0}} sm={12} lg={5}>
                    <div className="listContainer">
                        <PropertySearch />
                        <div className="listItemsContainer">
                            {
                                property.map(item=>{
                                    return (
                                        <Item 
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
                    <Map places={property} />
                </Col>
            </Row>
        </Container>
    )
}
