import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { resetAppStore } from '../redux/appStore/appStore'

export default function GreetingsCard({
    name,
    onAddListing
}) {
    const { profile } = useSelector(state=>state.app)
    const dispatch = useDispatch()
    const logout = ()=> {
        dispatch(resetAppStore())
    }
    return (
        <Jumbotron>
            <p>
                <h5>Hello, {profile?.displayName}!</h5>
            </p>
            <Button style={{marginRight:20}} onClick={logout} variant="primary">Logout</Button>
            <Button onClick={onAddListing} variant="primary">Add Listing</Button>
        </Jumbotron>
    )
}
