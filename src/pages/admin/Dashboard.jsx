import React from 'react'
import { Container, Tab, Row, Col, ListGroup } from 'react-bootstrap'
import Dash from '../../components/Dash'
import GreetingsCard from '../../components/GreetingsCard'
import Settings from '../../components/Settings'
import Listings from '../../components/Listings'
import Users from '../../components/Users'
import Messages from '../../components/Messages'

export default function Dashboard() {
    const [activeKey, setActiveKey] = React.useState("#dash")
    const onMenuClick = (name)=> {
        setActiveKey(name)
    }
    return (
        <Container className="dashboard">
            <Tab.Container 
                id="list-group-tabs-example"
            >
                <Row>
                    <Col sm={3}>
                        <ListGroup 
                            activeKey={activeKey}
                            style={{marginBottom:20}}
                            defaultActiveKey="#dash"
                        >
                            <ListGroup.Item
                                eventKey="#dash"
                                onClick={()=>onMenuClick("#dash")}
                            >
                                Dashboard
                            </ListGroup.Item>
                            <ListGroup.Item
                                eventKey="#settings"
                                onClick={()=>onMenuClick("#settings")}
                            >
                                Settings
                            </ListGroup.Item>
                            <ListGroup.Item
                                eventKey="#listings"
                                onClick={()=>onMenuClick("#listings")}
                            >
                                Listings
                            </ListGroup.Item>
                            <ListGroup.Item
                                eventKey="#users"
                                onClick={()=>onMenuClick("#users")}
                            >
                                Users
                            </ListGroup.Item>
                            <ListGroup.Item
                                eventKey="#messages"
                                onClick={()=>onMenuClick("#messages")}
                            >
                                Messages
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content
                            activeKey={activeKey}
                            defaultActiveKey="#dash"
                            mountOnEnter={true}
                        >
                            <GreetingsCard 
                                name="firstname lastname"
                            />
                            <Tab.Pane eventKey="#dash">
                                <Dash />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#settings">
                                <Settings />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#listings">
                                <Listings />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#users">
                                <Users />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#messages">
                                <Messages />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
}
