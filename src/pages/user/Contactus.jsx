import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { API } from '../../utils/config'
import ContactForm from '../../components/ContactForm'
import Feedback from '../../components/Feedback'
import FadeIn from 'react-fade-in';

export default function Contactus() {
    const { address } = useSelector(state=>state.website)
    const [formDetails, setFormDetails] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        message:""
    })
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState("")
    const [success, setSuccess] = useState(false)

    useEffect(()=>{
        window.scroll(0,0)
    },[])

    const onChange = (name, e)=> {
        setErr("")
        setFormDetails({
            ...formDetails,
            [name]:e.target.value
        })
    }

    const resetState = ()=> {
        setFormDetails({
            firstName:"",
            lastName:"",
            email:"",
            phone:"",
            message:""
        })
        setErr("")
        setIsLoading(false)
    }

    const validate = ()=> {
        if(!formDetails.firstName.match(/^[a-zA-Z_-]{3,15}$/)){
            setErr("Kindly enter a valid first name")
            return false
        }
        if(!formDetails.lastName.match(/^[a-zA-Z_-]{3,15}$/)){
            setErr("Kindly enter a valid last name")
            return false
        }
        if(!formDetails.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
            setErr("Kindly enter a valid email")
            return false
        } else if(formDetails.phone.length<10){
            setErr("Enter a valid phone number")
            return false
        } else if(formDetails.message===""){
            setErr("Oopsie! You forgot to enter message")
            return false
        }
        return true
    }

    const onSave = async (e)=> {
        try {
            e.preventDefault()
            setIsLoading(true)
            if(!validate()){
                setIsLoading(false)
                return
            }
            const { ok, data, problem } = await API.post('/messages', formDetails)
            if(ok){
                setSuccess(true)
                resetState()
            } else {
                setErr(data?.error??problem)
            }
            setIsLoading(false)
        } catch (error) {
            setErr(error.message)
            setIsLoading(false)
        }
    }

    return (
        <FadeIn transitionDuration={2000}>
            <div className="contact">
                <Container className="contactCard">
                    <Row>
                        <Col style={{paddingLeft:0}} lg={5}>
                            <div className="left">
                                <div className="biggerText">
                                    Contact Information
                                </div>
                                <small>Kindly complete the form and our team will get back to you within 24 hours</small>
                                <div style={{marginTop:40}} className="listItem"><span><FaPhoneAlt /></span> {`+${address?.phone}`}</div>
                                <div className="listItem"><span><MdEmail /></span> {address?.email}</div>
                                <div className="listItem"><span><MdLocationOn /></span> {address?.street}, {address?.city}, {address?.region}, {address?.country}</div>
                                <div className="socialRow">
                                    <div className="icon"><FaFacebookSquare /></div>
                                    <div className="icon"><FaTwitterSquare /></div>
                                    <div className="icon"><FaInstagramSquare /></div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="right">
                                <div className="title">Any questions or remarks? Just write us a message.</div>
                                {
                                    success ? 
                                    <Feedback 
                                        message="Thank you for your interest. An agent will contact you within 24 hours."
                                    /> :
                                    <ContactForm 
                                        onSave={onSave}
                                        isLoading={isLoading}
                                        err={err}
                                        onChange={onChange}
                                        formDetails={formDetails}
                                    />
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </FadeIn>
    )
}
