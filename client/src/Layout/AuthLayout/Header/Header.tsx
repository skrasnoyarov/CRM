// @flow
import {Link} from 'react-router-dom';
import React from 'react';

function Header () {
    return (
        <nav>
            <div className="nav-wrapper grey darken-1">
                <Link to='/login' className="brand-logo">Newborn</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/login' >Вход</Link></li>
                    <li><Link to='/register' >Регистрация</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;

