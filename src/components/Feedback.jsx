import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function Feedback({
    message,
    icon,
    messageStyle
}) {
    return (
        <div className="feedback">
            <div className="icon">
                {
                    icon ?? <FaCheckCircle />
                }
            </div>
            <div style={messageStyle} className="text">{message}</div>
        </div>
    )
}
