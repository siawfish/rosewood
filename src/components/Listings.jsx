import React from 'react'
import { Container } from 'react-bootstrap'
import List from './List'
import { API } from '../utils/config'
import { useDispatch, useSelector } from 'react-redux'
import { setListings } from '../redux/listingsStore/listingsStore'
import Feedback from './Feedback'
import { FcCancel } from 'react-icons/fc'
import Pagination from "react-js-pagination"

export default function Listings() {
    const dispatch = useDispatch()
    const { listings } = useSelector(state => state.listings)
    const [activePage, setActivePage] = React.useState(1)

    React.useEffect(()=>{
        API.get('/listings')
        .then(res=>{
            if(res.ok){
                dispatch(setListings(res.data.listings))
            } else {
                console.log(res);
            }
        })
        .catch(e=>console.log(e))
    },[dispatch])

    const handlePageChange = (pageNumber)=> {
        setActivePage(pageNumber)
    }

    const indexOfLastPost = activePage*5
    const indexOfFirstPost = indexOfLastPost-5
    const currentList = listings.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <Container className="conWrapper">
            {
                listings.length <1 ?
                <Feedback 
                    messageStyle={{color:"#f0f0f0"}}
                    message="No listings yet"
                    icon={<FcCancel />}
                /> :
                <>
                    {
                        currentList?.map((list,i)=>{
                            return (
                                <List 
                                    key={"list-"+i} 
                                    list={list} 
                                />
                            )
                        })
                    }
                    <Pagination
                        activePage={activePage}
                        itemsCountPerPage={5}
                        totalItemsCount={listings.length}
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
