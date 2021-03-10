import React from 'react'
import { Container, Row } from "react-bootstrap";
import hse1 from '../assets/img/hse1.jpg';
import hse2 from '../assets/img/hse2.jpg';
import hse3 from '../assets/img/hse3.jpg';
import hse5 from '../assets/img/hse5.jpg';
import Item from './Item'

const property = [
    {
      caption:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      price:"500,000",
      img:hse1,
      title:"This is the title"
    },
    {
      caption:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      price:"250,000",
      img:hse2,
      title:"This is the title"
    },
    {
      caption:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      price:"570,000",
      img:hse3,
      title:"This is the title"
    },
    {
      caption:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      price:"100,000",
      img:hse5,
      title:"This is the title"
    }
]

export default function Features() {
    return (
        <Container fluid className="features">
            <div className="bolderText">Featured Properties</div>
            <small>The most rewarding destination for all home/commercial related services</small>
            <Row>
                {
                    property.map((pro, i)=>{
                        return(
                            <Item 
                              key={i} 
                              property={pro} 
                            />
                        )
                    })
                }
            </Row>
        </Container>
    )
}
