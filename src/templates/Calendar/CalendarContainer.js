import React from 'react';
import styled from 'styled-components';

const CalendarStyles = styled.main`
    display: grid;
    grid-template-columns: 80px 1fr;
    justify-content: center;
    background: var(--white);
    border-radius: 6px;
    margin: 0 10px 20px;
    overflow-x: scroll;
    flex: 1;
`

export default function CalendarContainer({children}) {
    return (
        <CalendarStyles>
            {children}
        </CalendarStyles>
    )
}