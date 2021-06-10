import React from 'react'
import { Container } from 'react-bootstrap'
import Message from './Message'
import { useDispatch, useSelector } from 'react-redux'
import Feedback from './Feedback'
import { AiOutlineStop } from 'react-icons/ai'
import Pagination from "react-js-pagination"
import { API } from '../utils/config'
import { setMessages } from '../redux/messagesStore/messagesStore'

export default function Users() {
    const dispatch = useDispatch()
    const { message } = useSelector(state => state.messages)
    const [activePage, setActivePage] = React.useState(1)

    React.useEffect(()=>{
        const getMessages = async ()=> {
            try {
                const { ok, data, problem } = await API.get('/messages')
                if(ok){
                    dispatch(setMessages(data))
                } else {
                    alert(data?.error??problem)
                }
            } catch (error) {
                alert(error.message)
            }
        }
        getMessages()
    },[dispatch])

    const handlePageChange = (pageNumber)=> {
        setActivePage(pageNumber)
    }

    const indexOfLastPost = activePage*10
    const indexOfFirstPost = indexOfLastPost-10
    const currentList = message?.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <Container className="conWrapper">
            {
                message?.length<1 ?
                <Feedback
                    messageStyle={{color:"#f0f0f0"}}
                    message="No messages yet"
                    icon={<AiOutlineStop />}
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
                        totalItemsCount={message?.length}
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
