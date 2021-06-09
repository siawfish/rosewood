import React from 'react'
import { Container } from 'react-bootstrap'
import Message from './Message'
import { useSelector } from 'react-redux'
import Feedback from './Feedback'
import { FcCancel } from 'react-icons/fc'
import Pagination from "react-js-pagination"

export default function Users() {
    const { message } = useSelector(state => state.messages)
    const [activePage, setActivePage] = React.useState(1)

    const handlePageChange = (pageNumber)=> {
        setActivePage(pageNumber)
    }

    const indexOfLastPost = activePage*10
    const indexOfFirstPost = indexOfLastPost-10
    const currentList = message.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <Container className="conWrapper">
            {
                message?.length<1 ?
                <Feedback
                    messageStyle={{color:"#f0f0f0"}}
                    message="No messages yet"
                    icon={<FcCancel />}
                /> :
                <>
                    {
                        currentList?.map((message,i)=>{
                            return (
                                <Message 
                                    key={"msg-"+i}
                                    message={message}
                                />
                            )
                        })
                    }
                    <Pagination
                        activePage={activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={message.length}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                        innerClass="containerStyle"
                        activeLinkClass="activeLinkClass"
                    />
                </>
            }
        </Container>
    )
}
