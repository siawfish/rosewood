import React from 'react'
import numeral from 'numeral'
import { Card, Button } from 'react-bootstrap'
import InterestForm from './InterestForm'

export default function PriceCard({
    type,
    price,
    property
}) {
    const [showInterestForm, setShowInterestForm] = React.useState(false)
    return (
        <>
            <Card className="priceCard">
                <div className="title">Price</div>
                <div className="amount">&#8373; {numeral(price).format('0,0')}{type==="rent"&&<small>/month</small>}</div>
                <Button onClick={()=>setShowInterestForm(true)} block>
                    Register interest
                </Button>
            </Card>
            <InterestForm 
                open={showInterestForm}
                handleClose={()=>setShowInterestForm(false)}
                property={property}
            />
        </>
    )
}
