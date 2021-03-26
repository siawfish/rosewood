import React from 'react'
import { Container } from 'react-bootstrap'
import Message from './Message'
import { useSelector } from 'react-redux'
import Feedback from './Feedback'
import { FcCancel } from 'react-icons/fc'

export default function Users() {
    const { message } = useSelector(state => state.messages)
    return (
        <Container className="conWrapper">
            {
                !message.length<1 ?
                message?.map((message,i)=>{
                    return (
                        <Message 
                            key={"msg-"+i}
                            message={message}
                        />
                    )
                }) :
                <Feedback
                    messageStyle={{color:"#f0f0f0"}}
                    message="No messages yet"
                    icon={<FcCancel />}
                />
            }
        </Container>
    )
}
