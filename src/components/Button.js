import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.button`
    width: 150px;
    height: 50px;
    background: ${({ secondary }) => secondary ? 'var(--white)' : 'var(--blue)'};
    color: ${({ secondary }) => secondary ? 'var(--darkgrey)' : 'var(--white)'};
    border: ${({ secondary }) => secondary ? '1px solid var(--grey)' : 'none'};
    border-radius: 10px;
    cursor: pointer;
    outline: none;

    &:focus {
        border: 2px dotted var(--black);
    }

    &:hover{
        background-color: ${({secondary}) => secondary ? 'var(--hoverGrey)' : 'var(--hoverBlue)'};
    }
`

export default function Button({children, secondary}) {
    return (
        <ButtonStyles secondary={secondary}>
            {children}
        </ButtonStyles>
    )
}