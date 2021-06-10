import React from 'react'
import advert from '../assets/img/advertise.png'
import { GrFormClose } from 'react-icons/gr'

export default function Overlay({
    onClose,
    onClick
}) {

    React.useEffect(()=>{
        window.scroll(0,0)
    },[])
    
    return (
        <>
            <div className="overlay"></div>

            <button onClick={onClose} className="overlayBtn"><GrFormClose /></button>

            <div className="overlayWrapper">
                <img onClick={onClick} src={advert} alt="" />
            </div>
        </>
    )
}
