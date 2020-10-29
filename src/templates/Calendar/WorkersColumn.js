import React from 'react';
import styled from 'styled-components';
import { hours, workers } from '../../context/data';
import Field from './Field';

const WorkersStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .column {
        position: relative;
        min-width: 260px;
    }
`

const WorkerColor = styled.div`
    width: 20px;
    height: 20px;
    background: ${({ color: { r, g, b } }) => `rgb(${r}, ${g}, ${b})`};
    margin-right: 5px;
    border-radius: 6px;
`

export default function WorkersColumns({date}) {
    return (
        <WorkersStyle>
            {workers.map(({ id, name, color }) => {
                return (
                    <div className="column" key={id}>
                        <div className="header">
                            <WorkerColor color={color} />
                            <p>{name}</p>
                        </div>
                        {hours.map(({ start, end }) => (
                            <Field
                                key={start}
                                timeStart={start}
                                timeEnd={end}
                                workerName={name}
                                color={color}
                                date={date}
                            />
                        ))}
                    </div>
                )
            })}
        </WorkersStyle>
    )
}