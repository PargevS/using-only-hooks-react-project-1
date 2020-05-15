import React from 'react';
// *************************
import './TopBarMenu.scss';

const TopBarMenu = (props) => {
    const {categories} = props;

    const categoriesListCheckedHandler = (event) => {

    }

    return (
        <nav className='header-menu-nav'>
            <ul className='menu-list'>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
                <li><a href="#">Link 4</a></li>
                <li><a href="#">Link 5</a></li>
                <li><a href="#">Link 6</a></li>
            </ul>
        </nav>
    );
};

export default TopBarMenu;
