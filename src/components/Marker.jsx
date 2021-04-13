import React from 'react'
import numeral from 'numeral'

export default function Marker({
    text
}) {
    return (
        <div className="bubble">&#8373; {numeral(text).format('0,0')}</div>
    )
}
