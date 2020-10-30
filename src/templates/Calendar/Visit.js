import React, {useState} from 'react';
import styled from 'styled-components';
import EditVisit from '../../components/EditVisit';
import Modal from '../../components/Modal';
import { getVisitLength } from '../../utils/getVisitLength';
import moment from 'moment';

const VisitStyles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    position: absolute;
    top: ${({ top }) => `${top + 5}px`};
    left: 5px;
    width: calc(100% - 10px);
    height: ${({ height, visitLength }) => visitLength > 0 ? `calc(${height * visitLength - 10}px)` : `calc(${height - 10}px)`};
    background: ${({ color: { r, g, b } }) => `rgb(${r}, ${g}, ${b})`};
    border-radius: 6px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 8px;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        background: ${({ color: { r, g, b } }) => `rgb(${r - 30}, ${g - 30}, ${b - 30})`};
    }

    .leftSide {
        margin-left: 8px;
        height: ${({ visitLength }) => visitLength > 1 && '100%'};
        padding: ${({visitLength}) => visitLength > 1 ? '10px' : '0 10px'};

        .name {
            font-size: 16px;
            span {
                font-size: 12px;
            }
        }

        .services {
            font-size: 12px;
        }
    }

    .rightSide {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        height: 100%;
        padding: 0 5px;

        p {
            font-size: 10px;
            color: var(--darkgrey);
        }

        .start {
            padding-top: 5px;
        }

        .end {
            padding-bottom: 5px;
        }

        .line {
            width: 1px;
            border: 0.5px dashed var(--darkgrey);
            flex: 1;
        }
    }

`

export default function Visit({ top, color, visit, height }) {
    
    const [isOpen, setIsOpen] = useState(false);

    const { firstName, lastName, start, end, services, worker, date } = visit;

    const dateVisit = moment(date);

    const toggleEditModal = () => setIsOpen(!isOpen);

    return (
        <>
        <VisitStyles
            top={top}
            color={color}
            visitLength={getVisitLength(start, end)}
            height={height + 1}
            onClick={toggleEditModal}
        >
            <div className="leftSide">
                <p className="name">{firstName} {lastName}</p>
                <p className="services">{services}</p>
            </div>
            <div className="rightSide">
                <p className="start">{start}</p>
                <div className="line" />
                <p className="end">{end}</p>
            </div>
        </VisitStyles>
            <Modal open={isOpen} close={toggleEditModal}>
                <EditVisit
                    close={setIsOpen}
                    workerName={worker}
                    timeStart={start}
                    timeEnd={end}
                    dateVisit={dateVisit}
                    visitServices={services}
                    customerId={visit.customerId}
                    visitId={visit.visitId}
                />
            </Modal>
        </>
    )
}