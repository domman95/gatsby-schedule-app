import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, useChain, config, animated } from 'react-spring'
import MainContext from '../context/MainContext';
import { CustomerImage } from '../styles/GlobalStyles';
import Button from '../components/Button';
import { workers } from '../context/data';

const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 999999;
    background: rgb(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

const CustomerPageStyles = styled(animated.div)`
    position: relative;
    border-radius: 6px;
    color: black;
    background: white;
    overflow: hidden;
    padding: 20px 10px;

    .customerCardMainInfo {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(6, 35px);
        grid-column: 1 / -1;
        padding: 10px 0;

        .image {
            grid-column: 1 / 4;
            grid-row: 1 / 3;
            margin: 0 10px;

            @media (max-width: 400px) {
                width: 60px;
                height: 60px;
            }

            @media (max-width: 500px) {
                width: 90px;
                height: 90px;
            }            
        }

        .fullName,
        .phoneNumber {
            grid-column: 4 / -1;
            padding-left: 5px;
        }

        .fullName {
            grid-row: 1 / 2;
            align-self: flex-end;
        }

        .phoneNumber {
            grid-row: 2 / 3;
            align-self: center;
        }

        .counter {
            display: flex;
            justify-content: space-around;
            margin: 10px 5px 15px;
            gap: 5px;
            grid-column: 1 / -1;
            grid-row: 4 / 6;
            border-radius: 6px;
            max-height: 60px;
            background: #f3f3f3;


            .sql {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                p {
                    font-size: 10px;
                    color: var(--darkgrey);
                }

                span {
                    font-size: 14px;
                    font-weight: var(--bold);
                    color: var(--black);
                }
            }
        }

        .buttons {
            padding: 0 5px;
            display: flex;
            align-items: center;
            grid-column: 1 / -1;
            grid-row: 6 / -1;
            gap: 10px;

            button {
                flex: 1;
                padding: 10px 15px;
            }
        }

        @media (min-width: 400px) {
            .image {
                grid-row: 1 / 4;
                justify-self: center;
                align-content: center;
            }

            .fullName,
            .phoneNumber {
                font-size: 18px;
            }

            .counter {
                grid-row: 4 / 6;
            }
        }

        @media (min-width: 500px) {
            .fullName,
            .phoneNumber {
                font-size: 22px;
            }

            .counter {
                grid-column: 4 / -1;
                grid-row: 3 / 5;
            }

            .buttons {
                grid-row: 5 / -1;
            }
        }

        @media (min-width: 768px) {
            grid-template-rows: repeat(4, 35px);

            .fullName,
            .phoneNumber {
                grid-column: 4 / 7;
            }

            .counter {
                grid-column: 6 / -1;
                grid-row: 1 / 3;
                margin-right: 30px;
            }

            .buttons {
                grid-row: 3 / 5;
                grid-column: 4 / -1;
                padding-right: 30px;
            }
        }
    }

    .listOfVisits {
        margin: 10px 0;
        background: white;

        @media (min-width: 768px) {
            margin: 10px 30px;
        }

        .kindOfVisits {
            display: flex;
            flex: 1;

            button {
                flex: 1;
                background: white;
                border: none;
                color: var(--darkgrey);
            }

            .active {
                border: 1px solid var(--blue);
                border-bottom: none;
                border-top-left-radius: 6px;
                border-top-right-radius: 6px;
                padding: 5px 0;
                color: var(--blue);
                font-weight: var(--bold);
                background: white;
            }
        }

        .listUl {
            border: 1px solid var(--blue);
            border-radius: 6px;
            overflow: scroll;
            height: 300px;

            @media (min-width: 768px) {
                height: 370px;
            }

            .noVisits {
                text-align: center;
                padding: 20px 0;
            }
        }
    }
`

const IndividualVisit = styled.li`
    position: relative;
    list-style: none;
    margin: 10px 5px;
    padding-left: 10px;
    background: #f3f3f3;
    border-radius: 6px;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 8px;
        background: ${({color}) => color && `rgb(${color.r}, ${color.g}, ${color.b})`};
    }

    .timeInfo
    {
        display: flex;
        justify-content: space-between;
        padding: 5px;

        .dateOfVisit {
            font-weight: var(--bold);
        }
    }

    .additional {
        display: flex;
        flex-direction: column;
        padding: 0 5px 5px;
    }
`

export default function CustomerDetails({ open, data, setOpen }) {
    const [allVisits, setAllVisits] = useState([])
    const [visitType, setVisitType] = useState('pending');
    const [visitPending, setVisitPending] = useState([]);
    const [visitDone, setVisitDone] = useState([]);

    const {customerId, firstName, lastName, sex, phoneNumber } = data

    const modalRef = useRef()

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
        setOpen(false)
        }
    }

    const getVisitType = (e) => {
        console.log(e.target.name)
        setVisitType(e.target.name)
    }

    const context = React.useContext(MainContext);
    const { visits, date } = context;

    useEffect(() => {
        const ownVisits = visits.filter(item => item.customerId === customerId)
        setAllVisits(ownVisits)
    }, [context, date, visitType])

    const springRef = useRef()

    const { width, height } = useSpring({
      ref: springRef,
      config: config.stiff,
        from: {
            width: '10%',
            height: '0px',
        },
      to: {
          width: open ? '80%' : '10%',
          height: open ? '600px' : '0px',
        }
    })


    useChain(open ? [springRef] : [springRef], [0, open ? 0.1 : 0.6])


    return (
        <>
            { open && 
                <Background ref={modalRef} onClick={closeModal}>
                <CustomerPageStyles style={{ width: width, height: height }}>
                    <button className="cross" onClick={() => setOpen(!open)}></button>
                    <div className="customerCardMainInfo">
                        <CustomerImage className="image">
                            <div className="star" />
                            <div className="conversation" />
                            <img src={require(`../assets/${sex}.png`)} alt={`customer card photo - ${sex}`} />
                        </CustomerImage>
                        <div className="fullName">{firstName} {lastName}</div>
                        <div className="phoneNumber">{phoneNumber}</div>
                        <div className="counter">
                            <div className="sql pending">
                                <p>zaplanowane</p>
                                <span>{visitPending.length}</span>
                            </div>
                            <div className="sql done">
                                <p>zrealizowane</p>
                                <span>{visitDone.length}</span>
                            </div>
                            <div className="sql all">
                                <p>wszystkie</p>
                                <span>{allVisits.length}</span>
                            </div>
                        </div>
                        <div className="buttons">
                            <Button secondary>usuń klienta</Button>
                            <Button>umów wizytę</Button>
                        </div>
                    </div>    
                    <div className="listOfVisits">
                        <div className="kindOfVisits">
                            <button className="setPending" name="pending" onClick={(e) => getVisitType(e)}>zaplanowane</button>
                            <button className="setDone active" name="done" onClick={(e) => getVisitType(e)}>zrealizowane</button>
                        </div>
                        <ul className="listUl">
                            {allVisits.length > 0 ? allVisits.map(item => {
                                const worker = workers.filter(({ name }) => name === item.worker)
                                const color = worker[0].color
                                return (
                                    <IndividualVisit key={item.visitId} color={color}>
                                        <div className="timeInfo">
                                            <p className="dateOfVisit">{item.date}</p>
                                            <p className="timeOfVisit">{item.start} - {item.end}</p>
                                        </div>
                                        <div className="additional">
                                            <p className="workerOfVisit">Fryzjer: {item.worker}</p>
                                            <p className="servicesOfVisit">Usługi: {item.services}</p>
                                        </div>
                                    </IndividualVisit>
                                )
                            }) : <p className="noVisits">brak wizyt</p>}
                        </ul>
                    </div>
                </CustomerPageStyles>
                </Background>
                }
        </>
    )
}