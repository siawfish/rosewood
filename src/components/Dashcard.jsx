import React from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { FaMoneyBillAlt, FaUser, FaPlusCircle } from 'react-icons/fa'
import { HiViewList } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { RiSettings3Fill } from 'react-icons/ri'

export default function Dashcard({
    stats,
    type="cart",
    containerStyle,
    statsContainerStyle,
    iconStyle,
    titleStyle,
    onClick
}) {
    const renderComponent =()=>{
        if(type==="cart"){
            return (
                <div className="left">
                    <div style={iconStyle} className="icon"><MdShoppingCart /></div>
                    <div style={titleStyle} className="title">Cart</div>
                </div>
            )
        }
        if(type==="orders"){
            return (
                <div className="left">
                    <div style={iconStyle} className="icon"><FaMoneyBillAlt /></div>
                    <div style={titleStyle} className="title">Orders</div>
                </div>
            )
        }
        if(type==="messages"){
            return (
                <div className="left">
                    <div style={iconStyle} className="icon"><MdEmail /></div>
                    <div style={titleStyle} className="title">Messages</div>
                </div>
            )
        }
        if(type==="settings"){
            return (
                <div className="left">
                    <div style={iconStyle} className="icon"><RiSettings3Fill /></div>
                    <div style={titleStyle} className="title">Settings</div>
                </div>
            )
        }
        if(type==="interests"){
            return (
                <div className="left">
                    <div style={iconStyle} className="icon"><FaUser /></div>
                    <div style={titleStyle} className="title">Interests</div>
                </div>
            )
        }
        if(type==="inventory"){
            return (
                <div className="left">
                    <div style={iconStyle} className="icon"><HiViewList /></div>
                    <div style={titleStyle} className="title">Listings</div>
                </div>
            )
        }
        if(type==="addProduct"){
            return (
                <div onClick={onClick} className="addProduct">
                    <div style={iconStyle} className="icon"><FaPlusCircle /></div>
                    <div style={titleStyle} className="title">Add Product</div>
                </div>
            )
        }
    }
    return (
        <div style={containerStyle} className="dashcard">
            {
                renderComponent()
            }
            {
                stats &&
                <div style={statsContainerStyle} className="right">{stats}</div>
            }
        </div>
    )
}
