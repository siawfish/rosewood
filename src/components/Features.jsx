import React from 'react'
import { Container, Row } from "react-bootstrap";
import hse1 from '../assets/img/hse1.jpg';
import hse2 from '../assets/img/hse2.jpg';
import hse3 from '../assets/img/hse3.jpg';
// import hse4 from '../assets/img/hse4.jpg';
import hse5 from '../assets/img/hse5.jpg';
import Feature from './Feature'

const property = [
    {
      caption:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      price:"500,000",
      img:hse1
    },
    {
      caption:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      price:"250,000",
      img:hse2
    },
    {
      caption:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      price:"570,000",
      img:hse3
    },
    {
      caption:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      price:"100,000",
      img:hse5
    }
    // {
    //   caption:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    //   price:"800,000",
    //   img:hse5
    // }
]

export default function Features() {
    return (
        <Container fluid className="features">
            <div className="bolderText">Featured Properties</div>
            <small>The most rewarding destination for all home/commercial related services</small>
            <Row>
                {
                    property.map(pro=>{
                        return(
                            <Feature property={pro} />
                        )
                    })
                }
            </Row>
        </Container>
    )
}
