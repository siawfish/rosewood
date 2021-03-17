import React from 'react'
import { Button } from 'react-bootstrap'
import address from '../assets/img/thumbContact.png'
import carousel from '../assets/img/thumbCarousel.png'

export default function FeatureCard({
    feature,
    onButtonPress
}) {
    let thumbnail = null
    switch (feature) {
        case "address":
            thumbnail=address
            break;
        case "carousel":
            thumbnail=carousel
            break;
        default:
        break;
    }
    return (
        <div className="featureCard">
            <img 
                src={thumbnail} 
                alt="" 
            />
            {
                feature==="address" &&
                <div className="info">
                    <h6>Address Details</h6>
                    <Button onClick={onButtonPress}>Edit Address</Button>
                </div>
            }
            {
                feature==="carousel" &&
                <div className="info">
                    <h6>Carousel Images</h6>
                    <Button onClick={onButtonPress}>Edit Carousel</Button>
                </div>
            }
        </div>
    )
}
