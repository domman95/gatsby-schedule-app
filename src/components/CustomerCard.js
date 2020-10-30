import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import star from '../assets/icons/star.svg';
import conversation from '../assets/icons/conversation.svg';
import woman from '../assets/woman.png';
import man from '../assets/man.png';
import Modal from './Modal';
import AddVisit from './AddVisit';

const CustomerCardStyles = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 360px;
    border-radius: 6px;
    background: var(--white);
    padding: 20px;
    transition: background .3s linear;

    &:hover {
        background: var(--blue);
        color: white;
    }

    &:hover > .image,
    &:hover > .image::before {
        border-color: var(--white);
    }

    &:hover > .wrapperButtons {
        background: var(--white);
    }

    &:hover > .information div {
        background: var(--white);
    }



    .image {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 1px solid var(--blue);
        width: clamp(100px, 130px, 160px);
        height: clamp(100px, 130px, 160px);
        padding: 7px;

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            padding: 5px;
            border: 2px dotted var(--blue);
        }

        img {
            border-radius: 50%;
        }

        .star {
            position: absolute;
            bottom: 0;
            left: 0;
            width: clamp(25px, 30px, 35px);
            height: clamp(25px, 30px, 35px);
            border-radius: 50%;
            background: url(${star}) no-repeat center white;
            border: 1px solid var(--grey);
        }

        .conversation {
            position: absolute;
            top: 10px;
            right: -10px;
            width: clamp(30px, 40px, 50px);
            height: clamp(15px, 20px, 25px);
            border-radius: 8px;
            background: url(${conversation}) no-repeat center white;
            border: 1px solid var(--grey);
        }

    }

    .information {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h4 {
            font-size: 20px;
        }
    }

    .wrapperButtons {
        display: flex;
        padding: 5px;
        border-radius: 6px;

        button:nth-child(1) {
            margin-right: 10px;
        }
    }
`

const Line = styled.div`
    width: 100%;
    height: 1px;
    background: var(--blue);
    margin: 5px 0;
`

export default function CustomerCard({ customer: { customerId, firstName, lastName, phoneNumber, sex } }) {

    const [isModal, setIsModal] = useState(false)

    const toggleModal = () => setIsModal(!isModal);

    return (
        <CustomerCardStyles>
            <div className="image">
                <div className="star" />
                <div className="conversation" />
                {sex === 'male' && <img src={man} alt="mężczyzna" />}
                {sex === 'female' && <img src={woman} alt="kobieta" />}
            </div>
            <div className="information">
                <h4>{firstName} {lastName}</h4>
                <Line />
                <p className="phone">{phoneNumber}</p>
            </div>
            <div className="wrapperButtons">
                <Button onClick={toggleModal}>umów wizytę</Button>
                <Button secondary>więcej</Button>
            </div>
            <Modal open={isModal} close={toggleModal}><AddVisit close={setIsModal} customerId={customerId}/></Modal>
        </CustomerCardStyles>
    )
}

CustomerCard.defaultProps = {
    sex: 'female'
}