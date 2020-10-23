import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import pl from 'moment/locale/pl';
import MainContext from '../context/MainContext';

const HeadingStyles = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: 36px 1fr auto;
    align-items: center;
    background: var(--white);
    width: 100%;
    height: 60px;
    border-bottom: 1px solid var(--grey);
    padding: ${({ open }) => open ? '0 30px 0 60px' : '0 20px'};
    transition: .3s linear;

    .back {
        font-size: clamp(16px, 24px, 32px);
        background: transparent;
        border: none;
        transition: all .3s;

        &:hover {
            transform: translateX(-6px);
        }
    }

    h1 {
        padding: 0 10px;
        font-size: clamp(16px, 20px, 32px);
        white-space: nowrap;
        font-weight: var(--medium);
    }

    .currentDate {
        display: none;
        font-weight: var(--light);
        font-size: clamp(8px, 16px, 24px);
        text-align: right;

        @media (min-width: 477px) {
            display: block;
        }
    }
`

export default function Heading({ children }) {
    return (
        <MainContext.Consumer>
            {({open}) => (
            <HeadingStyles open={open}>
                <button className="back">
                    &#129120;
                </button>
                <h1>{children}</h1>
                <p className="currentDate">
                    {moment(pl).format('dddd')}, {moment(pl).format('DD MMMM YYYY')}
                </p>
            </HeadingStyles>
            )}
        </MainContext.Consumer>
    )
}