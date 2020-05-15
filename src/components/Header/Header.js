import React from 'react';
// *************************
import './Header.scss';
import TopBarMenu from "../TopBarMenu";

const Header = () => {
    const a = '';
    console.log(a);

    return (
        <header className='top-bar'>
            <input type="checkbox" id="top-menu-toggle-input"/>
            <label htmlFor="top-menu-toggle-input" id="top-menu-toggle-btn">
                <div className="btn-line"></div>
            </label>
            <div className="row header-wrap">
                <div className="row header-top">
                    <h1>News Page</h1>
                </div>
                <div className="row header-menu">
                    <TopBarMenu/>
                </div>
            </div>
        </header>
    );
};

export default Header;
