import React from 'react'
import { Container } from 'react-bootstrap'
import IntroCard from './IntroCard'
import Processes from './Processes'
import funding from '../assets/img/funding.jpeg'
import CrowdFunding from './CrowdFunding'

export default function Intro() {
    return (
        <Container className="intro">
            <div className="logo">The Process</div>
            <small>The most rewarding destination for all home/commercial related services</small>
            <IntroCard 
                children={<Processes />} 
            />
            <div style={{marginTop:50}} className="logo">Crowd Funding</div>
            <small>Looking to invest in Ghana real estate?</small>
            <IntroCard 
                containerStyle={{flexDirection:"row-reverse"}} 
                imageStyle={{marginRight:0, marginLeft:10}}
                image={funding} 
                children={<CrowdFunding />} 
            />
        </Container>
    )
}
