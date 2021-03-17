import React from 'react'
import { Container } from 'react-bootstrap'
import User from './User'
import { users } from '../utils/data'

export default function Users() {
    return (
        <Container className="conWrapper">
            {
                users.map((user,i)=>{
                    return (
                        <User 
                            key={"user-"+i}
                            user={user}
                        />
                    )
                })
            }
        </Container>
    )
}
