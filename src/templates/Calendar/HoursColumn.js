import React from 'react';
import styled from 'styled-components';
import { hours } from '../../context/data';

const HoursStyle = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999999;
    background: var(--white);

    .header {
        position: sticky;
        top: 0;
        left: 0;
        z-index: 99999;
        background: var(--white);
    }

    .hour {
        height: var(--calendarVisitHeight);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-bottom: 1px solid var(--grey);
        border-right: 1px solid var(--grey);
    }

`

export default function HoursColumns() {
    return (
        <HoursStyle>
            <div className="header">
                <p>Godz</p>
            </div>
            {hours.map(({ start }) => (
                <div className="hour" key={start}>
                    <p className="start">{start}</p>
                </div>
            ))}
        </HoursStyle>
    )
}