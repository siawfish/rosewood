import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Item from '../../components/Item'
import Map from '../../components/Map'
import PropertySearch from '../../components/PropertySearch'
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import Feedback from '../../components/Feedback'

export default function Properties() {
    const { key } = useParams()
    const { listings } = useSelector(state => state.listings)
    const [search, setSearch] = React.useState("")
    const [list, setList] = React.useState(listings)

    React.useEffect(()=>{
        if(key){
            setSearch(key)
        }
    },[key])
    
    React.useEffect(() => {
        if(search!==""){
            let displayListings = listings.filter(list=>{
                return list?.title.toLowerCase().includes(search.toLowerCase()) || list?.type.toLowerCase().includes(search.toLowerCase()) || list?.price === search || list?.location.toLowerCase().includes(search.toLowerCase())
            })
            setList(displayListings)
        } else {
            setList(listings)
        }
    }, [search, listings])

    const onTextInput = (e)=>{
        setSearch(e.target.value)
    }
    
    return (
        <Container className="properties" fluid>
            <Row>
                <Col className="propertiesCol" style={{padding:0}} sm={12} lg={5}>
                    <div className="listContainer">
                        <PropertySearch defaultValue={search} onSearch={onTextInput} />
                        <div className="listItemsContainer">
                            {
                                list?.length < 1 ?
                                <Feedback message="Sorry no listings are currently available" /> :
                                list?.map((item, i)=>{
                                    return (
                                        <Item 
                                            key={i}
                                            property={item}
                                            lg={6}
                                            seeMore={false}
                                            containerStyle={{
                                                padding:5
                                            }}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </Col>
                <Col style={{paddingRight:0}} sm={0} lg={7}>
                    <Map places={listings} />
                </Col>
            </Row>
        </Container>
    )
}
