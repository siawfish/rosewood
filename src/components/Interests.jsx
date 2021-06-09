import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Feedback from './Feedback'
import User from './User'
import { AiOutlineStop } from 'react-icons/ai'
import Pagination from "react-js-pagination"

export default function Users() {
    const { interests } = useSelector(state=>state.interests)
    const [activePage, setActivePage] = React.useState(1)

    const handlePageChange = (pageNumber)=> {
        setActivePage(pageNumber)
    }

    const indexOfLastPost = activePage*10
    const indexOfFirstPost = indexOfLastPost-10
    const currentList = interests.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <Container className="conWrapper">
            {
                interests?.length < 1 ?
                <Feedback 
                    messageStyle={{color:"#f0f0f0"}} 
                    icon={<AiOutlineStop />} 
                    message="Sorry no users have expressed interest yet." 
                /> :
                <>
                    {
                        currentList.map((user,i)=>{
                            return (
                                <User 
                                    key={"user-"+i}
                                    user={user}
                                />
                            )
                        })
                    }
                    <Pagination
                        activePage={activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={interests.length}
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
