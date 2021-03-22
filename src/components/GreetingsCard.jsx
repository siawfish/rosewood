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
            <h5>Hello, {profile?.displayName}!</h5>
            <p>
                <small>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </small>
            </p>
            <div>
                <Button style={{marginRight:20}} onClick={logout} variant="primary">Logout</Button>
                <Button onClick={onAddListing} variant="primary">Add Listing</Button>
            </div>
        </Jumbotron>
    )
}
