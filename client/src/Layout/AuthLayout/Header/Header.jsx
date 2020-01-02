// @flow
import React from 'react';

function Header () {
    return (
        <nav>
            <div className="nav-wrapper grey darken-1">
                <a href="#" className="brand-logo">Newborn</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a>Вход</a></li>
                    <li><a>Регистрация</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;

