import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import pl from 'moment/locale/pl';

const HeadingStyles = styled.header`
    display: grid;
    grid-template-columns: 36px 1fr auto;
    align-items: center;
    background: var(--white);
    height: 60px;
    border-bottom: 1px solid var(--grey);
    padding: 0 30px;

    .back {
        font-size: 26px;
        background: transparent;
        border: none;
        transition: transform .3s;

        &:hover {
            transform: translateX(-6px);
        }
    }

    h1 {
        padding: 0 30px;
        font-size: clamp(16px, 24px, 32px);
        font-weight: var(--medium);
    }

    .currentDate {
        font-weight: var(--light);
        font-size: 16px;
    }
`

export default function Heading({children}) {
    return (
        <HeadingStyles>
            <button className="back" onClick={() => window.history.back()}>
                &#129120;
            </button>
            <h1>{children}</h1>
            <p className="currentDate">
                {moment(pl).format('dddd')}, {moment(pl).format('DD MMMM YYYY')}
            </p>
        </HeadingStyles>
    )
}