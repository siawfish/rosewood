import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import { resetAppStore } from '../../redux/appStore/appStore'
// import { useHistory } from 'react-router-dom'

export default function GreetingsCard({
    name,
    onAddListing
}) {
    // const history = useHistory()
    // const { profile } = useSelector(state=>state.app)

    const logout = ()=> {
        console.log("logout")
        // dispatch(resetAppStore())
        // history.replace("/admin")
    }
    return (
        <Jumbotron>
            <h5>Hello, {name}!</h5>
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
