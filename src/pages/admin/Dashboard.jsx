import React from 'react'
import { Container, Tab, Row, Col, ListGroup } from 'react-bootstrap'
import Dash from '../../components/Dash'
import GreetingsCard from '../../components/GreetingsCard'
import Settings from '../../components/Settings'
import Listings from '../../components/Listings'
import Interests from '../../components/Interests'
import Messages from '../../components/Messages'
import FeatureDialog from '../../components/FeatureDialog'

export default function Dashboard() {
    const [activeKey, setActiveKey] = React.useState("dash")
    
    const [show,setShow] = React.useState({
        status:false,
        type:null
    })

    const addListing = ()=> {
        setShow({
            status:true,
            type:"addProduct"
        })
    }

    return (
        <Container className="dashboard">
            <Tab.Container
                onSelect={(key)=>setActiveKey(key)}
                defaultActiveKey={activeKey}
                id="list-group-tabs-example"
            >
                <Row>
                    <Col sm={3}>
                        <ListGroup 
                            style={{marginBottom:20}}
                        >
                            <ListGroup.Item
                                eventKey="dash"
                            >
                                Dashboard
                            </ListGroup.Item>
                            <ListGroup.Item
                                eventKey="settings"
                            >
                                Settings
                            </ListGroup.Item>
                            <ListGroup.Item
                                eventKey="listings"
                            >
                                Listings
                            </ListGroup.Item>
                            <ListGroup.Item
                                eventKey="interests"
                            >
                                Interests
                            </ListGroup.Item>
                            <ListGroup.Item
                                eventKey="messages"
                            >
                                Messages
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <GreetingsCard 
                                name="firstname lastname"
                                onAddListing={addListing}
                            />
                            <Tab.Pane eventKey="dash">
                                <Dash />
                            </Tab.Pane>
                            <Tab.Pane eventKey="settings">
                                <Settings />
                            </Tab.Pane>
                            <Tab.Pane eventKey="listings">
                                <Listings />
                            </Tab.Pane>
                            <Tab.Pane eventKey="interests">
                                <Interests />
                            </Tab.Pane>
                            <Tab.Pane eventKey="messages">
                                <Messages />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
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
