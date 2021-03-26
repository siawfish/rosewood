import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function Feedback({
    message
}) {
    return (
        <div className="feedback">
            <div className="icon">
                <FaCheckCircle />
            </div>
            <div className="text">{message}</div>
        </div>
    )
}
