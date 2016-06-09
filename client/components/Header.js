import React from 'react';
import { Link } from 'react-router';


const Header = (props) => (
    <header className="header">
        <h1 className="header__title">
            <Link to="/">{props.title}</Link>
        </h1>
    </header>
);

export default Header;