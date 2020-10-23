import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Label = styled.label`

    span {
        display: none;
    }

    @media (min-width: 768px) {
           span {
               display: inline;
           }
    }
`

const SelectStyles = styled.select`
    height: 30px;
    border: ${({secondary}) => secondary ? '1px solid var(--blue)' : 'none'};
    border-radius: 6px;
    background: ${({secondary}) => secondary ? 'var(--white)' : 'var(--blue)'};
    font-size: 14px;
    font-weight: var(--bold);
    color: ${({secondary}) => secondary ? 'var(--blue)' : 'var(--white)'};
    /* padding: 0 10px;     */

    &:hover {
        background: var(--hoverBlue);
    }

`

export default function Select({ children, defVal, secondary, template }) {
    return (
        <Label>
            <span>{template}: </span>
            <SelectStyles secondary={secondary} defaultValue={defVal} onChange={(e) => console.log(e.target.value)}>
                    {children.map(item => <option key={item.name} value={item.name}>{item.name}</option>)}
            </SelectStyles>
        </Label>
    )
}

Select.propTypes = {
    children: PropTypes.array,
    template: PropTypes.string
}