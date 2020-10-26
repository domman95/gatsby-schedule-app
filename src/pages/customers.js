import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading';
import Panel from '../components/Panel';
import Button from '../components/Button';
import Input from '../components/Input';
import CustomerCard from '../components/CustomerCard';
import viewLn from '../assets/icons/viewLn.svg'
import viewSq from '../assets/icons/viewSq.svg'
import { DeleteModal } from '../components/Modal';
import MainContext from '../context/MainContext';

const CustomersPageStyles = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

const ViewOptions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        border: 1px solid var(--grey);
        border-radius: 3px;
        width: 30px;
        height: 30px;
    }

    .linear {
        background: url(${viewLn}) no-repeat center;
        margin-right: 5px;
    }
    
    .tiled {
        background: url(${viewSq}) no-repeat center;
    }

    .active {
        border: 2px solid var(--blue);
    }
`

const MainStyles = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 280px));
    justify-content: center;
    gap: 20px;
    margin: 0 10px 20px;
    overflow-y: scroll;
    flex: 1;
`


export default function CustomersPage() {

    const [showModal, setShowModal] = useState(false);

    const context = React.useContext(MainContext);
    const { customers } = context;

    const toggleModal = () => setShowModal(!showModal)


    return (
            <CustomersPageStyles>
            <Heading>Karty klientów</Heading>
            <Panel>
                <Button className="customersButton">
                    Dodaj klienta
                </Button>
                <Input />
                <ViewOptions className="customersViewOptions">
                    <button className="linear" aria-label="linear view"/>
                    <button className="tiled" aria-label="tiled view"/>
                </ViewOptions>
            </Panel>
            <MainStyles>
                {customers && customers.map(customer => <CustomerCard key={customer.id} customer={customer} />)}
            </MainStyles>
            {showModal && <DeleteModal showModal={showModal} />}
            </CustomersPageStyles>
    )
}
