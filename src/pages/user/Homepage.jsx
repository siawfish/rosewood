import React from 'react'
import Features from '../../components/Features'
import Hero from '../../components/Hero'
import Intro from '../../components/Intro'
import { useDispatch, useSelector } from 'react-redux'
import { API } from '../../utils/config'
import { setListings } from '../../redux/listingsStore/listingsStore'
import { setAddress } from '../../redux/websiteStore/websiteStore'
import Loading from '../../components/Loading'
import Overlay from '../../components/Overlay'
import { useHistory } from 'react-router'
import { Container } from 'react-bootstrap'
import FadeIn from 'react-fade-in';
import LazyLoad from 'react-lazyload';

export default function Homepage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { listings } = useSelector(state => state.listings)

    const [isLoading, setIsLoading] = React.useState(true)
    const [isActive, setIsActive] = React.useState(false)

    React.useEffect(()=>{
        const advertise = setTimeout(() => {
            showAd()
        }, 5000);
        return ()=>clearTimeout(advertise)
    },[])

    const showAd = ()=> {
        setIsActive(true)
        document.body.style.overflowY = "hidden"
    }

    const closeAd = ()=> {
        setIsActive(false)
        document.body.style.overflowY = "auto"
    }

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

    const gotoPromoProperty = ()=> {
        closeAd()
        history.push('/property/HoNbbwQw22ZeFL5GI0Jb')
    }

    const featuredListings = listings?.filter(list=>{
        return list.featuredListing === "true"
    })

    if(isLoading){
        return (
            <Loading />
        )
    }

    return (
        <FadeIn transitionDuration={3000}>
            <Container fluid style={{padding:0}}>
                {
                    isActive &&
                    <Overlay onClick={gotoPromoProperty} onClose={closeAd} />
                }
                <Hero />
                <LazyLoad height={200} offset={0}>
                    <Intro />
                </LazyLoad>
                <LazyLoad height={200} offset={0}>
                    <Features 
                        featuredListings={featuredListings}
                    />
                </LazyLoad>
            </Container>
        </FadeIn>
    )
}
