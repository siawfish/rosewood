import React from 'react'
import { FaCheckCircle } from 'react-icons/fa' 

export default function SuccessOpacity({
    message="Success!"
}) {
    return (
        <div className="successOpacity">
            <div className="bg">
                <div className="successMessage">
                    <div className="icon"><FaCheckCircle /></div>
                    <div>{message}</div>
                </div>
            </div>
        </div>
    )
}
