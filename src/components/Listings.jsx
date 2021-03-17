import React from 'react'
import { Container } from 'react-bootstrap'
import List from './List'
import { listings } from '../utils/data'

export default function Listings() {
    return (
        <Container className="conWrapper">
            {
                listings.map((list,i)=>{
                    return (
                        <List 
                            key={"list-"+i} 
                            list={list} 
                        />
                    )
                })
            }
        </Container>
    )
}
