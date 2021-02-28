import React from 'react'
import { ButtonGroup, ToggleButton } from 'react-bootstrap'

export default function GroupButton({
    options
}) {
    const [radioValue, setRadioValue] = React.useState(options[0].value)
    return (
        <ButtonGroup className="groupButton" toggle>
            {options.map((option, idx) => (
            <ToggleButton
                key={idx}
                type="radio"
                variant="secondary"
                name="radio"
                value={option.value}
                checked={radioValue === option.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
                {option.name}
            </ToggleButton>
            ))}
        </ButtonGroup>
    )
}
