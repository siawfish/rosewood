import React from 'react'
import { Modal } from 'react-bootstrap'
import AddListingForm from './AddListingForm'
import AddressForm from './AddressForm'
import CarouselForm from './CarouselForm'

export default function FeatureDialog({
    type,
    show,
    handleClose
}) {
    return (
        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Body>
                {
                    type==="address" &&
                    <AddressForm onCancel={handleClose} />
                }
                {
                    type==="carousel" &&
                    <CarouselForm onCancel={handleClose} />
                }
                {
                    type==="addProduct" &&
                    <AddListingForm onCancel={handleClose} />
                }
            </Modal.Body>
        </Modal>
    )
}
