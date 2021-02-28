import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'

export default function ButtonDropdown() {
    return (
        <DropdownButton id="dropdown-basic-button" title="Accra">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
    )
}
