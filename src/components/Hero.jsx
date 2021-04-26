import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ButtonDropdown from './ButtonDropdown'
import Slider from "react-slick";
import cr1 from '../assets/img/bg1.jpeg'
import cr2 from '../assets/img/bg2.jpeg'
import cr3 from '../assets/img/bg3.jpeg'
import cr4 from '../assets/img/bg4.jpeg'
import cr5 from '../assets/img/bg5.jpeg'
import cr6 from '../assets/img/bg6.jpeg'
import cr7 from '../assets/img/bg7.jpeg'
import cr8 from '../assets/img/bg8.jpeg'
import cr9 from '../assets/img/bg9.jpeg'


export default function Hero() {

    const images = [
        cr1,
        cr2,
        cr3,
        cr4,
        cr5,
        cr6,
        cr7,
        cr8,
        cr9
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
                 {
                     images.map((image,i)=>{
                         return (
                            <div>
                                <img key={`key-${i}`} src={image} alt="" />
                            </div>
                         )
                     })
                 }
            </Slider>
            <div className="heroContentWrapper">
                <Row>
                    <Col sm={12} lg={12}>
                        <div className="heroContent">
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
