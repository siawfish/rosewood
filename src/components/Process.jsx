import React from 'react'
import { Card } from 'react-bootstrap'

export default function Process({
    icon,
    title,
    caption,
    iconClass
}) {
    return (
        <div className="process">
            <div className={`roundBack ${iconClass}`}>
                {icon}
            </div>
            <div className="introCardContent">
                <Card.Subtitle className="mb-2">{title}</Card.Subtitle>
                <Card.Text>
                    {caption}
                </Card.Text>
            </div>
        </div>
    )
}
