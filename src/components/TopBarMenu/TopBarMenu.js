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
                <li className='nav-list-item'>
                    <a href="#">
                        <span className='text'>Link 1</span>
                        <span className='border'></span>
                    </a>
                </li>
                <li className='nav-list-item'>
                    <a href="#">
                        <span className='text'>Link 2</span>
                        <span className='border'></span>
                    </a>
                </li>
                <li className='nav-list-item'>
                    <a href="#">
                        <span className='text'>Link 3</span>
                        <span className='border'></span>
                    </a>
                </li>
                <li className='nav-list-item'>
                    <a href="#">
                        <span className='text'>Link 4</span>
                        <span className='border'></span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default TopBarMenu;
