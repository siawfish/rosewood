import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Feedback from './Feedback'
import { AiOutlineStop } from 'react-icons/ai'
import Pagination from "react-js-pagination"
import { API } from '../utils/config'
import { setInterests } from '../redux/interestsStore/interestsStore'
import Interest from './Interest'

export default function Interests() {
    const dispatch = useDispatch()
    const { interests } = useSelector(state=>state.interests)
    const [activePage, setActivePage] = React.useState(1)

    React.useEffect(()=>{
        const getInterests = async ()=> {
            try {
                const { ok, data, problem } = await API.get('/interests')
                if(ok){
                    dispatch(setInterests(data.reverse()))
                } else {
                    alert(data?.error??problem)
                }
            } catch (error) {
                alert(error.message)
            }
        }
        getInterests()
    },[dispatch])

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
                    <Row>
                        {
                            currentList.map((interest,i)=>{
                                return (
                                    <Col lg={6}>
                                        <Interest interest={interest} />
                                    </Col>
                                )
                            })
                        }
                    </Row>
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
