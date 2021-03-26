import React from 'react'
import { Form, Modal, Col, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { API } from '../utils/config'
import { setAddress } from '../redux/websiteStore/websiteStore'
import SuccessOpacity from './SuccessOpacity'

export default function AddressForm({
    onCancel
}) {
    const dispatch = useDispatch()
    const { address } = useSelector(state=>state.website)
    const [err, setErr] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const [addressDetails, setAddressDetails] = React.useState({
        email:address?.email,
        phone:address?.phone,
        street:address?.street,
        city:address?.city,
        country:address?.country,
        region:address?.region,
        twitter:address?.twitter,
        facebook:address?.facebook,
        instagram:address?.instagram,
    })
    const [success, setSuccess] = React.useState(false)
    
    const resetState = ()=> {
        setAddressDetails({
            email:address.email,
            phone:address.phone,
            street:address.street,
            city:address.city,
            country:address.country,
            region:address.region,
            twitter:address.twitter,
            facebook:address.facebook,
            instagram:address.instagram,
        })
        setIsLoading(false)
        setErr("")
        setSuccess(false)
    }

    const onChange = (name, e)=> {
        setErr("")
        setAddressDetails({
            ...addressDetails,
            [name]:e.target.value
        })
    }

    const validate = ()=> {
        if(addressDetails.email==="" || addressDetails.email===undefined){
            setErr("Enter a valid email")
            return false
        } else if(addressDetails.phone==="" || addressDetails.phone===undefined){
            setErr("Enter phone number")
            return false
        } else if(addressDetails.street==="" || addressDetails.street===undefined){
            setErr("Enter street address")
            return false
        } else if(addressDetails.country==="" || addressDetails.country===undefined){
            setErr("Enter country")
            return false
        } else if(addressDetails.city==="" || addressDetails.city===undefined){
            setErr("Enter city")
            return false
        } else if(addressDetails.region==="" || addressDetails.region===undefined){
            setErr("Enter region")
            return false
        } else if(addressDetails.twitter==="" || addressDetails.twitter===undefined){
            setErr("Enter twitter handle")
            return false
        } else if(addressDetails.facebook==="" || addressDetails.facebook===undefined){
            setErr("Enter facebook name")
            return false
        } else if(addressDetails.instagram==="" || addressDetails.instagram===undefined){
            setErr("Enter instagram handle")
            return false
        } 
        return true
    }

    const onSave = (e)=> {
        e.preventDefault()
        setErr("")
        setIsLoading(true)
        if(!validate()){
            setIsLoading(false)
            return
        }
        API.patch('/admin/website?id=CddADmRqXDTKiXSA4pUy', JSON.stringify({address:addressDetails}))
        .then(res=>{
            if(res.ok){
                dispatch(setAddress(res.data.info.address))
                setSuccess(true)
                setTimeout(() => {
                    resetState()
                }, 3000);
            } else {
                setErr(res.data.error)
                setIsLoading(false)
            }
        })
        .catch(e=>console.log(e))
    }
    return (
        <Form className="addressForm">
            {
                success &&
                <SuccessOpacity message="Address successfully saved!" />
            }
            <Modal.Title>Address Details</Modal.Title>
            <div className="err">{err}</div>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        onChange={(e)=>onChange("email", e)}
                        placeholder="Enter email" 
                        defaultValue={addressDetails.email}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control 
                        type="number" 
                        maxLength={10}
                        minLength={10}
                        onChange={(e)=>onChange("phone", e)}
                        placeholder="0277099099" 
                        defaultValue={addressDetails.phone}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridAddress1">
                    <Form.Label>Street</Form.Label>
                    <Form.Control 
                        placeholder="1234 Main St" 
                        onChange={(e)=>onChange("street", e)}
                        defaultValue={addressDetails.street}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="formWorkingHours">
                    <Form.Label>City/Town</Form.Label>
                    <Form.Control 
                        placeholder="Accra" 
                        onChange={(e)=>onChange("city", e)}
                        defaultValue={addressDetails.city}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>State/Region</Form.Label>
                    <Form.Control 
                        placeholder="Greater Accra" 
                        onChange={(e)=>onChange("region", e)}
                        defaultValue={addressDetails.region}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Country</Form.Label>
                    <Form.Control 
                        placeholder="Ghana"
                        onChange={(e)=>onChange("country", e)} 
                        defaultValue={addressDetails.country}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridTwitter">
                    <Form.Label>Twitter</Form.Label>
                    <Form.Control 
                        placeholder="@twitter" 
                        onChange={(e)=>onChange("twitter", e)}
                        defaultValue={addressDetails.twitter}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridFacebook">
                    <Form.Label>Facebook</Form.Label>
                    <Form.Control 
                        placeholder="Firstname Lastname/username" 
                        onChange={(e)=>onChange("facebook", e)}
                        defaultValue={addressDetails.facebook}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridFacebook">
                    <Form.Label>Instagram</Form.Label>
                    <Form.Control 
                        placeholder="Username" 
                        onChange={(e)=>onChange("instagram", e)}
                        defaultValue={addressDetails.instagram}
                    />
                </Form.Group>
            </Form.Row>
            <div className="featureFormFooter">
                <Button onClick={onCancel} variant="secondary">Close</Button>
                <Button 
                    disabled={isLoading} 
                    variant="primary"
                    onClick={onSave}
                >
                    {
                        isLoading ?
                        "Saving...":
                        "Save changes"
                    }
                </Button>
            </div>
        </Form>
    )
}
