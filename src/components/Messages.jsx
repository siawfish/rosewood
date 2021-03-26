import React from 'react'
import { Container } from 'react-bootstrap'
import Message from './Message'
import { useSelector } from 'react-redux'

export default function Users() {
    const { message } = useSelector(state => state.messages)
    console.log("messages>>>>>",message);
    return (
        <Container className="conWrapper">
            {
                message?.map((message,i)=>{
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
