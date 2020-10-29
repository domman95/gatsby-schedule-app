import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import MainContext from '../../context/MainContext';
import Visit from './Visit';
import Modal from '../../components/Modal';
import AddVisit from '../../components/AddVisit';

const FieldStyles = styled.div`
    border-bottom: 1px solid var(--grey);
    border-right: 1px solid var(--grey);
    height: 50px;
    cursor: pointer;
`

export default function Field({timeStart, timeEnd, workerName, color, date}) {
    const context = React.useContext(MainContext);
    
    const [offTop, setOffTop] = useState(0);
    const [height, setHeight] = useState(0);
    const [isModal, setIsModal] = useState(false);
    const [allVisits, setAllVisits] = useState([]);
    
    
    const myRef = React.createRef();
    const { visits } = context;
    
    
    useEffect(() => {
        setOffTop(myRef.current.offsetTop);
        setHeight(myRef.current.clientHeight);
        setAllVisits(visits)
    }, [myRef, allVisits])


    const toggleModal = () => {
        if (myRef.current.children.length !== 0) return;
        setIsModal(!isModal);
    }

    return (
        <>
        <FieldStyles
            ref={myRef}
            timeStart={timeStart}
            timeEnd={timeEnd}
            workerName={workerName}
            onClick={toggleModal}
        >   
                {allVisits && allVisits.map(visit => {
                if (visit.worker === workerName && timeStart === visit.start && visit.date === date.format('YYYY-MM-DD')) {
                    return (
                        <Visit
                        key={visit.id}
                        visit={visit}
                        top={offTop}
                        color={color}
                        height={height}/>
                    )
                }
                })}
        </FieldStyles>
            {isModal && <Modal close={toggleModal}><AddVisit workerName={workerName} dateVisit={date} timeStart={timeStart} timeEnd={timeEnd} close={setIsModal}/></Modal>}
        </>
    )
}