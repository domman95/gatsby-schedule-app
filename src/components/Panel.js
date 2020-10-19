import React from 'react';
import styled from 'styled-components';

const PanelStyles = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    background: var(--white);
    border-radius: 10px;
    padding: 0 20px;
    height: 50px;
    margin: 20px 30px;
`

export default function Panel({children}) {
    return (
        <PanelStyles>
            {children}
        </PanelStyles>
    )
}