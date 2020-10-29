import React from 'react';
import styled from 'styled-components';
import { getVisitLength } from '../../utils/getVisitLength';

const VisitStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: ${({top}) => `${top + 5}px`};
    left: 5px;
    width: calc(100% - 10px);
    height: ${({ height, visitLength }) => visitLength > 0 ? `calc(${height * visitLength - 10}px)` : `calc(${height - 10}px)`};
    background: ${({ color: { r, g, b } }) => `rgb(${r}, ${g}, ${b})`};
    border-radius: 6px;
`

export default function Visit({ top, color, visit, height }) {
    
    const { firstName, lastName, start, end } = visit;

    return (
        <VisitStyles
            top={top}
            color={color}
            visitLength={getVisitLength(start, end)}
            height={height + 1}
        >
            {firstName} {lastName}
        </VisitStyles>
    )
}