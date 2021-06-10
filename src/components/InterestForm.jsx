import { Modal, Form, Button } from 'react-bootstrap'
import React from 'react'
import { API } from '../utils/config'
import Feedback from './Feedback'
import { FaHandshake } from 'react-icons/fa'

export default function InterestForm({
    open,
    handleClose,
    property
}) {
    const [isLoading, setIsLoading] = React.useState(false)
    const [formDetails, setFormDetails] = React.useState({
        name:"",
        phone:""
    })
    const [err, setErr] = React.useState("")
    const [success, setSuccess] = React.useState(false)


    const onTextInput = (e, name)=> {
        setErr("")
        setFormDetails({
            ...formDetails,
            [name]:e.target.value
        })
    }

    const onSubmit = async (e)=> {
        try {
            e.preventDefault()
            setIsLoading(true)
            setErr("")
            if(formDetails.name<3){
                setErr("Kindly enter a valid name")
                setIsLoading(false)
                return
            }
            if(formDetails.phone<10){
                setErr("Kindly enter a valid phone number")
                setIsLoading(false)
                return
            }
            const { ok, data, problem } = await API.post('/interest', {
                ...formDetails,
                listing:property
            })
            if(ok){
                setIsLoading(false)
                setSuccess(true)
            } else {
                setErr(data?.error??problem)
                setIsLoading(false)
            }
        } catch (error) {
            setIsLoading(false)
            setErr(error.message)
        }
    }

    return (
        <Modal centered show={open} onHide={handleClose}>
            <Modal.Body className="interestForm">
                {
                    success ?
                    <Feedback containerStyle={{marginBottom:50}} messageStyle={{textTransform:"capitalize", color:"#555555", letterSpacing:0.4}} icon={<FaHandshake />} message={`Thank you ${formDetails.name} for showing interest in ${property?.title.toLowerCase()}`} /> :
                    <Form>
                        <div className="topic">
                            Register your interest
                        </div>
                        <div className="small">
                            Kindly complete the form to register ineterest.
                        </div>
                        <div className="err">{err}</div>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={(e)=>onTextInput(e, "name")} placeholder="eg. John Doe" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control onChange={(e)=>onTextInput(e, "phone")} type="number" placeholder="eg. 0577099088" />
                        </Form.Group>
                        <Button onClick={onSubmit} block variant="primary" type="submit">
                            {
                                isLoading ?
                                "Submitting interest...":
                                "Submit interest"
                            }
                        </Button>
                    </Form>
                }
            </Modal.Body>
        </Modal>
    )
}
