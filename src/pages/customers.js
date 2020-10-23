import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading';
import Panel from '../components/Panel';
import Button from '../components/Button';
import Input from '../components/Input';
import Main from '../components/Main';
import CustomerCard from '../components/CustomerCard';
import viewLn from '../assets/icons/viewLn.svg'
import viewSq from '../assets/icons/viewSq.svg'

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


export default function CustomersPage() {
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
            <Main>
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
            </Main>
        </CustomersPageStyles>
    )
}