import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import logo from '../assets/logo.svg';
import dashboard from '../assets/icons/dashboard.png';
import calendar from '../assets/icons/calendar.svg';
import customercards from '../assets/icons/customercards.svg';
import settings from '../assets/icons/settings.svg';
import logout from '../assets/icons/logout.svg';

const NavStyles = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;
    height: 100vh;
    background: var(--blue);
    padding: 20px 10px;

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

export default function Nav() {
    return (
        <NavStyles>
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
        </NavStyles>
    )
}