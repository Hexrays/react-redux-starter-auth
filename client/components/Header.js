import React from 'react';
import { Link } from 'react-router';


const Header = (props) => (
    <header className="header">
        <h1 className="header__title">
            <Link to="/">{props.title}</Link>
        </h1>

        <nav>
            <ul>
                <li><Link to="/page1">page1</Link></li>
                <li><Link to="/page2">page2</Link></li>
            </ul>
        </nav>

    </header>
);

export default Header;