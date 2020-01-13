import React from 'react';
import './header.scss';

const Header = ({ Link }) => {
    return (
        <div className="headerBar">
            <nav>
                <ul className="menuBar">
                    <li>
                        <Link to="/Om">Om Sakcenter</Link>
                    </li>
                    <li>
                        <Link to="/Uthyrning">Att hyra av oss</Link>
                    </li>
                    <li>
                        <Link to="/Sortiment">Sortiment</Link>
                    </li>
                    <li className="logo">
                        <Link to="/">SC</Link>
                    </li>
                    <li>
                        <Link to="/Workshop">Workshops och föreläsningar</Link>
                    </li>
                    <li>
                        <Link to="/Kontakt">Kontakt</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;