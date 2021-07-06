import React from 'react'
import { Container, Row } from "react-bootstrap";
import Item from './Item'

export default function Features({
  featuredListings
}) {
  return (
      <Container className="features">
          <div className="logo">Featured Properties</div>
          <small>The most rewarding destination for all home/commercial related services</small>
          <Row>
              {
                featuredListings?.map((pro, i)=>{
                  if(i<4){
                    return(
                      <Item 
                        key={i} 
                        lg={3}
                        property={pro} 
                      />
                    )
                  }
                })
              }
          </Row>
      </Container>
  )
}
