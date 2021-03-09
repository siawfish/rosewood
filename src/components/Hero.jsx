import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import GroupButton from './GroupButton'
import ButtonDropdown from './ButtonDropdown'
import Slider from "react-slick";
import cr1 from '../assets/img/cr1.jpg'
import cr2 from '../assets/img/cr2.jpg'
import cr3 from '../assets/img/cr3.jpg'
import cr4 from '../assets/img/cr4.jpg'
import cr5 from '../assets/img/cr5.jpg'
import cr6 from '../assets/img/cr6.jpg'

export default function Hero() {
    const options = [
        {
            name:"Buy",
            value:"buy"
        },
        {
            name:"Rent",
            value:"rent"
        }
    ]
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    }
    return (
        <Container fluid className="hero">
             <Slider {...settings}>
                <div>
                    <img src={cr1} alt="" />
                </div>
                <div>
                    <img src={cr2} alt="" />
                </div>
                <div>
                    <img src={cr3} alt="" />
                </div>
                <div>
                    <img src={cr4} alt="" />
                </div>
                <div>
                    <img src={cr5} alt="" />
                </div>
                <div>
                    <img src={cr6} alt="" />
                </div>
            </Slider>
            <div className="heroContentWrapper">
                <Row>
                    <Col sm={12} lg={12}>
                        <div className="heroContent">
                            <div className="biggerText">
                                Properties to buy/rent in <span className="veryBold">Accra</span>
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
            </div>
        </Container>
    )
}
