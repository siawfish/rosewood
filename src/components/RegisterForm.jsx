import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { API } from '../utils/config'

export default function RegisterForm() {
    const location = useLocation()
    const history = useHistory()
    const { pathname } = location
    const [ isLoading, setIsLoading ] = React.useState(false)
    // const [ sucess, setSucess ] = React.useState(false)
    const [ err, setErr ] = React.useState(null)
    const [ formDetails, setFormDetails] = React.useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })

    const onTextInput = (name,e)=> {
        setFormDetails({
            ...formDetails,
            [name]:e.target.value
        })
    }

    const isValid = ()=> {
        if(!formDetails.firstName.match(/^[a-zA-Z_-]{3,15}$/)){
            setErr("Kindly enter a valid first name")
            return false
        }
        if(!formDetails.lastName.match(/^[a-zA-Z_-]{3,15}$/)){
            setErr("Kindly enter a valid last name")
            return false
        }
        if(!formDetails.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) || !formDetails.email.match("@rosewoodgh.com")){
            setErr("Kindly enter your work email. eg: xyz@rosewoodgh.com")
            return false
        }
        if(!formDetails.password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)){
            setErr("Password should have a minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character")
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
        API.post('/admin/register', formDetails)
        .then(res=>{
            if(res.ok){
                // setSucess(true)
                alert("Account successfully created. You will be redirected to the login page")
                history.push('/admin')
            } else {
                setErr("Oops! an error occured!")
            }
            setIsLoading(false)
        })
        .catch(e=>{
            setIsLoading(false)
            setErr("Error " + e.message)
        })
    }

    // if(sucess){
    //     return (
    //         <Row>
    //             <Col md={{ span: 6, offset: 3 }}>
    //                 <div style={pathname.match('/admin')&&{color:"#f0f0f0"}} className="registerForm">
    //                     sucess!!!
    //                 </div>
    //             </Col>
    //         </Row>
    //     )
    // }

    return (
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
                <div style={pathname.match('/admin')&&{color:"#f0f0f0"}} className="registerForm">
                    
                    <div className="bolderText">Create {pathname.match('/admin')?"an admin account":"a free account"}</div>
                    <div className="err">{err}</div>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                            style={
                                pathname.match('/admin')&&
                                {backgroundColor:"#333", color:"#fff"}
                            } 
                            type="text" 
                            placeholder="John" 
                            defaultValue={formDetails.firstName}
                            onChange={(e)=>onTextInput("firstName",e)}
                        />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control 
                            style={
                                pathname.match('/admin')&&
                                {backgroundColor:"#333", color:"#fff"}
                            } 
                            type="text"
                            placeholder="Doe" 
                            defaultValue={formDetails.lastName}
                            onChange={(e)=>onTextInput("lastName",e)}
                        />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            style={
                                pathname.match('/admin')&&
                                {backgroundColor:"#333", color:"#fff"}
                            } 
                            type="email" 
                            placeholder="Enter email" 
                            defaultValue={formDetails.email}
                            onChange={(e)=>onTextInput("email",e)}
                        />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            style={
                                pathname.match('/admin')&&
                                {backgroundColor:"#333", color:"#fff"}
                            } 
                            type="password" 
                            placeholder="Password" 
                            defaultValue={formDetails.password}
                            onChange={(e)=>onTextInput("password",e)}
                        />
                        </Form.Group>
                    </Form.Row>

                    <Button disabled={isLoading} onClick={onSubmit} block variant="primary" type="submit">
                        {
                            isLoading ? 
                            "Registering ..." :
                            "Register"
                        }
                    </Button>
                    <small>Already have an account? <Link to="/admin">Login here.</Link></small>
                </div>
            </Col>
        </Row>
    )
}
