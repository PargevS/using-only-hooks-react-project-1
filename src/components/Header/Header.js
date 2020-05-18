import React from 'react';
// *************************
import './Header.scss';
import TopBarMenu from "../TopBarMenu";

const Header = () => {
    return (
        <header className='top-bar'>
            <input type="checkbox" id="top-menu-toggle-input"/>
            <label htmlFor="top-menu-toggle-input" id="top-menu-toggle-btn">
                <div className="btn-line"></div>
            </label>
            <div className="row header-wrap">
                <div className="row header-top">
                    <h1><a href="/">News Page</a></h1>
                    <ul className='auth-links-list'>
                        <li className='auth-links-item'><a href="/login">Sing In</a></li>
                        <li className='auth-links-item'><a href="/register">Sing Up</a></li>
                    </ul>
                </div>
                <div className="row header-menu">
                    <TopBarMenu/>
                </div>
            </div>
        </header>
    );
};

export default Header;
