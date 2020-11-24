import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, useChain, config, animated } from 'react-spring'
import MainContext from '../context/MainContext';
import { CustomerImage } from '../styles/GlobalStyles';
import Button from '../components/Button';
import moment from 'moment';

const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
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
    display: grid;
    grid-template-columns: 1fr;
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
            width: 70px;
            height: 70px;
            grid-column: 1 / 4;
            grid-row: 1 / 3;
            margin: 0 10px;
        }

        .fullName,
        .phoneNumber {
            grid-column: 4 / -1;
            padding-left: 5px;
        }

        .fullName {
            grid-row: 1 / 2;
        }

        .phoneNumber {
            grid-row: 2 / 3;
        }

        .counter {
            display: flex;
            justify-content: center;
            margin: 10px 5px;
            gap: 0 5px;
            grid-column: 1 / -1;
            grid-row: 3 / 5;
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
            justify-content: space-between;
            grid-column: 1 / -1;
        }
    }

`

export default function CustomerDetails({ open, data, setOpen }) {
    const [state, setState] = useState([])

    const {customerId, firstName, lastName, sex, phoneNumber } = data

    const modalRef = useRef()

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
        setOpen(false)
        }
    }

    const context = React.useContext(MainContext);
    const { visits, date } = context;

    useEffect(() => {
        const ownVisits = visits.filter(item => item.customerId === customerId)
        setState(ownVisits)
    }, [context])

    const springRef = useRef()

    const { size } = useSpring({
      ref: springRef,
      config: config.stiff,
        from: {
            size: '10%',
        },
      to: {
          size: open ? '80%' : '10%',
        }
    })


    useChain(open ? [springRef] : [springRef], [0, open ? 0.1 : 0.6])


    return (
        <>
            { open && 
                <Background ref={modalRef} onClick={closeModal}>
                <CustomerPageStyles style={{ width: size, height: size }}>
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
                                <span>{state.filter(item => item.date >= date.format('YYYY-MM-DD')).length}</span>
                            </div>
                            <div className="sql done">
                                <p>zrealizowane</p>
                                <span>{state.filter(item => item.date < date.format('YYYY-MM-DD')).length}</span>
                            </div>
                            <div className="sql all">
                                <p>wszystkie</p>
                                <span>{state.length}</span>
                            </div>
                        </div>
                        <div className="buttons">
                            <Button secondary>usuń klienta</Button>
                            <Button>dodaj wizytę</Button>
                        </div>
                    </div>    
                </CustomerPageStyles>
                </Background>
                }
        </>
    )
}