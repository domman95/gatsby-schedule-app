import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.button`
    background: ${({ secondary }) => secondary ? 'var(--white)' : 'var(--blue)'};
    color: ${({ secondary }) => secondary ? 'var(--darkgrey)' : 'var(--white)'};
    border: ${({ secondary }) => secondary ? '1px solid var(--grey)' : 'none'};
    border-radius: 6px;
    font-weight: var(--bold);
    padding: 5px 10px;

    &:hover{
        background-color: ${({secondary}) => secondary ? 'var(--hoverGrey)' : 'var(--hoverBlue)'};
    }

    .desktop {
        display: none;
    }

    @media (min-width: 768px) {
        .desktop {
            display: block
        }

        .mobile {
            display: none;
        }
    }

`

export default function Button({children, secondary, onClick}) {
    return (
        <ButtonStyles secondary={secondary} onClick={onClick}>
            {children}
        </ButtonStyles>
    )
}