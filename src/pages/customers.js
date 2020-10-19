import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading';
import Panel from '../components/Panel';
import Select from '../components/Select';
import Button from '../components/Button';
import Input from '../components/Input';
import Main from '../components/Main';
import CustomerCard from '../components/CustomerCard';
import ModalDelete from '../components/ModalDelete';
import ModalAdd from '../components/ModalAdd';

const CustomersPageStyles = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

const WrapperSelects = styled.div`

`

export default function CustomersPage() {
    return (
        <CustomersPageStyles>
            <Heading>Karty klientów</Heading>
            <Panel>
                <Button>
                    Dodaj klienta
                </Button>
                <Input />
                <WrapperSelects>
                    <Select template="Widok">
                        {[{name: 'Lista'}, {name: 'Kafelki'}]}
                    </Select>
                    <Select template="Sortuj">
                        {[{name: "A-Z"}, {name: "Z-A"}]}
                    </Select>
                </WrapperSelects>
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