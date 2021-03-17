import React from 'react'
import { Container } from 'react-bootstrap'
import Message from './Message'
import { messages } from '../utils/data'

export default function Users() {
    return (
        <Container className="conWrapper">
            {
                messages.map((message,i)=>{
                    return (
                        <Message 
                            key={"msg-"+i}
                            message={message}
                        />
                    )
                })
            }
        </Container>
    )
}
