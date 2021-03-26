import React from 'react'
import { Container, Tab, Row, Col, ListGroup } from 'react-bootstrap'
import Dash from '../../components/Dash'
import GreetingsCard from '../../components/GreetingsCard'
import Settings from '../../components/Settings'
import Listings from '../../components/Listings'
import Users from '../../components/Users'
import Messages from '../../components/Messages'
import FeatureDialog from '../../components/FeatureDialog'
import { API } from '../../utils/config'
import { useDispatch } from 'react-redux'
import { setMessages } from '../../redux/messagesStore/messagesStore'

export default function Dashboard() {
    const dispatch = useDispatch()
    const [activeKey, setActiveKey] = React.useState("#dash")
    const [show,setShow] = React.useState({
        status:false,
        type:null
    })

    React.useEffect(()=>{
        API.get('/messages')
        .then((res)=>{
            if(res.ok){
                dispatch(setMessages(res.data.messages))
            } else {
                console.log("else block",res.data.error)
            }
        })
        .catch(e=>{
            console.log(e);
        })
    },[dispatch])

    const addListing = ()=> {
        setShow({
            status:true,
            type:"addProduct"
        })
    }

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
                        >
                            <GreetingsCard 
                                name="firstname lastname"
                                onAddListing={addListing}
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
