import React from 'react'
import { Container } from 'react-bootstrap'
import List from './List'
import { API } from '../utils/config'
import { useDispatch, useSelector } from 'react-redux'
import { setListings } from '../redux/listingsStore/listingsStore'

export default function Listings() {
    const dispatch = useDispatch()
    const { listings } = useSelector(state => state.listings)
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
