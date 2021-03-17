import React from 'react'
import { Form, Modal, Col, Button } from 'react-bootstrap'
// import { useSelector, useDispatch } from 'react-redux'
// import { API } from '../../assets/utils/constants'
// import { setAddress } from '../../redux/settingsStore/settingsStore'
// import SuccessOpacity from '../successOpacity/SuccessOpacity'

export default function AddressForm({
    onCancel
}) {
    // const dispatch = useDispatch()
    // const { address } = useSelector(state=>state.settings)
    // const { authToken } = useSelector(state=>state.app)
    // const [err, setErr] = React.useState("")
    // const [isLoading, setIsLoading] = React.useState(false)
    // const [addressDetails, setAddressDetails] = React.useState({
    //     id:address._id,
    //     email:address.email,
    //     phone:address.phone,
    //     address:address.address,
    //     workingHours:address.workingHours,
    //     city:address.city,
    //     region:address.region
    // })
    // const [success, setSuccess] = React.useState(false)

    // const resetState = ()=> {
    //     setAddressDetails({
    //         id:address._id,
    //         email:address.email,
    //         phone:address.phone,
    //         address:address.address,
    //         workingHours:address.workingHours,
    //         city:address.city,
    //         region:address.region
    //     })
    //     setIsLoading(false)
    //     setErr("")
    //     setSuccess(false)
    // }

    // const onChange = (name, e)=> {
    //     setErr("")
    //     setAddressDetails({
    //         ...addressDetails,
    //         [name]:e.target.value
    //     })
    // }

    // const validate = ()=> {
    //     if(addressDetails.email===""){
    //         setErr("Enter a valid email")
    //         return false
    //     } else if(addressDetails.phone===""){
    //         setErr("Enter phone number")
    //         return false
    //     } else if(addressDetails.address===""){
    //         setErr("Enter street address")
    //         return false
    //     } else if(addressDetails.workingHours===""){
    //         setErr("Enter working hours")
    //         return false
    //     } else if(addressDetails.city===""){
    //         setErr("Enter city")
    //         return false
    //     } 
    //     return true
    // }

    // const onSave = (e)=> {
    //     e.preventDefault()
    //     setErr("")
    //     setIsLoading(true)
    //     if(!validate()){
    //         setIsLoading(false)
    //         return
    //     }
    //     API.setHeader('Authorization', 'Bearer '+authToken)
    //     API.put('assets/update', JSON.stringify(addressDetails))
    //     .then(res=>{
    //         if(res.ok){
    //             dispatch(setAddress(res.data.store))
    //             setSuccess(true)
    //             setTimeout(() => {
    //                 resetState()
    //             }, 3000);
    //         } else {
    //             setErr(res.data.message)
    //             setIsLoading(false)
    //         }
    //     })
    //     .catch(e=>console.log(e))
    // }

    return (
        <Form className="addressForm">
            {/* {
                success &&
                <SuccessOpacity message="Address successfully saved!" />
            } */}
            <Modal.Title>Address Details</Modal.Title>
            {/* <div className="err">{err}</div> */}
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" placeholder="0277099099" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridAddress1">
                    <Form.Label>Street</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>
                <Form.Group as={Col} controlId="formWorkingHours">
                    <Form.Label>City/Town</Form.Label>
                    <Form.Control placeholder="Accra" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>State/Region</Form.Label>
                    <Form.Control placeholder="Greater Accra" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Country</Form.Label>
                    <Form.Control placeholder="Ghana" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridTwitter">
                    <Form.Label>Twitter</Form.Label>
                    <Form.Control placeholder="@twitter" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridFacebook">
                    <Form.Label>Facebook</Form.Label>
                    <Form.Control placeholder="Firstname Lastname/username" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridFacebook">
                    <Form.Label>Instagram</Form.Label>
                    <Form.Control placeholder="Username" />
                </Form.Group>
            </Form.Row>
            <div className="featureFormFooter">
                <Button onClick={onCancel} variant="secondary">Close</Button>
                <Button disabled={false} variant="primary">
                    {"Save changes"}
                </Button>
            </div>
        </Form>
    )
}
