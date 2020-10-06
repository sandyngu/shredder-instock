import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './assets/Logo/InStock-Logo_2x.png';

import './Header.scss';

class Navbar extends Component {
    render () {
        return (
            <div className='navbar'>
                <div>
                    <NavLink to='/warehouses' className='navbar__logo'>
                        <img src={ Logo } className='navbar__img' alt='Instock' />
                    </NavLink>
                </div>
                <div className='navbar__links'>
                    <ul className='navbar__list'>
                        <NavLink to='/inventory' className='navbar__inventory'></NavLink>
                        <NavLink to='/warehouses' className='navbar__warehouses'></NavLink>
                    </ul>
                </div>
            </div>
        )
    }
};

export default Navbar;