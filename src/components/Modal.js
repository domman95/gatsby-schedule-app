import React, {useRef} from 'react';
import styled from 'styled-components';
import cross from '../assets/icons/cross.svg';
import { useSpring, animated } from 'react-spring';

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

const ModalStyles = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 40px 30px;
    background: var(--white);
    border-radius: 6px;
    font-size: 16px;

    h3,
    span {
        color: black;
    }
`

export default function Modal({ children, close, open, setOpen }) {
    
    const props = useSpring({
        opacity: open ? 1 : 0,
        transform: open ? 'translateY(0)' : 'translateY(-100%)'
    });

    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setOpen(false)
        }
    }

    return (
        <>
            { open && 
                <Background ref={modalRef} onClick={closeModal}>
                    <animated.div style={props}>
                        <ModalStyles>
                            <button onClick={close} className="cross"></button>
                            {children}
                        </ModalStyles>
                    </animated.div>
                </Background>
        }
        </>
    )
}