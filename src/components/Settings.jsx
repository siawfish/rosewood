import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FeatureCard from './FeatureCard'
import FeatureDialog from './FeatureDialog'
import { useDispatch } from 'react-redux'
import { API } from '../utils/config'
import { setAddress } from '../redux/websiteStore/websiteStore'

export default function Settings() {
    const [show,setShow] = React.useState({
        status:false,
        type:null
    })
    const dispatch = useDispatch()

    React.useEffect(()=>{
        API.get('/admin/website?id=CddADmRqXDTKiXSA4pUy')
        .then((res)=>{
            if(res.ok){
                dispatch(setAddress(res.data?.info.address))
            } else {
                console.log(res);
            }
        })
        .catch(e=>console.log(e))
    },[dispatch])

    return (
        <Container>
            <Row>
                <Col lg={6}>
                    <FeatureCard 
                        feature="address"
                        onButtonPress={()=>setShow({
                            status:true,
                            type:"address"
                        })}
                    />
                </Col>
                <Col lg={6}>
                    <FeatureCard 
                        feature="carousel"
                        onButtonPress={()=>setShow({
                            status:true,
                            type:"carousel"
                        })}
                    />
                </Col>
            </Row>
            <FeatureDialog 
                type={show.type}
                show={show.status}
                handleClose={()=>setShow({
                    status:false,
                    type:null
                })}
            />
        </Container>
    )
}
