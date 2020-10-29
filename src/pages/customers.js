import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading';
import Panel from '../components/Panel';
import Button from '../components/Button';
import Search from '../components/Search';
import CustomerCard from '../components/CustomerCard';
import viewLn from '../assets/icons/viewLn.svg'
import viewSq from '../assets/icons/viewSq.svg'
import MainContext from '../context/MainContext';
import Modal from '../components/Modal';
import AddCustomer from '../components/AddCustomer';
import { findCustomer } from '../utils/findCustomer';

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

    const [isModal, setIsModal] = useState(false);
    const [allCustomers, setAllCustomers] = useState([]);
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    
    const context = React.useContext(MainContext);

    useEffect(() => {
        const { customers } = context;

        setAllCustomers(customers)
    }, [context])


    const toggleModal = () => setIsModal(!isModal)

    return (
            <CustomersPageStyles>
            <Heading>Karty klientów</Heading>
            <Panel>
                <Button className="customersButton" onClick={toggleModal}>
                    Dodaj klienta
                </Button>
                <Search findCustomer={findCustomer} setFilteredCustomers={setFilteredCustomers} customers={allCustomers} />
                <ViewOptions className="customersViewOptions">
                    <button className="linear" aria-label="linear view"/>
                    <button className="tiled" aria-label="tiled view"/>
                </ViewOptions>
            </Panel>
            <MainStyles>
                {(filteredCustomers.length !== 0 && filteredCustomers.length < allCustomers.length) ? (
                    filteredCustomers.map(customer => <CustomerCard key={customer.id} customer={customer} />)
                )   :  (
                    allCustomers && allCustomers.map(customer => <CustomerCard key={customer.id} customer={customer} />)
                )}

            </MainStyles>
            {isModal && <Modal close={toggleModal}><AddCustomer close={setIsModal}/></Modal>}
            </CustomersPageStyles>
    )
}
