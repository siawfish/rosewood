import numeral from 'numeral'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

export default function Interest({
    interest
}) {
    return (
        <div className="interest">
            <div className="userIcon">
                <FaUserCircle />
            </div>
            <div className="name">{interest?.name}</div>
            <div className="phone">{interest?.phone}</div>
            <div className="property">
                <img src={interest?.listing.images[0]} alt="" />
                <div className="info">
                    <div className="name">{interest?.listing.title}</div>
                    <div className="price">${numeral(interest?.listing.price).format('0,0')}</div>
                </div>
            </div>
        </div>
    )
}
