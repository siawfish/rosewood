import React from 'react'
import { Col } from 'react-bootstrap'

export default function Thumbnail({
    img,
    col=4
}) {
    return (
        <Col style={{padding:2}} lg={col}>
            <img src={img} alt="" />
        </Col>
    )
}
