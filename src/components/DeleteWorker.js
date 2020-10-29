import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ButtonsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(60px, 120px));
    justify-content: center;
    gap: 10px;
`

export default function DeleteWorker() {
    return (
        <>
            <h3>Usuń pracownika</h3>
            <p>
                Czy na pewno chcesz usunąć pracownika Imię Nazwisko?
            </p>
            <ButtonsWrapper>
                <Button className="but">tak</Button>
                <Button className="ton" secondary>nie</Button>
            </ButtonsWrapper>
        </>
    )
}