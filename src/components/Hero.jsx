import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import { carouselData, mobileCarouselData, settings } from '../utils/data'
import { useMediaQuery } from 'react-responsive'
import { useHistory } from 'react-router';

export default function Hero() {
    const history = useHistory()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const gotoPromoProperty = ()=> {
        history.push('/property/HoNbbwQw22ZeFL5GI0Jb')
    }

    return (
        <Container fluid className="hero">
            <Slider {...settings}>
                {
                    isTabletOrMobile ?
                    mobileCarouselData.map((image,i)=>{
                        return (
                            <div onClick={gotoPromoProperty} key={`key-${i}`}>
                                <img src={image} alt="" />
                            </div>
                        )
                    }) :
                    carouselData.map((image,i)=>{
                        return (
                            <div onClick={gotoPromoProperty} key={`key-${i}`}>
                                <img src={image} alt="" />
                            </div>
                        )
                    })
                }
            </Slider>
            {
                !isTabletOrMobile && 
                <div className="heroContent">
                    <div>
                        Presents
                    </div>
                    <div className="heading">
                        PANORAMA RIVER VIEW VILLAS
                    </div>
                    <p>
                        Panorama Villas is a luxury complex in Akosombo that offers peace, tranquility and an uninterrupted panoramic view of the Volta River, it’s surrounding mountains and the lush green conservations suitable for relaxing, kayaking, boat riding and hiking.
                    </p>
                    <button onClick={gotoPromoProperty}>See more</button>
                </div>
            }
        </Container>
    )
}
