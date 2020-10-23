import React from 'react';
import styled from 'styled-components';

const PanelStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    align-items: center;
    background: var(--white);
    border-radius: 6px;
    gap: 10px;
    padding: 5px 10px;
    margin: 80px 10px 20px;

    @media (min-width: 768px) {
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto;
    }

    @media (max-width: 768px) {
        .customersButton,
        .calendarForm {
            grid-column: 1 / 2;
            grid-row: 1 / 2
        }

        .customersInput,
        .calendarDate {
            grid-column: 1 / 3;
            grid-row: 2 / 3;
        }
        .customersViewOptions,
        .calendarWorkers {
            justify-content: flex-end;
        }



    }
`

export default function Panel({children}) {
    return (
        <PanelStyles>
            {children}
        </PanelStyles>
    )
}