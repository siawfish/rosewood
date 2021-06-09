import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { API } from '../utils/config'
import { useDispatch } from 'react-redux'
import { setUserType, setIsAuthenticated, setUserProfile } from '../redux/appStore/appStore'

export default function LoginForm() {
    const location = useLocation()
    const dispatch = useDispatch()
    const { pathname } = location

    const [ isLoading, setIsLoading ] = React.useState(false)
    const [ err, setErr ] = React.useState(null)
    const [ formDetails, setFormDetails] = React.useState({
        email:"",
        password:""
    })

    const onTextInput = (name,e)=> {
        setErr(null)
        setFormDetails({
            ...formDetails,
            [name]:e.target.value
        })
    }

    const isValid = ()=> {
        if(!formDetails.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) || !formDetails.email.match("@rosewoodgh.com")){
            setErr("Kindly enter your work email. eg: xyz@rosewoodgh.com")
            return false
        }
        return true
    }

    const onSubmit = (e)=> {
        e.preventDefault()
        setIsLoading(true)
        if(!isValid()){
            setIsLoading(false)
            return
        }
        API.post('/admin/login', formDetails)
        .then(res=>{
            if(res.ok){
                dispatch(setUserType("admin"))
                dispatch(setUserProfile(res.data.auth.user))
                dispatch(setIsAuthenticated(true))
            } else {
                setErr(res.data.error)
            }
            setIsLoading(false)
        })
        .catch(e=>{
            setIsLoading(false)
            setErr("Error " + e.message)
        })
    }

    return (
        <Row>
            <Col md={{ span: 4, offset: 4 }}>
                <div style={pathname.match('/admin')&&{color:"#f0f0f0"}} className="form">
                    
                    <div className="bolderText">Welcome, login into {pathname.match('/admin')?"admin portal" : "your account"}</div>
                    <div className="err">{err}</div>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            defaultValue={formDetails.email}
                            onChange={(e)=>onTextInput("email", e)} 
                            style={
                                pathname.match('/admin')&&
                                {backgroundColor:"#333", color:"#fff"}
                            } 
                            type="email" 
                            placeholder="Enter email" 
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            defaultValue={formDetails.password}
                            onChange={(e)=>onTextInput("password", e)} 
                            style={
                                pathname.match('/admin')&&{backgroundColor:"#333", color:"#fff"}
                            } 
                            type="password" 
                            placeholder="Password" 
                        />
                    </Form.Group>

                    <Button 
                        disabled={isLoading} 
                        onClick={onSubmit} 
                        block 
                        variant="primary" 
                        type="submit"
                    >
                        {
                            isLoading ?
                            "Checking..." :
                            "Login"
                        }
                    </Button>
                    <small>{pathname.match('/admin')?"Are you an employee":"Don't have an account"}? <Link to={pathname.match('/admin')?"/admin/register":"/register"}>{pathname.match('/admin')?"Create an admin account":"Register here"}.</Link></small>
                </div>
            </Col>
        </Row>
    )
}
