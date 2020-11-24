import React from 'react';
import styled from 'styled-components';

const CalendarStyles = styled.main`
    display: grid;
    grid-template-columns: 80px 1fr;
    background: var(--white);
    border-radius: 6px;
    margin: 0 10px 20px;
    overflow: scroll;
`

export default function CalendarContainer({children}) {
    return (
        <CalendarStyles>
            {children}
        </CalendarStyles>
    )
}