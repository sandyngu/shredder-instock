import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo/InStock-Logo_2x.png';

import './Header.scss';

const Header = () => {
        return (
            <div className='navbar'>
                <div className='navbar__logo-container'>
                    <NavLink to='/warehouses'>
                        <img src= {Logo} className='navbar__img' alt='Instock' />
                    </NavLink>
                </div>
                <div className='navbar__links'>
                    <ul className='navbar__list'>
                        <NavLink to='/warehouses' className='navbar__warehouses' activeClassName='navbar__warehouses--active'>Warehouses</NavLink>
                        <NavLink to='/inventories' className='navbar__inventory' activeClassName='navbar__warehouses--active'>Inventory</NavLink>
                    </ul>
                </div>
            </div>
        )
    };

export default Header;