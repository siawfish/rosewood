import React from 'react'
import { Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap'

export default function PropertySearch() {
    return (
        <div className="propertySearch">
            <input placeholder="Search here" />
            <div className="filterRow">
                <DropdownButton id="dropdown-basic-button" title="Beds">
                    <Dropdown.Item href="#/action-1">1 Bedroom</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2 Bedroom</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">3 Bedroom</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">4 Bedroom</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">5 Bedroom</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Price">
                    <Dropdown.Item href="#/action-1">$10,000</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">$20,000 </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">$50,000</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">$100,000</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">$500,000</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
    )
}
