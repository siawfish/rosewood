import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import { carouselData, settings } from '../utils/data'

export default function Hero() {    
    return (
        <Container fluid className="hero">
            <Slider {...settings}>
                {
                    carouselData.map((image,i)=>{
                        return (
                            <div key={`key-${i}`}>
                                <img src={image} alt="" />
                            </div>
                        )
                    })
                }
            </Slider>
        </Container>
    )
}
