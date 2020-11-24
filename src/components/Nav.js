import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import dashboard from '../assets/icons/dashboard.png';
import calendar from '../assets/icons/calendar.svg';
import customercards from '../assets/icons/customercards.svg';
import settings from '../assets/icons/settings.svg';
import logout from '../assets/icons/logout.svg';
import MainContext from '../context/MainContext';

const NavStyles = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;
    height: 100%;
    background: var(--blue);
    padding: 20px 10px;
    z-index: 9999999999;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform .3s linear;

    .logo {
        width: 100%;
    }

    .links {
        flex: 1;
        width: 26px;
        height: 26px;
        text-align: center;
        padding: 20px 0;
        
        li {
            margin: 20px 0;
            list-style-type: none;
        }
    }

    .logout {
        border: none;
        width: 26px;
        height: 26px;
        background: transparent;    
    }
`

const DisplayNavButton = styled.button`
    position: absolute;
    bottom: 80px;
    right: 0;
    transform: translateX(100%);
    border: none;
    background: var(--blue);
    color: white;
    font-size: 22px;
    text-align: center;
    padding: 5px;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    transition: .3s linear;
    opacity: .5;

    &:hover {
        opacity: 1;
    }
`

export default function Nav() {
    
    return (
        <MainContext.Consumer>
            {({open, toggleMenu}) => (
                <NavStyles open={open}>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo salonu fryzur IVA"/>
                </Link>
            </div>
            <ul className="links">
                <li>
                    <Link to="/">
                        <img src={dashboard} alt="dashboard button navigate to dashboard page"/>
                    </Link>
                </li>
                <li>
                    <Link to="/calendar">
                        <img src={calendar} alt="calendar button navigate to calendar page"/>
                    </Link>
                </li>
                <li>
                    <Link to="/customers">
                        <img src={customercards} alt="customer button navigate to customer page"/>
                    </Link>
                </li>
                <li>
                    <Link to="/settings">
                        <img src={settings} alt="setting button navigate to setting page"/>
                    </Link>
                </li>
            </ul>
            <button className="logout">
                <img src={logout} alt="logout"/>
            </button>
            <DisplayNavButton onClick={toggleMenu}>
                {open ? (<>&#129120;</>) : (<>&#129122;</>)}                    
            </DisplayNavButton>
        </NavStyles>
            )}
        </MainContext.Consumer>
    )
}