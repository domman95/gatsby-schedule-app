import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Modal from './Modal';
import AddVisit from './AddVisit';
import CustomerDetails from '../templates/CustomerDetails';
import { CustomerImage } from '../styles/GlobalStyles';

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

    @media (max-width: 545.5px) {
        width: 280px;
        margin-left: 10px;
    }

    &:hover {
        background: var(--blue);
        color: white;
    }

    &:hover > .image,
    &:hover > .image::before {
        border-color: var(--white);
    }

    &:hover > .wrapperButtons,
    &:hover > .information div {
        background: var(--white);
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

export default function CustomerCard({ customer }) {
    const { customerId, firstName, lastName, phoneNumber, sex } = customer

    const [isModal, setIsModal] = useState(false)
    const [open, setOpen] = useState(false)

    const toggleModal = () => setIsModal(!isModal);

    return (
        <CustomerCardStyles>
            <CustomerImage>
                <div className="star" />
                <div className="conversation" />
                <img src={require(`../assets/${sex}.png`)} alt=""/>
            </CustomerImage>
            <div className="information">
                <h4>{firstName} {lastName}</h4>
                <Line />
                <p className="phone">{phoneNumber}</p>
            </div>
            <div className="wrapperButtons">
                <Button onClick={toggleModal}>umów wizytę</Button>
                <Button onClick={() => setOpen(!open)} secondary >więcej</Button>
            </div>
            <Modal open={isModal} setOpen={setIsModal} close={toggleModal}><AddVisit close={setIsModal} customerId={customerId}/></Modal>
            <CustomerDetails open={open} setOpen={setOpen} data={customer} />
        </CustomerCardStyles>
    )
}

CustomerCard.defaultProps = {
    sex: 'female'
}