import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.button`
    width: ${({card, form}) => card ? '70px' : form ? '100%' : '140px'};
    height: 30px;
    background: ${({ secondary }) => secondary ? 'var(--white)' : 'var(--blue)'};
    color: ${({ secondary }) => secondary ? 'var(--darkgrey)' : 'var(--white)'};
    border: ${({ secondary }) => secondary ? '1px solid var(--grey)' : 'none'};
    border-radius: 6px;
    font-weight: var(--bold);

    &:hover{
        background-color: ${({secondary}) => secondary ? 'var(--hoverGrey)' : 'var(--hoverBlue)'};
    }
`

export default function Button({children, secondary, card, form}) {
    return (
        <ButtonStyles secondary={secondary} card={card} form={form}>
            {children}
        </ButtonStyles>
    )
}