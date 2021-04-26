import React from 'react'
import { BsBellFill, BsFillBagFill } from 'react-icons/bs'

export default function SaleType({
    type
}) {
    const renderType = ()=> {
        switch (type) {
            case "sale":
                return (
                    <>
                        <BsBellFill />
                        <div className="saleType">
                                For Sale
                        </div>
                    </>
                )
            case "rent":
                return (
                    <>
                        <BsFillBagFill />
                        <div className="saleType">
                                For Rent
                        </div>
                    </>
                )
            default:
                break;
        }
    }
    return (
        <div style={type==="rent"?{backgroundColor:"orange"}:null} className="saleTypeWrapper">
            {
                renderType()
            }
        </div>
    )
}
