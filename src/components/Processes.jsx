import React from 'react'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { FaCalendarCheck, FaRegHandshake } from 'react-icons/fa'
import { MdPayment } from 'react-icons/md'
import Process from './Process';

export default function Processes() {
    return (
        <div className="processWrapper">
            <Process 
                icon={<AiOutlineFileSearch />}
                title="Search"
                caption="Search through our wide catalog of property listings within Ghana."
            />
            <Process
                iconClass="fadedBlue" 
                icon={<FaCalendarCheck />}
                title="Booking"
                caption="Found what you are looking for? Contact us to book a viewing appointment."
            />
            <Process 
                iconClass="fadedGreen"
                icon={<MdPayment />}
                title="Payment"
                caption="Like what you saw? Make payment through our several convenient and safe payment methods."
            />
            <Process 
                iconClass="fadedOrange"
                icon={<FaRegHandshake />}
                title="Move In"
                caption="After successful payment you get to move into your new home. Very easy and convenient."
            />
        </div>
    )
}
