import React from 'react'
import { Col, Form, Button } from 'react-bootstrap'

export default function ContactForm({
    isLoading,
    onChange,
    formDetails,
    err,
    onSave
}) {
    return (
        <Form>
            <div className="err">{err}</div>
            <Form.Row>
                <Form.Group sm={12} as={Col} controlId="formGridEmail">
                    <Form.Label>First name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="John" 
                        defaultValue={formDetails.firstName}
                        onChange={(e)=>onChange("firstName", e)}
                    />
                </Form.Group>

                <Form.Group sm={12} as={Col} controlId="formGridPassword">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Doe" 
                        defaultValue={formDetails.lastName}
                        onChange={(e)=>onChange("lastName", e)}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group sm={12} as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="xyz@mail.com" 
                        defaultValue={formDetails.email}
                        onChange={(e)=>onChange("email", e)}
                    />
                </Form.Group>

                <Form.Group sm={12} as={Col} controlId="formGridPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="+233 050 000 0000" 
                        defaultValue={formDetails.phone}
                        onChange={(e)=>onChange("phone", e)}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                    as="textarea" 
                    placeholder="Message"
                    rows={3} 
                    defaultValue={formDetails.message}
                    onChange={(e)=>onChange("message", e)}
                />
            </Form.Group>

            <Button 
                variant="primary" 
                type="submit"
                onClick={onSave}
                disabled={isLoading}
            >
                {
                    isLoading ?
                    "Sending message...":
                    "Send message"
                }
            </Button>
        </Form>
    )
}
