import React from 'react'
import Features from '../../components/Features'
import Hero from '../../components/Hero'
import Intro from '../../components/Intro'
import { useDispatch, useSelector } from 'react-redux'
import { API } from '../../utils/config'
import { setListings } from '../../redux/listingsStore/listingsStore'
import { setAddress } from '../../redux/websiteStore/websiteStore'

export default function Homepage() {
    const dispatch = useDispatch()
    const { listings } = useSelector(state => state.listings)

    React.useEffect(()=>{
        const getListings = ()=> {
            API.get('/listings')
            .then(res=> {
                if(res.ok){
                    dispatch(setListings(res.data.listings))
                } else {
                    console.log(res);
                }
            })
            .catch(e=>{
                console.log(e.message);
            })
        }
    
        const getWebsiteAssets = ()=> {
            API.get('/admin/website?id=CddADmRqXDTKiXSA4pUy')
            .then((res)=>{
                if(res.ok){
                    dispatch(setAddress(res.data?.info.address))
                } else {
                    console.log(res);
                }
            })
            .catch(e=>console.log(e))
        }
        getListings()
        getWebsiteAssets()
    },[dispatch])

    

    const featuredListings = listings?.filter(list=>{
        return list.featuredListing === "true"
    })

    return (
        <>
            <Hero />
            <Intro />
            <Features 
                featuredListings={featuredListings}
            />
        </>
    )
}
