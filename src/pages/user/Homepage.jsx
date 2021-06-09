import React from 'react'
import Features from '../../components/Features'
import Hero from '../../components/Hero'
import Intro from '../../components/Intro'
import { useDispatch, useSelector } from 'react-redux'
import { API } from '../../utils/config'
import { setListings } from '../../redux/listingsStore/listingsStore'
import { setAddress } from '../../redux/websiteStore/websiteStore'
import Loading from '../../components/Loading'

export default function Homepage() {
    const dispatch = useDispatch()
    const { listings } = useSelector(state => state.listings)

    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(()=>{
        const getResources = async ()=> {
            try {
                const { ok, data, problem } = await API.get('/admin/website?id=CddADmRqXDTKiXSA4pUy')
                if(ok){
                    dispatch(setAddress(data?.info.address))
                    await getListings()
                } else {
                    alert(data?.error??problem)
                }
            } catch (error) {
                alert(error.message)
            }
        }
    
        const getListings = async ()=> {
            try {
                const { ok, data, problem } = await API.get('/listings')
                if(ok){
                    dispatch(setListings(data))
                    setIsLoading(false)
                } else {
                    alert(data?.error??problem)
                }
            } catch (error) {
                alert(error.message)
            }
        }

        getResources()
    },[dispatch])

    

    const featuredListings = listings?.filter(list=>{
        return list.featuredListing === "true"
    })

    if(isLoading){
        return (
            <Loading />
        )
    }

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
